import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCountryDto {
  @IsNotEmpty({ message: 'Tên quốc gia không được bỏ trống' })
  @IsString()
  name: string;
}
