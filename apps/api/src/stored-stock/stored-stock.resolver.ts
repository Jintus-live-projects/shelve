import { Injectable } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { FoodService } from '../food/food.service';
import { LocationService } from '../location/location.service';
import { Food, Location, StoredFood, StoredStock } from '../models';
import { StoredStockService } from './stored-stock.service';

@Injectable()
@Resolver('StoredStock')
export class StoredStockResolver {
  constructor(
    private readonly storedStockService: StoredStockService,
    private readonly foodService: FoodService,
    private readonly locationService: LocationService,
  ) {}

  @Query()
  storedStocks(): Promise<StoredStock[]> {
    return this.storedStockService.storedStocks();
  }

  @Mutation()
  store(@Args('storedFood') storedFood: StoredFood): Promise<StoredStock> {
    return this.storedStockService.store(storedFood);
  }

  @ResolveField()
  food(@Parent() parent: StoredStock): Promise<Food> {
    return this.foodService.foodById(parent.food.id);
  }

  @ResolveField()
  location(@Parent() parent: StoredStock): Promise<Location> {
    return this.locationService.locationById(parent.location.id);
  }
}
