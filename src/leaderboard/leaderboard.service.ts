import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Score } from '../scores/entities/score.entity';

@Injectable()
export class LeaderboardService {
  constructor(
    @InjectRepository(Score) private leaderboardRepository: Repository<Score>,
  ) {}

  findAll() {
    return this.leaderboardRepository.find({
      take: 10,
      order: {
          point: "DESC" 
      }
    });
  }
}