import { Injectable } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { AddUnitStockInput, UnitStock } from 'src/models';
import { FoodService } from '../food/food.service';
import { LocationService } from '../location/location.service';
import { Food, Location } from '../models';
import { StockService } from './stock.service';

@Injectable()
@Resolver('UnitStock')
export class UnitStockResolver {
  constructor(
    private readonly stockService: StockService,
    private readonly foodService: FoodService,
    private readonly locationService: LocationService,
  ) {}

  @Mutation()
  addUnitStock(@Args('stock') stock: AddUnitStockInput): Promise<UnitStock> {
    return this.stockService.addUnitStock(stock);
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
