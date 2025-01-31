import { ApiProperty } from '@nestjs/swagger';

export class CheckBalanceDto {
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
}