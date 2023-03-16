import { Injectable } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateLocationInput, Location } from 'src/models';
import { LocationService } from './location.service';

@Injectable()
@Resolver('Location')
export class LocationResolver {
  constructor(private readonly locationService: LocationService) {}

  @Mutation()
  createLocation(
    @Args('location') location: CreateLocationInput,
  ): Promise<Location> {
    return this.locationService.createLocation(location);
  }
}
