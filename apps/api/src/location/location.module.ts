import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { LocationResolver } from './location.resolver';
import { LocationService } from './location.service';

@Module({
  providers: [PrismaService, LocationService, LocationResolver],
})
export class LocationModule {}
