import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Livro } from './livro.model';
import { LivrosService } from './livros.service';

@Controller('livros')
export class LivrosController {
  constructor(private livrosService: LivrosService) {}

  @Get()
  async obterTodos(): Promise<Livro[]> {
    return this.livrosService.obterTodos();
  }

  @Get(':id')
  async orbterUm(@Param() params): Promise<Livro> {
    return this.livrosService.obterUm(params.id);
  }

  @Post()
  async criar(@Body() Livro: Livro) {
    this.livrosService.criar(Livro);
  }

  @Put()
  async alterar(@Body() Livro: Livro): Promise<[number, Livro[]]> {
    return this.livrosService.alterar(Livro);
  }

  @Delete(':id')
  async apagar(@Param() params) {
    this.livrosService.apagar(params.id);
  }
}
