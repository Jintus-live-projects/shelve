import { Injectable } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { FoodService } from '../food/food.service';
import { LocationService } from '../location/location.service';
import {
  AddSealedStockInput,
  Food,
  Location,
  SealedStock,
  UnitStock,
} from '../models';
import { StockService } from './stock.service';

@Injectable()
@Resolver('SealedStock')
export class SealedStockResolver {
  constructor(
    private readonly stockService: StockService,
    private readonly foodService: FoodService,
    private readonly locationService: LocationService,
  ) {}

  @Mutation()
  addSealedStock(
    @Args('stock') stock: AddSealedStockInput,
  ): Promise<SealedStock> {
    return this.stockService.addSealedStock(stock);
  }

  @ResolveField()
  food(@Parent() parent: UnitStock): Promise<Food> {
    return this.foodService.foodById(parent.food.id);
  }

  @ResolveField()
  location(@Parent() parent: UnitStock): Promise<Location> {
    return this.locationService.locationById(parent.location.id);
  }
}
