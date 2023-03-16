import { CustomBarCodeEntity } from '@prisma/client';
import { CustomBarCode, LooseContainer } from '../models';

export const fromEntity = (entity: CustomBarCodeEntity): CustomBarCode => ({
  ...entity,
  looseContainer:
    entity.looseContainerId &&
    ({
      id: entity.looseContainerId,
    } as LooseContainer),
});
export const fromEntities = (
  entities: CustomBarCodeEntity[],
): CustomBarCode[] => entities.map(fromEntity);
