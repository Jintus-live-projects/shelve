import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateLocation, Location } from '../models';
import { LocationService } from './location.service';

@Resolver('Location')
export class LocationResolver {
  constructor(private readonly locationService: LocationService) {}

  @Mutation()
  async createLocation(
    @Args('location') location: CreateLocation,
  ): Promise<Location> {
    console.log(location);
    return this.locationService.createLocation(location);
  }
}
