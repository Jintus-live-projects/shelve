import { Injectable } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { CustomBarcodeService } from '../custom-barcode/custom-barcode.service';
import { ProductInformation } from '../models';
import { ProductInformationService } from './product-information.service';

@Injectable()
@Resolver('ProductInformation')
export class ProductInformationResolver {
  constructor(
    private readonly productInformationService: ProductInformationService,
    private readonly customBarcodeService: CustomBarcodeService,
  ) {}

  @Query()
  productInformationByBarcode(
    @Args('barcodes') barcodes: string[],
  ): Promise<ProductInformation[]> {
    barcodes = this.customBarcodeService.removeCustomBarcodes(barcodes);
    return this.productInformationService.productInformationByBarcode(barcodes);
  }
}
