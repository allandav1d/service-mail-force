import { Injectable } from '@nestjs/common';
import { CreateTemplatesVariationDto } from './dto/create-templates-variation.dto';
import { UpdateTemplatesVariationDto } from './dto/update-templates-variation.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TemplatesVariationsService {
  constructor(private prisma: PrismaService) {}
  
  create(createTemplatesVariationDto: CreateTemplatesVariationDto) {
    return 'This action adds a new templatesVariation';
  }

  findAll() {
    return `This action returns all templatesVariations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} templatesVariation`;
  }

  update(id: number, updateTemplatesVariationDto: UpdateTemplatesVariationDto) {
    return `This action updates a #${id} templatesVariation`;
  }

  remove(id: number) {
    return `This action removes a #${id} templatesVariation`;
  }
}
