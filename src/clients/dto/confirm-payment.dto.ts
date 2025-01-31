import { ApiProperty } from '@nestjs/swagger';

export class ConfirmPaymentDto {
    @ApiProperty({
        description: 'Unique session identifier',
        example: 'abc123-session-id',
    })
    sessionId: string;

    @ApiProperty({
        description: 'Token for payment confirmation',
        example: '123456',
    })
    token: string;
}