import { Inject, Injectable, HttpException, HttpStatus } from '@nestjs/common';
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
    try {
      return await this.todoRepository.findOneByOrFail({ id: id });
    } catch (err) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (err.name === 'EntityNotFoundError') {
        throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
      }
      throw err;
    }
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    try {
      await this.todoRepository.update(id, updateTodoDto);
      return await this.todoRepository.findOneByOrFail({ id: id });
    } catch (err) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (err.name === 'EntityNotFoundError') {
        throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
      }
      throw err;
    }
  }

  async remove(id: number) {
    try {
      await this.todoRepository.softDelete(id);
      return await this.todoRepository.findOneOrFail({
        where: { id: id },
        withDeleted: true,
      });
    } catch (err) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (err.name === 'EntityNotFoundError') {
        throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
      }
      throw err;
    }
  }
}
