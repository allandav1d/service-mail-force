import { Test, TestingModule } from '@nestjs/testing';
import { EmailQueuesService } from './email-queues.service';

describe('EmailQueuesService', () => {
  let service: EmailQueuesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmailQueuesService],
    }).compile();

    service = module.get<EmailQueuesService>(EmailQueuesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
