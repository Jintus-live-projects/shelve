import { LooseStockEntity } from '@prisma/client';
import { Food, Location, LooseStock } from '../models';

export const fromEntity = (entity: LooseStockEntity): LooseStock => ({
  ...entity,
  food: {
    id: entity.foodId,
  } as Food,
  location: {
    id: entity.locationId,
  } as Location,
  barcodes: [],
});

export const fromEntities = (entities: LooseStockEntity[]): LooseStock[] =>
  entities.map(fromEntity);
