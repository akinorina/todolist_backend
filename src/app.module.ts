import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SampleLogsController } from './sample_logs/sample_logs.controller';
import { SampleLogsModule } from './sample_logs/sample_logs.module';
import { TodosModule } from './todos/todos.module';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration] }),
    SampleLogsModule,
    TodosModule,
  ],
  controllers: [AppController, SampleLogsController],
  providers: [AppService],
})
export class AppModule {}
