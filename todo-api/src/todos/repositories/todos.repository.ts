import { CreateTodoDto } from '../dto/create-todo.dto';
import { UpdateTodoDto } from '../dto/update-todo.dto';
import { Todo } from '../entities/todo.entity';

export abstract class TodoRepository {
  abstract findAll(): Promise<Todo[]>;
  abstract findById(id: string): Promise<Todo | null>;
  abstract create(createTodoDto: CreateTodoDto): Promise<void>;
  abstract update(id: string, updateTodoDto: UpdateTodoDto): Promise<void>;
  abstract delete(id: string): Promise<void>;
}
