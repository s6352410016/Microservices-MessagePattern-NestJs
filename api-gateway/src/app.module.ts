import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "ORDER_SERVICE",
        transport: Transport.TCP,
        options: {
          port: 3001
        }
      },
      {
        name: "PAYMENT_SERVICE",
        transport: Transport.TCP,
        options: {
          port: 3002
        }
      },
      {
        name: "PRODUCT_SERVICE",
        transport: Transport.TCP,
        options: {
          port: 3003
        }
      },
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
