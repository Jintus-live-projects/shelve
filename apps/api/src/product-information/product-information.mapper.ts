import { ProductInformation } from '../models';

export interface ProductResult {
  code: string;
  product_name_fr?: string;
  product_name: string;
  brands: string;
}

export const fromProductResult = (
  entity: ProductResult,
): ProductInformation => ({
  barcode: entity.code,
  name: entity.product_name_fr ?? entity.product_name,
  brand: entity.brands,
});
export const fromProductResults = (
  entities: ProductResult[],
): ProductInformation[] => entities.map(fromProductResult);
