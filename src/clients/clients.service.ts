import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { SoapResponse } from 'src/interfaces/soap-response.interface';
import { RechargeWalletDto } from './dto/recharge-wallet.dto';
import { RegisterClientDto } from './dto/register-client.dto';
import { ConfirmPaymentDto } from './dto/confirm-payment.dto';
import { CheckBalanceDto } from 'src/payments/dto/check-balance.dto';

@Injectable()
export class ClientsService {
  constructor(private readonly httpService: HttpService) {}

  private readonly soapUrl = 'http://localhost:3000/api';

  async registerClient(registerClientDto: RegisterClientDto): Promise<SoapResponse> {
    const response = await firstValueFrom(
      this.httpService.post<SoapResponse>(`${this.soapUrl}/registerClient`, registerClientDto),
    );
    return response.data; // Ahora TypeScript sabe que `response.data` es de tipo `SoapResponse`
  }

  async rechargeWallet(rechargeWalletDto: RechargeWalletDto): Promise<SoapResponse> {
    const response = await firstValueFrom(
      this.httpService.post<SoapResponse>(`${this.soapUrl}/rechargeWallet`, rechargeWalletDto),
    );
    return response.data;
  }

  async confirmPayment(confirmPaymentDto: ConfirmPaymentDto): Promise<SoapResponse> {
    const response = await firstValueFrom(
      this.httpService.post<SoapResponse>(`${this.soapUrl}/confirmPayment`, confirmPaymentDto),
    );
    return response.data;
  }

  async checkBalance(checkBalanceDto: CheckBalanceDto): Promise<SoapResponse> {
    const response = await firstValueFrom(
      this.httpService.post<SoapResponse>(`${this.soapUrl}/checkBalance`, checkBalanceDto),
    );
    return response.data;
  }

  async findClientByDocument(document: string): Promise<SoapResponse> {
    const response = await firstValueFrom(
      this.httpService.get<SoapResponse>(`${this.soapUrl}/client/${document}`),
    );
    return response.data;
  }
}