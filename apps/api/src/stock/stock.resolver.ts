import { Injectable } from '@nestjs/common';
import { ResolveField, Resolver } from '@nestjs/graphql';

@Injectable()
@Resolver('Stock')
export class StockResolver {
  @ResolveField()
  __resolveType(value) {
    if ('barCode' in value) {
      return 'SealedStock';
    }
    if ('fullQuantity' in value) {
      return 'LooseContainer';
    }
    return 'UnitStock';
  }
}
