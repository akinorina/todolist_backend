import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { Todo } from './entities/todo.entity';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  @ApiOperation({
    summary: 'TODO作成',
    description: 'TODO要件を作成します。',
  })
  @ApiCreatedResponse({
    description: 'TODO作成成功。作成したデータを返す。',
    type: Todo,
  })
  async create(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return await this.todosService.create(createTodoDto);
  }

  @Get()
  @ApiOperation({
    summary: 'TODO一覧取得',
    description: 'TODO要件一覧を取得します。',
  })
  @ApiResponse({ status: 200, description: 'ToDo一覧取得成功', type: [Todo] })
  async findAll(): Promise<Todo[]> {
    return await this.todosService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'TODO取得',
    description: 'TODO要件を取得します。',
  })
  @ApiOkResponse({ description: 'ToDo取得成功', type: Todo })
  @ApiNotFoundResponse({ description: 'ToDo取得失敗', type: HttpException })
  async findOne(@Param('id') id: string): Promise<Todo> {
    return await this.todosService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'TODO更新',
    description: 'TODO要件を更新します。',
  })
  @ApiOkResponse({
    description: 'ToDo更新成功。更新しsたデータを返す。',
    type: Todo,
  })
  @ApiNotFoundResponse({ description: 'ToDo更新失敗', type: HttpException })
  async update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return await this.todosService.update(+id, updateTodoDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'TODO削除',
    description: 'TODO要件を削除します。',
  })
  @ApiOkResponse({
    description: 'ToDo削除成功。削除したデータを返す。',
    type: Todo,
  })
  @ApiNotFoundResponse({ description: 'ToDo削除失敗', type: HttpException })
  async remove(@Param('id') id: string) {
    return await this.todosService.remove(+id);
  }
}
