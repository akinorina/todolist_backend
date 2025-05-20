import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { DatabaseModule } from 'src/database/database.module';
import { todoProviders } from './entities/todo.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [TodosController],
  providers: [...todoProviders, TodosService],
})
export class TodosModule {}
