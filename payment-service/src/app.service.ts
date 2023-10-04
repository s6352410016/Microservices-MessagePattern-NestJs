import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getPayment(): string {
    return 'This action return all payments.';
  }
}
