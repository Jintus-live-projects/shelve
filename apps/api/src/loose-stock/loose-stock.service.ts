import { Injectable } from '@nestjs/common';
import { LooseStock } from '../models';
import { PrismaService } from '../prisma';
import { fromEntities } from './loose-stock.mapper';

@Injectable()
export class LooseStockService {
  constructor(private readonly prisma: PrismaService) {}

  async looseStockByFoodId(foodId: number): Promise<LooseStock[]> {
    const looseStockList = await this.prisma.looseStockEntity.findMany({
      where: {
        foodId,
      },
    });
    return fromEntities(looseStockList);
  }
}
