import { Module } from '@nestjs/common';
import { EmailsService } from './emails.service';
import { EmailsController } from './emails.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [EmailsController],
  providers: [EmailsService],
  imports: [PrismaModule]
})
export class EmailsModule {}
