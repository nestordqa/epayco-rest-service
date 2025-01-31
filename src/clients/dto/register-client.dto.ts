import { ApiProperty } from '@nestjs/swagger';

export class RegisterClientDto {
    @ApiProperty({
        description: 'Document number of the client',
        example: '123456789',
    })
    document: string;

    @ApiProperty({
        description: 'Full name of the client',
        example: 'John Doe',
    })
    names: string;

    @ApiProperty({
        description: 'Email address of the client',
        example: 'john.doe@example.com',
    })
    email: string;

    @ApiProperty({
        description: 'Cellphone number of the client',
        example: '+1234567890',
    })
    cellphone: string;
}