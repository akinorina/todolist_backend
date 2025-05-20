import { Test, TestingModule } from '@nestjs/testing';
import { SampleLogsController } from './sample_logs.controller';

describe('SampleLogsController', () => {
  let controller: SampleLogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SampleLogsController],
    }).compile();

    controller = module.get<SampleLogsController>(SampleLogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
