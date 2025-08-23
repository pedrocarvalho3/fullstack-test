import { Injectable } from '@nestjs/common';
import { Todo } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TodosService {
  private todos: Todo[] = [];

  findAll(): Todo[] {
    return this.todos;
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
}
