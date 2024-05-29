import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

import { ScoresService } from './scores.service';
import { CreateScoreDto } from './dto/create-score.dto';

@Controller('scores')
export class ScoresController {
  constructor(private readonly scoresService: ScoresService) {}

  @Roles('admin')
  @UseGuards(AuthGuard, RolesGuard)
  @Post()
  create(@Body() createScoreDto: CreateScoreDto) {
    return this.scoresService.create(createScoreDto);
  }

}