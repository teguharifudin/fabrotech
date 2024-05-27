import { Controller, Get, Body, Patch, Param, Delete, NotFoundException, ParseIntPipe, } from '@nestjs/common';

import { LeaderboardService } from './leaderboard.service';

@Controller('leaderboard')
export class LeaderboardController {
  constructor(private readonly leaderboardService: LeaderboardService) {}

  @Get()
  findAll() {
    return this.leaderboardService.findAll();
  }
}