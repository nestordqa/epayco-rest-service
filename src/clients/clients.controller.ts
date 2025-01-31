import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { ClientsService } from './clients.service';
import { RegisterClientDto } from './dto/register-client.dto';
import { RechargeWalletDto } from './dto/recharge-wallet.dto';
import { ConfirmPaymentDto } from './dto/confirm-payment.dto';
import { CheckBalanceDto } from 'src/payments/dto/check-balance.dto';

@ApiTags('Clients') // Agrupa los endpoints bajo el tag "Clients"
@Controller('clients')
export class ClientsController {
    constructor(private readonly clientsService: ClientsService) {}

    @Post('register')
    @ApiOperation({ summary: 'Registrar un nuevo cliente' })
    @ApiBody({ type: RegisterClientDto })
    @ApiResponse({ status: 201, description: 'Cliente registrado con éxito.' })
    @ApiResponse({ status: 400, description: 'Datos inválidos.' })
    async registerClient(@Body() registerClientDto: RegisterClientDto) {
        return this.clientsService.registerClient(registerClientDto);
    }

    @Post('recharge')
    @ApiOperation({ summary: 'Recargar saldo de un cliente' })
    @ApiBody({ type: RechargeWalletDto })
    @ApiResponse({ status: 200, description: 'Saldo recargado con éxito.' })
    @ApiResponse({ status: 404, description: 'Cliente no encontrado.' })
    async rechargeWallet(@Body() rechargeWalletDto: RechargeWalletDto) {
        return this.clientsService.rechargeWallet(rechargeWalletDto);
    }

    @Post('confirm-payment')
    @ApiOperation({ summary: 'Confirmar un pago' })
    @ApiBody({ type: ConfirmPaymentDto })
    @ApiResponse({ status: 200, description: 'Pago confirmado con éxito.' })
    @ApiResponse({ status: 404, description: 'Transacción no encontrada.' })
    async confirmPayment(@Body() confirmPaymentDto: ConfirmPaymentDto) {
        return this.clientsService.confirmPayment(confirmPaymentDto);
    }

    @Post('check-balance')
    @ApiOperation({ summary: 'Consultar saldo de un cliente' })
    @ApiBody({ type: CheckBalanceDto })
    @ApiResponse({ status: 200, description: 'Saldo obtenido con éxito.' })
    @ApiResponse({ status: 404, description: 'Cliente no encontrado.' })
    async checkBalance(@Body() checkBalanceDto: CheckBalanceDto) {
        return this.clientsService.checkBalance(checkBalanceDto);
    }

    @Get(':document')
    @ApiOperation({ summary: 'Buscar cliente por documento' })
    @ApiParam({ name: 'document', description: 'Documento del cliente' })
    @ApiResponse({ status: 200, description: 'Cliente encontrado con éxito.' })
    @ApiResponse({ status: 404, description: 'Cliente no encontrado.' })
    async findClientByDocument(@Param('document') document: string) {
        return this.clientsService.findClientByDocument(document);
    }
}