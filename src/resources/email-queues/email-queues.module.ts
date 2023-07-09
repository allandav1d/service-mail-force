import { Module } from '@nestjs/common';
import { EmailQueuesService } from './email-queues.service';
import { EmailQueuesController } from './email-queues.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [EmailQueuesController],
  providers: [EmailQueuesService],
  imports: [PrismaModule]
})
export class EmailQueuesModule {}
