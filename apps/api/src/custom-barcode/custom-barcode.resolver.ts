import { Injectable } from '@nestjs/common';
import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { CustomBarcode } from '../models';
import { CustomBarcodeService } from './custom-barcode.service';

@Injectable()
@Resolver('CustomBarcode')
export class CustomBarcodeResolver {
  constructor(private readonly customBarcodeService: CustomBarcodeService) {}

  @Query()
  customBarcodes(): Promise<CustomBarcode[]> {
    return this.customBarcodeService.customBarcodes();
  }

  @Mutation()
  async createCustomBarcode(): Promise<CustomBarcode> {
    return this.customBarcodeService.generateBarcode();
  }
}
