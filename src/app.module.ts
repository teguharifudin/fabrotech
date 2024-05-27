import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
// import { UsersService } from './users/users.service';
// import { jwtConstants } from './constants';
import { ScoresModule } from './scores/scores.module';
import { LeaderboardModule } from './leaderboard/leaderboard.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      global: true,
      // secret: jwtConstants.secret,
      // secret: process.env.SECRET,
      secret: 'SECRET',
      signOptions: { expiresIn: '30s' },
    }),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.PG_HOST,
      port: parseInt(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    ScoresModule,
    LeaderboardModule,
  ],
  // exports: [JwtModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
