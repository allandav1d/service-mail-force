import { Module } from '@nestjs/common';
import { UsersPermissionsService } from './users-permissions.service';
import { UsersPermissionsController } from './users-permissions.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [UsersPermissionsController],
  providers: [UsersPermissionsService],
  imports: [PrismaModule]
})
export class UsersPermissionsModule {}
