import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller("payment")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({cmd: "getPayment"})
  getPayment(){
    return this.appService.getPayment();
  }
}
