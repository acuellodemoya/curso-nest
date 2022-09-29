import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';
import { SeedModule } from './seed/seed.module';


@Module({
  imports: [
    CarsModule,
    BrandsModule,
    SeedModule,
    MongooseModule.forRoot('mongodb+srv://admin:acd12345@cluster0.eetkk3v.mongodb.net/?retryWrites=true&w=majority')
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
