import { Injectable } from '@nestjs/common';
import { CreateFood, Food } from '../models';
import { PrismaService } from '../prisma';
import { fromEntities, fromEntity } from './food.mapper';

@Injectable()
export class FoodService {
  constructor(private readonly prisma: PrismaService) {}

  async foods(): Promise<Food[]> {
    const foods = await this.prisma.foodEntity.findMany();
    return fromEntities(foods);
  }

  async foodById(id: number): Promise<Food> {
    const food = await this.prisma.foodEntity.findUnique({
      where: {
        id,
      },
    });
    return fromEntity(food);
  }

  async foodByBarcode(barcode: string): Promise<Food> {
    const food = await this.prisma.foodEntity.findUnique({
      where: {
        barcode: barcode,
      },
    });
    return fromEntity(food);
  }

  async createFood(foodInput: CreateFood): Promise<Food> {
    const food = await this.prisma.foodEntity.create({
      data: {
        name: foodInput.name,
        barcode: foodInput.barcode,
      },
    });
    return fromEntity(food);
  }

  async searchFood(query: string): Promise<Food[]> {
    const foods = await this.prisma.foodEntity.findMany({
      where: {
        name: {
          contains: query,
          mode: 'insensitive',
        },
      },
    });

    return fromEntities(foods);
  }
}
