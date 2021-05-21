import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(query: any) {
    const user = this.usersService.findOne(query);

    if (user) {
      return user;
    }

    return null;
  }

  async login(user: any) {
    const payload = { username: user.username };

    return {
      ...user,
      accessToken: this.jwtService.sign(payload),
    };
  }
}
