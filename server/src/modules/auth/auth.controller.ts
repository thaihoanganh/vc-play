import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';

import { ValidationInputPipe } from 'src/shared/pipes/validation.pipe';
import { JwtAuthGuard } from 'src/shared/guards/jwt-auth.guard';

import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Public } from 'src/shared/decorators/auth.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Body(new ValidationInputPipe()) loginDto: LoginDto) {
    const user = await this.authService.validateUser(loginDto);
    if (!user) {
      throw new HttpException(
        'Tên tài khoản hoặc mật khẩu không chính xác',
        HttpStatus.BAD_REQUEST,
      );
    }

    const loginData = await this.authService.login({
      username: loginDto.username,
    });

    return {
      success: true,
      status: HttpStatus.ACCEPTED,
      data: loginData,
    };
  }
}
