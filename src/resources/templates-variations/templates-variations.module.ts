import { Module } from '@nestjs/common';
import { TemplatesVariationsService } from './templates-variations.service';
import { TemplatesVariationsController } from './templates-variations.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [TemplatesVariationsController],
  providers: [TemplatesVariationsService],
  imports: [PrismaModule]
})
export class TemplatesVariationsModule {}
