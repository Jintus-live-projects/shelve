import { Module } from '@nestjs/common';
import { FoodModule } from '../food';
import { LocationModule } from '../location';
import { PrismaModule } from '../prisma';
import { SealedStockResolver } from './sealed-stock.resolver';
import { StockResolver } from './stock.resolver';
import { StockService } from './stock.service';
import { UnitStockResolver } from './unit-stock.resolver';

@Module({
  imports: [PrismaModule, FoodModule, LocationModule],
  providers: [
    StockService,
    UnitStockResolver,
    SealedStockResolver,
    StockResolver,
  ],
})
export class StockModule {}
