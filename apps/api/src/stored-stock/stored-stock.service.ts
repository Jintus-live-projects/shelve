import { Injectable } from '@nestjs/common';
import { StoredFood, StoredStock } from '../models';
import { PrismaService } from '../prisma';
import { fromEntities, fromEntity } from './stored-stock.mapper';

@Injectable()
export class StoredStockService {
  constructor(private readonly prisma: PrismaService) {}

  async store(storedFood: StoredFood): Promise<StoredStock> {
    let bestBeforeDate;

    if (storedFood.bestBeforeDate) {
      const currentStock = await this.prisma.storedStockEntity.findUnique({
        where: {
          foodId_locationId: {
            foodId: storedFood.foodId,
            locationId: storedFood.locationId,
          },
        },
      });

      bestBeforeDate = new Date(storedFood.bestBeforeDate);

      if (currentStock?.bestBeforeDate) {
        bestBeforeDate = new Date(
          Math.min(+bestBeforeDate, +currentStock.bestBeforeDate),
        );
      }
    }

    const storedStock = await this.prisma.storedStockEntity.upsert({
      where: {
        foodId_locationId: {
          foodId: storedFood.foodId,
          locationId: storedFood.locationId,
        },
      },
      create: {
        food: {
          connect: {
            id: storedFood.foodId,
          },
        },
        location: {
          connect: {
            id: storedFood.locationId,
          },
        },
        bestBeforeDate,
        quantity: storedFood.quantity,
      },
      update: {
        bestBeforeDate,
        quantity: {
          increment: storedFood.quantity,
        },
      },
    });
    return fromEntity(storedStock);
  }

  async storedStocks(): Promise<StoredStock[]> {
    const storedStockList = await this.prisma.storedStockEntity.findMany();
    return fromEntities(storedStockList);
  }

  async storedStockByFoodId(foodId: number): Promise<StoredStock[]> {
    const storedStockList = await this.prisma.storedStockEntity.findMany({
      where: {
        foodId,
      },
    });
    return fromEntities(storedStockList);
  }
}
