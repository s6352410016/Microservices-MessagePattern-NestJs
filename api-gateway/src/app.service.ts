import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject("ORDER_SERVICE")
    private readonly orderClient: ClientProxy,
    @Inject("PAYMENT_SERVICE")
    private readonly paymentClient: ClientProxy,
    @Inject("PRODUCT_SERVICE")
    private readonly productClient: ClientProxy,
  ) { }

  getOrder(): Observable<string> {
    return this.orderClient.send({ cmd: "getOrder" }, {});
  }

  getPayment(): Observable<string> {
    return this.paymentClient.send({ cmd: "getPayment" }, {});
  }

  getProduct(): Observable<string> {
    return this.productClient.send({ cmd: "getProduct" }, {});
  }
}
