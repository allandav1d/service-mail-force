import { PartialType } from '@nestjs/swagger';
import { CreateTemplatesVariationDto } from './create-templates-variation.dto';

export class UpdateTemplatesVariationDto extends PartialType(CreateTemplatesVariationDto) {}
