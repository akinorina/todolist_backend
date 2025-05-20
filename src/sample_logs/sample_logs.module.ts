import { Module } from '@nestjs/common';
import { SampleLogsController } from './sample_logs.controller';

@Module({})
@Module({
  controllers: [SampleLogsController],
})
export class SampleLogsModule {}
