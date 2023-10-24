import { Controller, Post, Body, Delete, Param, HttpStatus, Res, Get, Put } from '@nestjs/common';
import { MovieService } from './movie.service';
import { Response } from 'express';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get(':page')
  async listMovies(@Param('page') page: string) {
    try {
      const result = await this.movieService.listMovies(Number(page));
      
      return result
    } catch (error) {
      throw new Error(`Falha ao listar os Filmes: ${error.message}`);
    }
  }

  @Get(':id/details')
  async getDetailsByMovieId(@Param('id') moveId: string) {
    try {
      const result = await this.movieService.getMovieDetails(Number(moveId));
      return result
    } catch (error) {
      throw new Error(`Falha ao recuperar os detalhes: ${error.message}`);
    }
  }

  @Get('search/:query')
  async searchMovies(@Param('query') query: string) {
    try {
      const movies = await this.movieService.searchMovies(query);
      return movies;
    } catch (error) {
      throw new Error(`Erro ao buscar filmes: ${error.message}`);
    }
  }
}
