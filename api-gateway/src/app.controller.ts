import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("getOrder")
  getOrder() {
    return this.appService.getOrder();
  }

  @Get("getPayment")
  getPayment() {
    return this.appService.getPayment();
  }

  @Get("getProduct")
  getProduct() {
    return this.appService.getProduct();
  }
}
