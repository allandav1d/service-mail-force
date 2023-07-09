import { PartialType } from '@nestjs/swagger';
import { CreateUsersPermissionDto } from './create-users-permission.dto';

export class UpdateUsersPermissionDto extends PartialType(CreateUsersPermissionDto) {}
