import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoRepository } from './repositories/todos.repository';

@Injectable()
export class TodosService {
  constructor(private readonly todoRepository: TodoRepository) {}

  async findAll(): Promise<Todo[]> {
    return this.todoRepository.findAll();
  }

  async findById(id: string): Promise<Todo> {
    const todo = await this.todoRepository.findById(id);
    if (!todo) {
      throw new NotFoundException(`Tarefa com ID ${id} não encontrada`);
    }
    return todo;
  }

  async create(createTodoDto: CreateTodoDto): Promise<void> {
    await this.todoRepository.create(createTodoDto);
  }

  async update(id: string, updateTodoDto: UpdateTodoDto): Promise<void> {
    const todo = await this.todoRepository.findById(id);

    if (!todo) {
      throw new NotFoundException(`Tarefa com ID ${id} não encontrada`);
    }

    await this.todoRepository.update(id, updateTodoDto);
  }

  async delete(id: string): Promise<void> {
    const todo = await this.todoRepository.findById(id);

    if (!todo) {
      throw new NotFoundException(`Tarefa com ID ${id} não encontrada`);
    }

    await this.todoRepository.delete(id);
  }
}
