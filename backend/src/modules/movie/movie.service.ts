import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { RedisService } from '../redis/redis.service';

@Injectable()
export class MovieService {
  constructor(private readonly redisService: RedisService) {}

  private readonly apiKey = '4f485363c5221066aa58f33c5cee1d00';
  private readonly baseUrl = 'https://api.themoviedb.org/3';

  async listMovies(page: number): Promise<any> {
    try {
      const response = await axios.get(`${this.baseUrl}/movie/popular`, {
        params: {
          api_key: this.apiKey,
          page: page,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao listar filmes: ${error.message}`);
    }
  }

  async searchMovies(query: string) {
    try {
      const moviesFromCache = await this.redisService.getValue(query)
      if (moviesFromCache) {
        return JSON.parse(moviesFromCache)
      }
      const response = await axios.get(`${this.baseUrl}/search/movie`, {
        params: {
          api_key: this.apiKey,
          query: query,
        },
      });
      await this.redisService.setValue(query, response.data.results)
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao buscar filmes: ${error.message}`);
    }
  }

  async getMovieDetails(movieId: number) {
    try {
      const response = await axios.get(`${this.baseUrl}/movie/${movieId}`, {
        params: {
          api_key: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao obter detalhes do filme: ${error.message}`);
    }
  }
}
