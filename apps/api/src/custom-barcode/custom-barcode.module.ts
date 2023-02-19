import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma';
import { CustomBarcodeResolver } from './custom-barcode.resolver';
import { CustomBarcodeService } from './custom-barcode.service';

@Module({
  imports: [PrismaModule],
  providers: [CustomBarcodeService, CustomBarcodeResolver],
  exports: [CustomBarcodeService],
})
export class CustomBarcodeModule {}
