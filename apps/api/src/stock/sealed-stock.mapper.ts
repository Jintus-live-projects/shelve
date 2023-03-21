import { SealedStockEntity } from '@prisma/client';
import { Food, Location, QuantityUnit, SealedStock } from '../models';

export const fromEntity = (entity: SealedStockEntity): SealedStock => ({
  ...entity,
  location: {
    id: entity.locationId,
  } as Location,
  food: {
    id: entity.foodId,
  } as Food,
  quantity: {
    value: entity.quantity,
    unit: entity.unit as QuantityUnit,
  },
  expiryDate: entity.expiryDate.toISOString(),
  purchaseDate: entity.purchaseDate.toISOString(),
});
export const fromEntities = (entities: SealedStockEntity[]): SealedStock[] =>
  entities.map(fromEntity);
