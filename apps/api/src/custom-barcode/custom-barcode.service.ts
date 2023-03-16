import { Injectable } from '@nestjs/common';
import * as process from 'process';
import { PrismaService } from '../prisma';
import { generatePastelColor } from './colors.utils';
import { fromEntity } from './custom-barcode.mapper';

@Injectable()
export class CustomBarcodeService {
  constructor(private readonly prisma: PrismaService) {}

  async createCustomBarCode() {
    let color;
    do {
      color = generatePastelColor();
    } while (await this.isColorExist(color));

    const createdBarCode = await this.prisma.customBarCodeEntity.create({
      data: {
        color,
        code: `${process.env.CUSTOM_BARCODE_PREFIX}_${btoa(color)}`,
      },
    });

    return fromEntity(createdBarCode);
  }

  private async isColorExist(color: string) {
    const barcode = await this.prisma.customBarCodeEntity.findUnique({
      where: {
        color,
      },
    });
    return !!barcode;
  }
}
