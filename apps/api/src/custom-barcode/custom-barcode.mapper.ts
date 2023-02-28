import { CustomBarcodeEntity } from '@prisma/client';
import { CustomBarcode } from '../models';

export const fromEntity = (entity: CustomBarcodeEntity): CustomBarcode => ({
  ...entity,
});

export const fromEntities = (
  entities: CustomBarcodeEntity[],
): CustomBarcode[] => entities.map(fromEntity);
