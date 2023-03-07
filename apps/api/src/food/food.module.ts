import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma';
import { FoodResolver } from './food.resolver';
import { FoodService } from './food.service';

@Module({
  imports: [PrismaModule],
  providers: [FoodService, FoodResolver],
})
export class FoodModule {}
