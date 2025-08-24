// src/todos/repositories/todo-in-memory.repository.ts
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { TodoRepository } from './todos.repository';
import { CreateTodoDto } from '../dto/create-todo.dto';
import { UpdateTodoDto } from '../dto/update-todo.dto';
import { Todo } from '../entities/todo.entity';

@Injectable()
export class TodoInMemoryRepository implements TodoRepository {
  private todos: Todo[] = [];

  async findAll(): Promise<Todo[]> {
    return this.todos;
  }

  async findById(id: string): Promise<Todo | null> {
    const todo = this.todos.find((todo) => todo.id === id);
    return todo || null;
  }

  async create(createTodoDto: CreateTodoDto): Promise<void> {
    const newTodo = new Todo({
      id: uuidv4(),
      title: createTodoDto.title,
      description: createTodoDto.description || '',
      completed: createTodoDto.completed || false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    this.todos.push(newTodo);
  }

  async update(id: string, updateTodoDto: UpdateTodoDto): Promise<void> {
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);

    const updatedTodo = new Todo({
      ...this.todos[todoIndex],
      ...updateTodoDto,
      updatedAt: new Date(),
    });

    this.todos[todoIndex] = updatedTodo;
  }

  async delete(id: string): Promise<void> {
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);

    this.todos.splice(todoIndex, 1);
  }
}
