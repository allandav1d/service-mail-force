import { Test, TestingModule } from '@nestjs/testing';
import { TemplatesVariationsController } from './templates-variations.controller';
import { TemplatesVariationsService } from './templates-variations.service';

describe('TemplatesVariationsController', () => {
  let controller: TemplatesVariationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TemplatesVariationsController],
      providers: [TemplatesVariationsService],
    }).compile();

    controller = module.get<TemplatesVariationsController>(TemplatesVariationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
