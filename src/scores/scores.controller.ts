import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';

import { ScoresService } from './scores.service';
import { CreateScoreDto } from './dto/create-score.dto';

@Controller('scores')
export class ScoresController {
  constructor(private readonly scoresService: ScoresService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createScoreDto: CreateScoreDto) {
    return this.scoresService.create(createScoreDto);
  }

}