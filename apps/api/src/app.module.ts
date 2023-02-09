import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import * as process from 'process';
import { FoodModule } from './food';
import { LocationModule } from './location';

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
    LocationModule,
  ],
})
export class AppModule {}
