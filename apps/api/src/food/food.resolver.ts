import { Injectable } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateFood, Food } from '../models';
import { FoodService } from './food.service';

@Injectable()
@Resolver('Food')
export class FoodResolver {
  constructor(private readonly foodService: FoodService) {}

  @Query()
  foods(): Promise<Food[]> {
    return this.foodService.foods();
  }

  @Query()
  foodByBarcode(@Args() barcode: string): Promise<Food> {
    return this.foodService.foodByBarcode(barcode);
  }

  @Mutation()
  createFood(@Args('food') food: CreateFood): Promise<Food> {
    return this.foodService.createFood(food);
  }
}
