import { UnitStockEntity } from '@prisma/client';
import { Food, Location, QuantityUnit, UnitStock } from '../models';

export const fromEntity = (entity: UnitStockEntity): UnitStock => ({
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
export const fromEntities = (entities: UnitStockEntity[]): UnitStock[] =>
  entities.map(fromEntity);
