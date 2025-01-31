import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { MakePaymentDto } from './dto/make-payment.dto';
import { SoapResponse } from 'src/interfaces/soap-response.interface';

@Injectable()
export class PaymentsService {
    constructor(private readonly httpService: HttpService) {}

    private readonly soapUrl = process.env.SOAP_URL;

    async makePayment(makePaymentDto: MakePaymentDto): Promise<SoapResponse> {
        try {
            const response = await firstValueFrom(
                this.httpService.post<SoapResponse>(`${this.soapUrl}/payment`, makePaymentDto),
            );
            return response.data;
        } catch (error) {
            console.error('Error in makePayment:', error);
            throw new HttpException(
                'Failed to make payment. Please try again later.',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async getPaymentsByClientId(clientId: string): Promise<SoapResponse> {
        try {
            const response = await firstValueFrom(
                this.httpService.get<SoapResponse>(`${this.soapUrl}/payments/client/${clientId}`),
            );
            return response.data;
        } catch (error) {
            console.error('Error in getPaymentsByClientId:', error);
            throw new HttpException(
                'Failed to retrieve payments by client ID. Please try again later.',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async getAllPayments(): Promise<SoapResponse> {
        try {
            const response = await firstValueFrom(
                this.httpService.get<SoapResponse>(`${this.soapUrl}/payments`),
            );
            return response.data;
        } catch (error) {
            console.error('Error in getAllPayments:', error);
            throw new HttpException(
                'Failed to retrieve all payments. Please try again later.',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}