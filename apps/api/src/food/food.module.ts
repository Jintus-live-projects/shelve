import { forwardRef, Module } from '@nestjs/common';
import { LooseStockModule } from '../loose-stock';
import { PrismaModule } from '../prisma';
import { StoredStockModule } from '../stored-stock';
import { FoodResolver } from './food.resolver';
import { FoodService } from './food.service';

@Module({
  imports: [
    PrismaModule,
    forwardRef(() => StoredStockModule),
    forwardRef(() => LooseStockModule),
  ],
  providers: [FoodService, FoodResolver],
  exports: [FoodService],
})
export class FoodModule {}
