import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmailQueuesService } from './email-queues.service';
import { CreateEmailQueueDto } from './dto/create-email-queue.dto';
import { UpdateEmailQueueDto } from './dto/update-email-queue.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('email-queues')
@ApiTags('email-queues')
export class EmailQueuesController {
  constructor(private readonly emailQueuesService: EmailQueuesService) {}

  @Post()
  create(@Body() createEmailQueueDto: CreateEmailQueueDto) {
    return this.emailQueuesService.create(createEmailQueueDto);
  }

  @Get()
  findAll() {
    return this.emailQueuesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.emailQueuesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmailQueueDto: UpdateEmailQueueDto) {
    return this.emailQueuesService.update(+id, updateEmailQueueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.emailQueuesService.remove(+id);
  }
}
