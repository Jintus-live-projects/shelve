import { Injectable } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { LooseStockService } from '../loose-stock';
import { CreateFood, Food, LooseStock, StoredStock } from '../models';
import { StoredStockService } from '../stored-stock/stored-stock.service';
import { FoodService } from './food.service';

@Injectable()
@Resolver('Food')
export class FoodResolver {
  constructor(
    private readonly foodService: FoodService,
    private readonly storedStockService: StoredStockService,
    private readonly looseStockService: LooseStockService,
  ) {}

  @Query()
  foods(): Promise<Food[]> {
    return this.foodService.foods();
  }

  @Query()
  foodByBarcode(@Args('barcode') barcode: string): Promise<Food> {
    return this.foodService.foodByBarcode(barcode);
  }

  @Query()
  searchFood(@Args('query') query: string): Promise<Food[]> {
    return this.foodService.searchFood(query);
  }

  @Mutation()
  createFood(@Args('food') foodInput: CreateFood): Promise<Food> {
    return this.foodService.createFood(foodInput);
  }

  @ResolveField()
  looseStock(@Parent() food: Food): Promise<LooseStock[]> {
    return this.looseStockService.looseStockByFoodId(food.id);
  }

  @ResolveField()
  storedStock(@Parent() food: Food): Promise<StoredStock[]> {
    return this.storedStockService.storedStockByFoodId(food.id);
  }
}
