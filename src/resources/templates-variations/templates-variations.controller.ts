import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TemplatesVariationsService } from './templates-variations.service';
import { CreateTemplatesVariationDto } from './dto/create-templates-variation.dto';
import { UpdateTemplatesVariationDto } from './dto/update-templates-variation.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('templates-variations')
@ApiTags('templates-variations')
export class TemplatesVariationsController {
  constructor(private readonly templatesVariationsService: TemplatesVariationsService) {}

  @Post()
  create(@Body() createTemplatesVariationDto: CreateTemplatesVariationDto) {
    return this.templatesVariationsService.create(createTemplatesVariationDto);
  }

  @Get()
  findAll() {
    return this.templatesVariationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.templatesVariationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTemplatesVariationDto: UpdateTemplatesVariationDto) {
    return this.templatesVariationsService.update(+id, updateTemplatesVariationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.templatesVariationsService.remove(+id);
  }
}
