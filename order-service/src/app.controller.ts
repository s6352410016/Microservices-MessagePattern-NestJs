import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller("order")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({cmd: "getOrder"})
  getOrder(){
    return this.appService.getOrder();
  }
}
