import { Injectable } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { ProductInformation } from '../models';
import { ProductInformationService } from './product-information.service';

@Injectable()
@Resolver('ProductInformation')
export class ProductInformationResolver {
  constructor(
    private readonly productInformationService: ProductInformationService,
  ) {}

  @Query()
  productsInformation(
    @Args('barCodes') barCodes: string[],
  ): Promise<ProductInformation[]> {
    return this.productInformationService.productsInformation(barCodes);
  }
}
