import {
  IsBoolean,
  IsMongoId,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import { ObjectId } from 'mongodb';

class ImageDto {
  @IsBoolean()
  isRelativePath: boolean;

  @IsString()
  src: string;

  @IsNumber()
  width: number;
}

export class CreateMovieDto {
  @ValidateNested({ each: true })
  @Type(() => ImageDto)
  backdropPath: ImageDto[];

  @IsMongoId({ each: true })
  countries: ObjectId[];

  @IsMongoId({ each: true })
  genres: ObjectId[];

  @IsString()
  overview: string;

  @IsString()
  originalTitle: string;

  @ValidateNested({ each: true })
  @Type(() => ImageDto)
  posterPath: ImageDto[];

  @IsString()
  title: string;

  @IsString()
  releaseDate: string;
}
