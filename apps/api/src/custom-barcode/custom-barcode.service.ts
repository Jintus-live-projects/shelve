import { Injectable } from '@nestjs/common';
import { CustomBarcode } from '../models';
import { PrismaService } from '../prisma';
import { getPastelColor } from './colors.utils';
import { fromEntities, fromEntity } from './custom-barcode.mapper';

const BARCODE_PREFIX = 'shelve';

@Injectable()
export class CustomBarcodeService {
  constructor(private readonly prisma: PrismaService) {}

  async generateBarcode(): Promise<CustomBarcode> {
    const generatedColor = await this.generateColor();

    const barcode = await this.prisma.customBarcodeEntity.create({
      data: {
        color: generatedColor,
        barcode: `${BARCODE_PREFIX}-${btoa(generatedColor)}`,
      },
    });

    return fromEntity(barcode);
  }

  private async generateColor(): Promise<string> {
    const barcodes = await this.prisma.customBarcodeEntity.findMany({
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

  async customBarcodes(): Promise<CustomBarcode[]> {
    const barcodes = await this.prisma.customBarcodeEntity.findMany();
    return fromEntities(barcodes);
  }

  removeCustomBarcodes(barcodes: string[]): string[] {
    return barcodes.filter((barcode) => !barcode.startsWith(BARCODE_PREFIX));
  }
}
