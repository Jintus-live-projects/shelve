import { Injectable } from '@nestjs/common';
import { Location } from '@prisma/client';
import { CreateLocation } from '../models';
import { PrismaService } from '../prisma.service';

@Injectable()
export class LocationService {
  constructor(private readonly prisma: PrismaService) {}

  async createLocation(input: CreateLocation): Promise<Location> {
    return this.prisma.location.create({
      data: {
        name: input.name,
        temperature: input.temperature,
      },
    });
  }
}
