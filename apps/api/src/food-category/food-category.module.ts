import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma';
import { FoodCategoryResolver } from './food-category.resolver';
import { FoodCategoryService } from './food-category.service';

@Module({
  imports: [PrismaModule],
  providers: [FoodCategoryService, FoodCategoryResolver],
})
export class FoodCategoryModule {}
