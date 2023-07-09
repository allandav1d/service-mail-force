import { Test, TestingModule } from '@nestjs/testing';
import { TemplatesVariationsService } from './templates-variations.service';

describe('TemplatesVariationsService', () => {
  let service: TemplatesVariationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TemplatesVariationsService],
    }).compile();

    service = module.get<TemplatesVariationsService>(TemplatesVariationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
