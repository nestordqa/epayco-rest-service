import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { MakePaymentDto } from './dto/make-payment.dto';
import { SoapResponse } from 'src/interfaces/soap-response.interface';

@Injectable()
export class PaymentsService {
  constructor(private readonly httpService: HttpService) {}

  private readonly soapUrl = 'http://localhost:3000/api';

  async makePayment(makePaymentDto: MakePaymentDto): Promise<SoapResponse> {
    const response = await firstValueFrom(
      this.httpService.post<SoapResponse>(`${this.soapUrl}/payment`, makePaymentDto),
    );
    return response.data;
  }

  async getPaymentsByClientId(clientId: string): Promise<SoapResponse> {
    const response = await firstValueFrom(
      this.httpService.get<SoapResponse>(`${this.soapUrl}/payments/client/${clientId}`),
    );
    return response.data;
  }

  async getAllPayments(): Promise<SoapResponse> {
    const response = await firstValueFrom(
      this.httpService.get<SoapResponse>(`${this.soapUrl}/payments`),
    );
    return response.data;
  }
}