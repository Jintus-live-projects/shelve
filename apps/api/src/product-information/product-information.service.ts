import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom, map } from 'rxjs';
import { ProductInformation } from '../models';
import { fromProductResults } from './product-information.mapper';

@Injectable()
export class ProductInformationService {
  constructor(private readonly http: HttpService) {}

  async productsInformation(barCodes: string[]): Promise<ProductInformation[]> {
    const data = await firstValueFrom(
      this.http
        .get(`search`, {
          params: {
            code: barCodes.join(),
            fields: 'code,product_name_fr,product_name,brands',
          },
        })
        .pipe(map((response) => response.data)),
    );
    return fromProductResults(data.products);
  }
}
