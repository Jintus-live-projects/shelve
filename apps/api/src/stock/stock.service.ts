import { Injectable } from '@nestjs/common';
import { AddUnitStockInput, SealedStock, UnitStock } from 'src/models';
import { AddSealedStockInput } from '../models';
import { catchPrismaClientError, PrismaService } from '../prisma';
import * as SealedStockMapper from './sealed-stock.mapper';
import * as UnitStockMapper from './unit-stock.mapper';

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
      return UnitStockMapper.fromEntity(createdStock);
    } catch (error) {
      return catchPrismaClientError(error);
    }
  }

  async addSealedStock(stock: AddSealedStockInput): Promise<SealedStock> {
    try {
      const createdStock = await this.prisma.sealedStockEntity.create({
        data: {
          foodId: stock.foodId,
          locationId: stock.locationId,
          purchaseDate: stock.purchaseDate,
          expiryDate: stock.expiryDate,
          quantity: stock.quantity,
          unit: stock.quantityUnit,
          barCode: stock.barCode,
          brand: stock.brand,
        },
      });
      return SealedStockMapper.fromEntity(createdStock);
    } catch (error) {
      return catchPrismaClientError(error);
    }
  }
}
