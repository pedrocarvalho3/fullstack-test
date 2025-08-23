import {
  IsString,
  IsOptional,
  IsBoolean,
  MinLength,
  MaxLength,
} from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @MinLength(1, { message: 'Título deve ter pelo menos 1 caractere' })
  @MaxLength(100, { message: 'Título deve ter no máximo 100 caracteres' })
  title: string;

  @IsOptional()
  @IsString()
  @MaxLength(500, { message: 'Descrição deve ter no máximo 500 caracteres' })
  description?: string;

  @IsOptional()
  @IsBoolean()
  completed?: boolean = false;
}
