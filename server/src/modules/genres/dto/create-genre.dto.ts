import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGenreDto {
  @IsNotEmpty({ message: 'Tên thể loại không được bỏ trống' })
  @IsString()
  name: string;
}
