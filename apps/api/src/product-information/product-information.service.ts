import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom, map } from 'rxjs';

@Injectable()
export class ProductInformationService {
  constructor(private readonly http: HttpService) {}

  async productInformationByBarcode(
    barcodes: string[],
  ): Promise<{ barcode: string; name: string }[]> {
    const data = await firstValueFrom(
      this.http
        .get(`search`, {
          params: {
            code: barcodes.join(),
            fields: 'code,product_name_fr,product_name',
          },
        })
        .pipe(map((response) => response.data)),
    );
    return data.products.map((product) => ({
      barcode: product.code,
      name: product.product_name_fr ?? product.product_name,
    }));
  }
}
