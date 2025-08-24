import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TodoRepository } from './todos.repository';
import { CreateTodoDto } from '../dto/create-todo.dto';
import { UpdateTodoDto } from '../dto/update-todo.dto';
import { Todo } from '../entities/todo.entity';
import { Todo as PrismaTodo } from '@prisma/client';

@Injectable()
export class TodoPrismaRepository implements TodoRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Todo[]> {
    const todos: PrismaTodo[] = await this.prisma.todo.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return todos.map((todo) => new Todo(todo));
  }

  async findById(id: string): Promise<Todo | null> {
    const todo: PrismaTodo | null = await this.prisma.todo.findUnique({
      where: { id },
    });
    return todo ? new Todo(todo) : null;
  }

  async create(createTodoDto: CreateTodoDto): Promise<void> {
    await this.prisma.todo.create({
      data: {
        title: createTodoDto.title,
        description: createTodoDto.description || '',
        completed: createTodoDto.completed || false,
      },
    });
  }

  async update(id: string, updateTodoDto: UpdateTodoDto): Promise<void> {
    await this.prisma.todo.update({
      where: { id },
      data: updateTodoDto,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.todo.delete({
      where: { id },
    });
  }
}
