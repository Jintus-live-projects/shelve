import { FoodEntity } from '@prisma/client';
import { Food } from '../models';

export const fromEntity = (entity: FoodEntity): Food => ({
  ...entity,
  looseStock: [],
  storedStock: [],
});

export const fromEntities = (entities: FoodEntity[]): Food[] =>
  entities.map(fromEntity);
