import { Injectable } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { FoodService } from './food.service';

@Injectable()
@Resolver('Food')
export class FoodResolver {
  constructor(private readonly foodService: FoodService) {}

  @Query()
  async foods() {
    return this.foodService.foods();
  }
}
