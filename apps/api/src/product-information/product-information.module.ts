import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CustomBarcodeModule } from '../custom-barcode';
import { ProductInformationResolver } from './product-information.resolver';
import { ProductInformationService } from './product-information.service';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://world.openfoodfacts.org/api/v2/',
    }),
    CustomBarcodeModule,
  ],
  providers: [ProductInformationService, ProductInformationResolver],
})
export class ProductInformationModule {}
