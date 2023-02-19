import { Injectable } from '@nestjs/common';
import { Food } from '@prisma/client';
import { CreateFood } from '../models';
import { PrismaService } from '../prisma';

@Injectable()
export class FoodService {
  constructor(private readonly prisma: PrismaService) {}

  foods(): Promise<Food[]> {
    return this.prisma.food.findMany();
  }

  foodById(id: number): Promise<Food> {
    return this.prisma.food.findUnique({
      where: {
        id,
      },
    });
  }

  foodByBarcode(barcode: string): Promise<Food> {
    return this.prisma.food.findUnique({
      where: {
        barcode: barcode,
      },
    });
  }

  createFood(food: CreateFood) {
    return this.prisma.food.create({
      data: {
        name: food.name,
        barcode: food.barcode,
      },
    });
  }
}
