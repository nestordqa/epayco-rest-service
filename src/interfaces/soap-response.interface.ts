export interface SoapResponse {
    success: boolean;
    cod_error: string;
    message_error?: string;
    data: any;
}