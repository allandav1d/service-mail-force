import { PartialType } from '@nestjs/swagger';
import { CreateEmailQueueDto } from './create-email-queue.dto';

export class UpdateEmailQueueDto extends PartialType(CreateEmailQueueDto) {}
