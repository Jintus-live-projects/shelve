import { Injectable } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import {
  CreateFoodInput,
  Food,
  FoodCategory,
  FoodListFilterInput,
} from 'src/models';
import { FoodService } from './food.service';

@Injectable()
@Resolver('Food')
export class FoodResolver {
  constructor(private readonly foodService: FoodService) {}

  @Mutation()
  createFood(@Args('food') food: CreateFoodInput): Promise<Food> {
    return this.foodService.createFood(food);
  }

  @Query()
  foods(@Args('filter') filter?: FoodListFilterInput): Promise<Food[]> {
    return this.foodService.foods(filter);
  }

  @ResolveField()
  categories(@Parent() parent: Food): Promise<FoodCategory[]> {
    return this.foodService.categoriesByFoodId(parent.id);
  }
}
