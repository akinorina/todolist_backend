import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SampleLogsController } from './sample_logs/sample_logs.controller';
import { SampleLogsModule } from './sample_logs/sample_logs.module';

@Module({
  imports: [SampleLogsModule],
  controllers: [AppController, SampleLogsController],
  providers: [AppService],
})
export class AppModule {}
