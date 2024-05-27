import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Score {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  player: string;

  @Column({ type: 'int' })
  point: number;

  @Column({ type: 'int' })
  admin: number;
}