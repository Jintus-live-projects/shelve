import { LocationEntity } from '@prisma/client';
import { Location } from '../models';

export const fromEntity = (entity: LocationEntity): Location => ({
  ...entity,
  stock: [],
});

export const fromEntities = (entities: LocationEntity[]): Location[] =>
  entities.map(fromEntity);
