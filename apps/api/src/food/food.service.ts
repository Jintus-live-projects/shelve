import { Injectable } from '@nestjs/common';
import { Food } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class FoodService {
  constructor(private readonly prisma: PrismaService) {}

  async foods(): Promise<Food[]> {
    return this.prisma.food.findMany();
  }

  async foodById(id: number): Promise<Food> {
    return this.prisma.food.findUnique({
      where: {
        id,
      },
    });
  }
}
