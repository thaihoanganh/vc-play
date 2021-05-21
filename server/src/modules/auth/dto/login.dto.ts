import { IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsString()
  @MinLength(6, { message: 'Tên tài khoản phải có ít nhất 6 ký tự' })
  username: string;

  @IsString()
  @MinLength(6, { message: 'Mật khẩu phải có ít nhất 6 ký tự' })
  password: string;
}
