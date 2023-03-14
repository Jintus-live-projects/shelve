import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateFoodCategoryInput, FoodCategory } from 'src/models';
import * as FoodMapper from '../food/food.mapper';
import { catchPrismaClientError, PrismaService } from '../prisma';
import { fromEntity } from './food-category.mapper';

@Injectable()
export class FoodCategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async createFoodCategory(
    foodCategory: CreateFoodCategoryInput,
  ): Promise<FoodCategory> {
    try {
      const createdFoodCategory = await this.prisma.foodCategoryEntity.create({
        data: {
          customName: foodCategory.name,
          foods: {
            connect: foodCategory.foodIds.map((foodId) => ({ id: foodId })),
          },
        },
      });

      return fromEntity(createdFoodCategory);
    } catch (error) {
      return catchPrismaClientError(error, {
        P2002: () =>
          new ConflictException(
            `FoodCategory: "${foodCategory.name}", already exist`,
          ),
        P2025: () => new NotFoundException(`At least a food is not found`),
      });
    }
  }

  async foodsByFoodCategoryId(id: number) {
    const foods = await this.prisma.foodEntity.findMany({
      where: {
        categories: {
          some: {
            id,
          },
        },
      },
    });

    return FoodMapper.fromEntities(foods);
  }
}
