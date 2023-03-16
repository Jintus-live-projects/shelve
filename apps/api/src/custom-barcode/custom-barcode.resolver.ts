import { Injectable } from '@nestjs/common';
import { Mutation, Resolver } from '@nestjs/graphql';
import { CustomBarCode } from 'src/models';
import { CustomBarcodeService } from './custom-barcode.service';

@Injectable()
@Resolver('CustomBarCode')
export class CustomBarcodeResolver {
  constructor(private readonly customBarcodeService: CustomBarcodeService) {}

  @Mutation()
  createCustomBarCode(): Promise<CustomBarCode> {
    return this.customBarcodeService.createCustomBarCode();
  }
}
