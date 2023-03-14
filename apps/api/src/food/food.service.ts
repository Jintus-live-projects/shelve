import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateFoodInput, Food, FoodCategory } from 'src/models';
import * as FoodCategoryMapper from '../food-category/food-category.mapper';
import { FoodListFilterInput } from '../models';
import { catchPrismaClientError, PrismaService } from '../prisma';
import { fromEntities, fromEntity } from './food.mapper';

@Injectable()
export class FoodService {
  constructor(private readonly prisma: PrismaService) {}

  async createFood(food: CreateFoodInput): Promise<Food> {
    try {
      const createdFood = await this.prisma.foodEntity.create({
        data: {
          name: food.name,
          categories: {
            connect: food.categoryIds.map((id) => ({ id })),
          },
        },
      });
      return fromEntity(createdFood);
    } catch (error) {
      return catchPrismaClientError(error, {
        P2002: () =>
          new ConflictException(`Food: "${food.name}", already exist`),
        P2025: () => new NotFoundException(`At least a category is not found`),
      });
    }
  }

  async foods(filter?: FoodListFilterInput) {
    const foods = await this.prisma.foodEntity.findMany({
      where: filter && {
        AND: [
          filter.searchQuery && {
            name: {
              contains: filter.searchQuery,
              mode: 'insensitive',
            },
          },
          filter.categoryId && {
            categories: filter.categoryId && {
              some: {
                id: filter.categoryId,
              },
            },
          },
        ],
      },
    });
    return fromEntities(foods);
  }

  async categoriesByFoodId(foodId: number): Promise<FoodCategory[]> {
    const categories = await this.prisma.foodCategoryEntity.findMany({
      where: {
        foods: {
          some: {
            id: foodId,
          },
        },
      },
    });

    return FoodCategoryMapper.fromEntities(categories);
  }
}
