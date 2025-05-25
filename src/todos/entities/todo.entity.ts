/**
 * Todo data entity
 */
import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class Todo {
  @ApiProperty()
  @PrimaryGeneratedColumn({ comment: 'ID' })
  id: number = 0;

  @ApiProperty()
  @Column({ default: '', comment: 'todo' })
  todo: string = '';

  @ApiProperty({ type: String })
  @CreateDateColumn({ comment: '作成日時' })
  createdAt: string | undefined = undefined;

  @ApiProperty({ type: String })
  @UpdateDateColumn({ comment: '更新日時' })
  updatedAt: string | undefined = undefined;

  @ApiProperty({ type: String, nullable: true })
  @DeleteDateColumn({ comment: '削除日時' })
  deletedAt: string | undefined = undefined;
}
