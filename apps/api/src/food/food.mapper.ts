import { FoodEntity } from '@prisma/client';
import { Food } from 'src/models';

export const fromEntity = (entity: FoodEntity): Food => ({
  ...entity,
  categories: [],
  stock: [],
});
export const fromEntities = (entities: FoodEntity[]): Food[] =>
  entities.map(fromEntity);
