import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
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

    private readonly soapUrl = process.env.SOAP_URL;

    async registerClient(registerClientDto: RegisterClientDto): Promise<SoapResponse> {
        try {
            const response = await firstValueFrom(
                this.httpService.post<SoapResponse>(`${this.soapUrl}/registerClient`, registerClientDto),
            );
            return response.data;
        } catch (error) {
            console.error('Error in registerClient:', error);
            // Throw a custom error or rethrow the original error
            throw new HttpException(
                'Failed to register client. Please try again later.',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async rechargeWallet(rechargeWalletDto: RechargeWalletDto): Promise<SoapResponse> {
        try {
            const response = await firstValueFrom(
                this.httpService.post<SoapResponse>(`${this.soapUrl}/rechargeWallet`, rechargeWalletDto),
            );
            return response.data;
        } catch (error) {
            console.error('Error in rechargeWallet:', error);
            throw new HttpException(
                'Failed to recharge wallet. Please try again later.',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async confirmPayment(confirmPaymentDto: ConfirmPaymentDto): Promise<SoapResponse> {
        try {
            const response = await firstValueFrom(
                this.httpService.post<SoapResponse>(`${this.soapUrl}/confirmPayment`, confirmPaymentDto),
            );
            return response.data;
        } catch (error) {
            console.error('Error in confirmPayment:', error);
            throw new HttpException(
                'Failed to confirm payment. Please try again later.',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async checkBalance(checkBalanceDto: CheckBalanceDto): Promise<SoapResponse> {
        try {
            const response = await firstValueFrom(
                this.httpService.post<SoapResponse>(`${this.soapUrl}/checkBalance`, checkBalanceDto),
            );
            return response.data;
        } catch (error) {
            console.error('Error in checkBalance:', error);
            throw new HttpException(
                'Failed to check balance. Please try again later.',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async findClientByDocument(document: string): Promise<SoapResponse> {
        try {
            const response = await firstValueFrom(
                this.httpService.get<SoapResponse>(`${this.soapUrl}/client/${document}`),
            );
            return response.data;
        } catch (error) {
            console.error('Error in findClientByDocument:', error);
            throw new HttpException(
                'Failed to find client by document. Please try again later.',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}