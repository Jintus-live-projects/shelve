import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ProductInformationResolver } from './product-information.resolver';
import { ProductInformationService } from './product-information.service';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://world.openfoodfacts.org/api/v2/',
    }),
  ],
  providers: [ProductInformationService, ProductInformationResolver],
})
export class ProductInformationModule {}
