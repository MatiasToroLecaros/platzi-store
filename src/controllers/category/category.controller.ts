import { Controller, Get, Param } from '@nestjs/common';

@Controller('category')
export class CategoryController {
  @Get('/:id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `product ${productId} and ${id}`;
  }
}
