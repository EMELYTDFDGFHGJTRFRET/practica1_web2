import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Socket } from 'socket.io';
import { Repository, Connection } from 'typeorm';
import { CreateAsignacionInput } from './dto/create.asignacion.dto';
import { AsignacionEntity } from './entity/entiti.asignacion';

interface User {
    id: string;
    name: string;
    isActive: boolean;    
}

interface ConnectedClients {
    [id: string]: {
        socket: Socket;
        user: User;
    }
}

const users: User[] = [
    {id: '1', name: 'Carlos', isActive: true},
    {id: '2', name: 'Luis', isActive: true},
    {id: '3', name: 'Marta', isActive: true},
    {id: '4', name: 'Lucía', isActive: true},
    {id: '5', name: 'Pedro', isActive: true}
];

@Injectable()
export class AsignacionService {
  constructor(
    @InjectRepository(AsignacionEntity)
    private readonly asignacionRepository: Repository<AsignacionEntity>,
    private readonly connection: Connection
  ) {}

  private connectedClients: ConnectedClients = {};

  async create(data: CreateAsignacionInput): Promise<AsignacionEntity> {
    return await this.connection.transaction(async transactionalEntityManager => {
      const newRegistro = this.asignacionRepository.create(data);
      return await transactionalEntityManager.save(newRegistro);
    });
  }

  registerClient(socket: Socket, userId: string) {
    const user = users.find(user => user.id === userId);
    if (!user) {
      throw new Error('User not found');
    }
    if (!user.isActive) {
      throw new Error('User is not active');
    }

    this.checkUserConnection(user);

    this.connectedClients[socket.id] = {
      socket: socket,
      user: user
    };
  }

  removeClient(clientId: string) {
    delete this.connectedClients[clientId];
  }

  getConnectedClients(): string[] {
    return Object.keys(this.connectedClients);
  }

  getUserfullName(socketId: string): string {
    return this.connectedClients[socketId].user.name;
  }

  updateUserStatus(user: User) {
    const client = this.connectedClients[user.id];
    if (client) {
      client.user = user;
    }
  }

  checkUserConnection(user: User) {
    let connectionCount = 0;

    for (const clientId of Object.keys(this.connectedClients)) {
      const connectedClient = this.connectedClients[clientId];
      if (connectedClient.user.id === user.id) {
        connectionCount++;
        if (connectionCount >= 3) {
          throw new Error('User has reached the maximum number of connections (3)');
        }
      }
    }
  }
}
