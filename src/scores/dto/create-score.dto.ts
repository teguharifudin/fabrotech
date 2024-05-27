import { IsString, IsInt, IsNotEmpty } from 'class-validator';

export class CreateScoreDto {
  @IsString()
  @IsNotEmpty()
  player: string;

  @IsInt()
  @IsNotEmpty()
  point: number;

  @IsInt()
  @IsNotEmpty()
  admin: number;
}