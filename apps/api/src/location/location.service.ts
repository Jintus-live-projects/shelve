import { Injectable } from '@nestjs/common';
import { CreateLocation, Location } from '../models';
import { PrismaService } from '../prisma';
import { fromEntities, fromEntity } from './location.mapper';

@Injectable()
export class LocationService {
  constructor(private readonly prisma: PrismaService) {}

  async createLocation(input: CreateLocation): Promise<Location> {
    const location = await this.prisma.locationEntity.create({
      data: {
        name: input.name,
        temperature: input.temperature,
      },
    });

    return fromEntity(location);
  }

  async locations(): Promise<Location[]> {
    const locations = await this.prisma.locationEntity.findMany();
    return fromEntities(locations);
  }

  async locationById(id: number): Promise<Location> {
    const location = await this.prisma.locationEntity.findUnique({
      where: {
        id,
      },
    });

    return fromEntity(location);
  }
}
