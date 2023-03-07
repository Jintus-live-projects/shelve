import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateFoodInput, Food } from 'src/models';
import { catchPrismaClientError, PrismaService } from '../prisma';
import { fromEntity } from './food.mapper';

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
}
