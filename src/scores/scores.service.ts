import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateScoreDto } from './dto/create-score.dto';
import { Score } from './entities/score.entity';

@Injectable()
export class ScoresService {
  constructor(
    @InjectRepository(Score) private scoreRepository: Repository<Score>,
  ) {}

  create(createScoreDto: CreateScoreDto) {
    const score = new Score();
    score.player = createScoreDto.player;
    score.point = createScoreDto.point;
    score.admin = createScoreDto.admin;
    return this.scoreRepository.save(score);
  }
  
}