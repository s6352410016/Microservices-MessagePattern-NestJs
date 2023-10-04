import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getProduct(): string {
    return 'This action return all products.';
  }
}
