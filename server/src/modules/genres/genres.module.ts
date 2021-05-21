import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';

import { Genre, GenreSchema } from './schemas/genre.schema';
import { GenresService } from './genres.service';
import { GenresController } from './genres.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Genre.name, schema: GenreSchema }]),
  ],
  controllers: [GenresController],
  providers: [GenresService],
})
export class GenresModule {}
