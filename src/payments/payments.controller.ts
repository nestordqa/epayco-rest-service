import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { PaymentsService } from './payments.service';
import { MakePaymentDto } from './dto/make-payment.dto';

@ApiTags('Payments') // Agrupa los endpoints bajo el tag "Payments"
@Controller('payments')
export class PaymentsController {
    constructor(private readonly paymentsService: PaymentsService) {}

    @Post('make-payment')
    @ApiOperation({ summary: 'Realizar un pago' })
    @ApiBody({ type: MakePaymentDto })
    @ApiResponse({ status: 200, description: 'Pago realizado con éxito.' })
    @ApiResponse({ status: 400, description: 'Datos inválidos.' })
    async makePayment(@Body() makePaymentDto: MakePaymentDto) {
        return this.paymentsService.makePayment(makePaymentDto);
    }

    @Get('client/:clientId')
    @ApiOperation({ summary: 'Obtener pagos por ID de cliente' })
    @ApiParam({ name: 'clientId', description: 'ID del cliente' })
    @ApiResponse({ status: 200, description: 'Pagos obtenidos con éxito.' })
    @ApiResponse({ status: 404, description: 'Cliente no encontrado.' })
    async getPaymentsByClientId(@Param('clientId') clientId: string) {
        return this.paymentsService.getPaymentsByClientId(clientId);
    }

    @Get()
    @ApiOperation({ summary: 'Obtener todos los pagos' })
    @ApiResponse({ status: 200, description: 'Pagos obtenidos con éxito.' })
    async getAllPayments() {
        return this.paymentsService.getAllPayments();
    }
}