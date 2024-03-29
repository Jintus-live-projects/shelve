import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import * as process from 'process';
import { CustomBarcodeModule } from './custom-barcode';
import { FoodModule } from './food';
import { FoodCategoryModule } from './food-category';
import { LocationModule } from './location';
import { ProductInformationModule } from './product-information';
import { StockModule } from './stock';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      typePaths: ['./src/schema.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/models/generated.ts'),
        emitTypenameField: true,
      },
    }),
    FoodModule,
    ProductInformationModule,
    FoodCategoryModule,
    LocationModule,
    CustomBarcodeModule,
    StockModule,
  ],
})
export class AppModule {}
