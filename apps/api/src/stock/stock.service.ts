import { Injectable } from '@nestjs/common';
import { AddUnitStockInput, UnitStock } from 'src/models';
import { catchPrismaClientError, PrismaService } from '../prisma';
import { fromEntity } from './unit-stock.mapper';

@Injectable()
export class StockService {
  constructor(private readonly prisma: PrismaService) {}

  async addUnitStock(stock: AddUnitStockInput): Promise<UnitStock> {
    try {
      const createdStock = await this.prisma.unitStockEntity.create({
        data: {
          foodId: stock.foodId,
          locationId: stock.locationId,
          purchaseDate: stock.purchaseDate,
          expiryDate: stock.expiryDate,
          quantity: stock.quantity,
          unit: stock.quantityUnit,
        },
      });
      return fromEntity(createdStock);
    } catch (error) {
      return catchPrismaClientError(error);
    }
  }
}
