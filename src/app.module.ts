import { Module } from '@nestjs/common';
import { ClientsModule } from './clients/clients.module';
import { PaymentsModule } from './payments/payments.module';


@Module({
  imports: [ClientsModule, PaymentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
