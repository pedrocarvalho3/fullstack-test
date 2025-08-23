import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { v4 as uuidv4 } from 'uuid';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  private todos: Todo[] = [];

  findAll(): Todo[] {
    return this.todos;
  }

  findById(id: string): Todo {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) {
      throw new NotFoundException(`Tarefa com ID ${id} não encontrada`);
    }
    return todo;
  }

  create(createTodoDto: CreateTodoDto): Todo {
    const newTodo = new Todo({
      id: uuidv4(),
      title: createTodoDto.title,
      description: createTodoDto.description || '',
      completed: createTodoDto.completed || false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    this.todos.push(newTodo);
    return newTodo;
  }

  update(id: string, updateTodoDto: UpdateTodoDto): Todo {
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);

    if (todoIndex === -1) {
      throw new NotFoundException(`Tarefa com ID ${id} não encontrada`);
    }

    const updatedTodo = {
      ...this.todos[todoIndex],
      ...updateTodoDto,
      updatedAt: new Date(),
    };

    this.todos[todoIndex] = updatedTodo;
    return updatedTodo;
  }
}
