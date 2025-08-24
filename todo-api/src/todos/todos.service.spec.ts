import { Test, TestingModule } from '@nestjs/testing';
import { TodosService } from './todos.service';
import { TodoRepository } from './repositories/todos.repository';
import { TodoInMemoryRepository } from './repositories/todo-in-memory.repository';
import { CreateTodoDto } from './dto/create-todo.dto';
import { NotFoundException } from '@nestjs/common';

describe('TodosService', () => {
  let service: TodosService;
  let repository: TodoInMemoryRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TodosService,
        {
          provide: TodoRepository,
          useClass: TodoInMemoryRepository,
        },
      ],
    }).compile();

    service = module.get<TodosService>(TodosService);
    repository = module.get<TodoInMemoryRepository>(TodoRepository);
  });

  afterEach(() => {
    repository.clear();
  });

  describe('findAll', () => {
    it('should return empty array when no todos exist', async () => {
      const result = await service.findAll();
      expect(result).toEqual([]);
    });

    it('should return all todos', async () => {
      const createDto: CreateTodoDto = { title: 'Test Todo' };
      await service.create(createDto);

      const result = await service.findAll();
      expect(result).toHaveLength(1);
      expect(result[0].title).toBe('Test Todo');
    });
  });

  describe('findById', () => {
    it('should return todo when found', async () => {
      const createDto: CreateTodoDto = { title: 'Test Todo' };
      const created = await repository.create(createDto);

      const result = await service.findById(created.id);
      expect(result.id).toBe(created.id);
      expect(result.title).toBe('Test Todo');
    });

    it('should throw NotFoundException when todo not found', async () => {
      await expect(service.findById('non-existent')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('create', () => {
    it('should create a new todo', async () => {
      const createDto: CreateTodoDto = { title: 'Test Todo' };

      await service.create(createDto);

      const todos = await service.findAll();
      expect(todos).toHaveLength(1);
      expect(todos[0].title).toBe('Test Todo');
    });
  });
});
