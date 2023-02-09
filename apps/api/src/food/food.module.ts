import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { FoodResolver } from './food.resolver';
import { FoodService } from './food.service';

@Module({
  providers: [PrismaService, FoodService, FoodResolver],
})
export class FoodModule {}
