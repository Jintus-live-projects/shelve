import { ConflictException, Injectable } from '@nestjs/common';
import { CreateLocationInput, Location } from 'src/models';
import { catchPrismaClientError, PrismaService } from '../prisma';
import { fromEntity } from './location.mapper';

@Injectable()
export class LocationService {
  constructor(private readonly prisma: PrismaService) {}

  async createLocation(location: CreateLocationInput): Promise<Location> {
    try {
      const createdLocation = await this.prisma.locationEntity.create({
        data: {
          name: location.name,
        },
      });
      return fromEntity(createdLocation);
    } catch (error) {
      return catchPrismaClientError(error, {
        P2002: () =>
          new ConflictException(`Location: "${location.name}", already exist`),
      });
    }
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
