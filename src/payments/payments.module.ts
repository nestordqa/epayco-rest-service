import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';

@Module({
  providers: [PaymentsService],
  controllers: [PaymentsController]
})
export class PaymentsModule {}
