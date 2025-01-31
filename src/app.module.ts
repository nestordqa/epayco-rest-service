import { Module } from '@nestjs/common';
import { ClientsModule } from './clients/clients.module';
import { PaymentsModule } from './payments/payments.module';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ClientsModule, 
    PaymentsModule, 
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: true, // Makes the configuration available globally
  }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
