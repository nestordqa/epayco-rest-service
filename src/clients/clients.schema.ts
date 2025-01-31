import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClientDocument = Client & Document;

@Schema()
export class Client {
    @Prop({ required: true, unique: true })
    document: string;

    @Prop({ required: true })
    names: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true, unique: true })
    cellphone: string;

    @Prop({ default: 0 })
    balance: number;

    @Prop()
    token?: string;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
