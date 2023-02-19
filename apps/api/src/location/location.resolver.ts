import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateLocation, Location } from '../models';
import { LocationService } from './location.service';

@Resolver('Location')
export class LocationResolver {
  constructor(private readonly locationService: LocationService) {}

  @Query()
  async locations(): Promise<Location[]> {
    return this.locationService.locations();
  }

  @Mutation()
  async createLocation(
    @Args('location') location: CreateLocation,
  ): Promise<Location> {
    return this.locationService.createLocation(location);
  }
}
