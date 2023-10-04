import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getOrder(): string {
    return 'This action return all orders.';
  }
}
