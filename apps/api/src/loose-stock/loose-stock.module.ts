import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma';
import { LooseStockService } from './loose-stock.service';

@Module({
  imports: [PrismaModule],
  providers: [LooseStockService],
  exports: [LooseStockService],
})
export class LooseStockModule {}
