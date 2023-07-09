import { Test, TestingModule } from '@nestjs/testing';
import { EmailQueuesController } from './email-queues.controller';
import { EmailQueuesService } from './email-queues.service';

describe('EmailQueuesController', () => {
  let controller: EmailQueuesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmailQueuesController],
      providers: [EmailQueuesService],
    }).compile();

    controller = module.get<EmailQueuesController>(EmailQueuesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
