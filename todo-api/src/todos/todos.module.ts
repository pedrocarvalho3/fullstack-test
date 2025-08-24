import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { TodoRepository } from './repositories/todos.repository';
import { TodoInMemoryRepository } from './repositories/todo-in-memory.repository';
import { TodoPrismaRepository } from './repositories/todos-prisma.repository';

@Module({
  controllers: [TodosController],
  providers: [
    TodosService,
    PrismaService,
    {
      provide: TodoRepository,
      useClass:
        process.env.NODE_ENV === 'test'
          ? TodoInMemoryRepository
          : TodoPrismaRepository,
    },
  ],
  exports: [TodosService, TodoRepository],
})
export class TodosModule {}
