import { MessageBody, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";

@WebSocketGateway()
export class ChatGateway{
    @SubscribeMessage('message')
    async handleMessage(@MessageBody() message: string): Promise<void> {

    }
}