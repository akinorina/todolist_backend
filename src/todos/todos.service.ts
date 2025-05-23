import { Inject, Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @Inject('TODO_REPOSITORY')
    private todoRepository: Repository<Todo>,
  ) {}

  async create(createTodoDto: CreateTodoDto) {
    return await this.todoRepository.save(createTodoDto);
  }

  async findAll() {
    return await this.todoRepository.find();
  }

  async findOne(id: number) {
    return await this.todoRepository.findOneByOrFail({ id: id });
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    return await this.todoRepository.update(id, updateTodoDto);
  }

  async remove(id: number) {
    return await this.todoRepository.softDelete(id);
  }
}
