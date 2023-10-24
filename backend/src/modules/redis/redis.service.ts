import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService {
  private readonly redisClient: Redis;

  constructor() {
    this.redisClient = new Redis();
  }

  async setValue(key: string, value: any[]): Promise<void> {
    await this.redisClient.set(key, JSON.stringify(value));
  }

  async getValue(key: string): Promise<string | null> {
    return await this.redisClient.get(key);
  }
}
