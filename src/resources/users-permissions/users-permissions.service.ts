import { Injectable } from '@nestjs/common';
import { CreateUsersPermissionDto } from './dto/create-users-permission.dto';
import { UpdateUsersPermissionDto } from './dto/update-users-permission.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersPermissionsService {
  constructor(private prisma: PrismaService) {}
  
  create(createUsersPermissionDto: CreateUsersPermissionDto) {
    return 'This action adds a new usersPermission';
  }

  findAll() {
    return `This action returns all usersPermissions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usersPermission`;
  }

  update(id: number, updateUsersPermissionDto: UpdateUsersPermissionDto) {
    return `This action updates a #${id} usersPermission`;
  }

  remove(id: number) {
    return `This action removes a #${id} usersPermission`;
  }
}
