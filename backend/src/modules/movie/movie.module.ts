import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { RedisModule } from '../redis/redis.module';

@Module({
  imports: [RedisModule],
  providers: [MovieService],
  exports: [MovieModule],
  controllers: [MovieController],
})
export class MovieModule {}
