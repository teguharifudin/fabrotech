import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    console.log(user);
    if (user?.password !== pass) {
      throw new UnauthorizedException('Wrong Password!');
    }
    const payload = { sub: user.id, username: user.username, role: user.role };
    return {
      access_token: await this.jwtService.signAsync(payload)
    };
  }
}
