import { ApiProperty } from '@nestjs/swagger';

export class MakePaymentDto {
    @ApiProperty({
        description: 'Document number of the client',
        example: '123456789',
    })
    document: string;

    @ApiProperty({
        description: 'Cellphone number of the client',
        example: '+1234567890',
    })
    cellphone: string;

    @ApiProperty({
        description: 'Amount to be paid',
        example: 150,
    })
    amount: number;
}