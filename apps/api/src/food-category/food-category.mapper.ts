import { FoodCategoryEntity } from '@prisma/client';
import { FoodCategory } from 'src/models';

export const fromEntity = (entity: FoodCategoryEntity): FoodCategory => ({
  ...entity,
  foods: [],
});

export const fromEntities = (entities: FoodCategoryEntity[]): FoodCategory[] =>
  entities.map(fromEntity);
