import { Injectable } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateFoodInput, Food } from 'src/models';
import { FoodService } from './food.service';

@Injectable()
@Resolver('Food')
export class FoodResolver {
  constructor(private readonly foodService: FoodService) {}

  @Mutation()
  createFood(@Args('food') food: CreateFoodInput): Promise<Food> {
    return this.foodService.createFood(food);
  }
}
