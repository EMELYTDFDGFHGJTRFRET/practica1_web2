import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { AsignacionService } from './Asignacion.service';
import { Server, Socket } from 'socket.io';
import { CreateAsignacionInput } from './dto/create.asignacion.dto';

@WebSocketGateway({ cors: true })
export class AsignacionGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  wss: Server;

  constructor(private readonly AsignacionService: AsignacionService) {}

  async handleConnection(client: Socket, ...args: any[]) {
    const token = client.handshake.headers.authentication as string;
    try {
      await this.AsignacionService.registerClient(client, token);
    } catch (error) {
      client.disconnect();
      return;
    }
    this.wss.emit('clients-updated', this.AsignacionService.getConnectedClients());
  }

  handleDisconnect(client: Socket) {
    this.AsignacionService.removeClient(client.id);
    this.wss.emit('clients-updated', this.AsignacionService.getConnectedClients());
  }

  @SubscribeMessage('message-from-client')
  async onMessageFromClient(client: Socket, payload: CreateAsignacionInput): Promise<void> {
    const registro = await this.AsignacionService.create(payload);
    this.wss.emit('message-from-server', {
      fullName: this.AsignacionService.getUserfullName(client.id),
      message: registro,
    });
  }
}
