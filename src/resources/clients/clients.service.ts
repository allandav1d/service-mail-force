import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClientEntity } from './entities/client.entity';

@Injectable()
export class ClientsService {
  constructor(private prisma: PrismaService) {}
  private clients: ClientEntity[] = [];
  
  create(createClientDto: CreateClientDto) {
    return 'This action adds a new client';
  }

  async findAll(){
    return await this.prisma.client.findMany({})
  }

  async findOne(id: string) {
    return await this.prisma.client.findUnique({
      where: { id }
    })
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    return await this.prisma.client.update({
      where: { id },
      data: updateClientDto
    })
  }

  async remove(id: string) {
    return await this.prisma.client.delete({
      where: { id }
    })
  }
}
