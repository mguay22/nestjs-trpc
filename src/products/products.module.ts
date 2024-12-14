import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsRouter } from './products.router';

@Module({
  providers: [ProductsService, ProductsRouter],
})
export class ProductsModule {}
