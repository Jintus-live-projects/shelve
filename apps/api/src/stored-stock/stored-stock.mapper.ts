import { StoredStockEntity } from '@prisma/client';
import { Food, Location, StoredStock } from '../models';

export const fromEntity = (entity: StoredStockEntity): StoredStock => ({
  ...entity,
  food: {
    id: entity.foodId,
  } as Food,
  location: {
    id: entity.locationId,
  } as Location,
  bestBeforeDate: entity.bestBeforeDate.toISOString(),
});

export const fromEntities = (entities: StoredStockEntity[]): StoredStock[] =>
  entities.map(fromEntity);
