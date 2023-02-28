import { forwardRef, Module } from '@nestjs/common';
import { FoodModule } from '../food';
import { LocationModule } from '../location';
import { PrismaModule } from '../prisma';
import { StoredStockResolver } from './stored-stock.resolver';
import { StoredStockService } from './stored-stock.service';

@Module({
  imports: [PrismaModule, forwardRef(() => FoodModule), LocationModule],
  providers: [StoredStockService, StoredStockResolver],
  exports: [StoredStockService],
})
export class StoredStockModule {}
