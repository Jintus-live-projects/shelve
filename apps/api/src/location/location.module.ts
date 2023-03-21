import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma';
import { LocationResolver } from './location.resolver';
import { LocationService } from './location.service';

@Module({
  imports: [PrismaModule],
  providers: [LocationService, LocationResolver],
  exports: [LocationService],
})
export class LocationModule {}
