import { Injectable } from '@nestjs/common';
import { CustomBarcode } from '@prisma/client';
import { PrismaService } from '../prisma';
import { getPastelColor } from './colors.utils';

const BARCODE_PREFIX = 'shelve';

@Injectable()
export class CustomBarcodeService {
  constructor(private readonly prisma: PrismaService) {}

  async generateBarcode(): Promise<CustomBarcode> {
    const generatedColor = await this.generateColor();

    return this.prisma.customBarcode.create({
      data: {
        color: generatedColor,
        barcode: `${BARCODE_PREFIX}-${btoa(generatedColor)}`,
      },
    });
  }

  private async generateColor(): Promise<string> {
    const barcodes = await this.prisma.customBarcode.findMany({
      select: {
        color: true,
      },
    });

    let isColorExist;
    let generatedColor;

    do {
      generatedColor = getPastelColor();
      isColorExist = barcodes.some(
        (barcode) => barcode.color === generatedColor,
      );
    } while (isColorExist);

    return generatedColor;
  }

  customBarcodes(): Promise<CustomBarcode[]> {
    return this.prisma.customBarcode.findMany();
  }

  removeCustomBarcodes(barcodes: string[]): string[] {
    return barcodes.filter((barcode) => !barcode.startsWith(BARCODE_PREFIX));
  }
}
