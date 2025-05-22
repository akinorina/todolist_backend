import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiProperty({
    name: 'todo',
    description: 'ToDo要件内容',
    example: 'TODO APIを開発する',
  })
  todo: string;
}
