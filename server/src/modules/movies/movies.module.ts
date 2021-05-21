import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';

import { Movie, MovieSchema } from './schemas/movie.schema';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }]),
  ],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
