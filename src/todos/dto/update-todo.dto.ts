import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  @ApiProperty({
    name: 'todo',
    description: 'ToDo要件内容',
    example: 'TODO APIを開発する',
  })
  todo: string;
}
