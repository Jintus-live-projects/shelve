import { Injectable } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CreateFoodCategoryInput, Food, FoodCategory } from 'src/models';
import { FoodCategoryService } from './food-category.service';

@Injectable()
@Resolver('FoodCategory')
export class FoodCategoryResolver {
  constructor(private readonly foodCategoryService: FoodCategoryService) {}

  @Mutation()
  createFoodCategory(
    @Args('foodCategory') foodCategory: CreateFoodCategoryInput,
  ): Promise<FoodCategory> {
    return this.foodCategoryService.createFoodCategory(foodCategory);
  }

  @ResolveField()
  foods(@Parent() parent: FoodCategory): Promise<Food[]> {
    return this.foodCategoryService.foodsByFoodCategoryId(parent.id);
  }
}
