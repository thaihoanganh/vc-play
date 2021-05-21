import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseService } from '../../shared/services/base.service';

import { Genre, GenreDocument } from './schemas/genre.schema';

@Injectable()
export class GenresService extends BaseService<GenreDocument> {
  constructor(
    @InjectModel(Genre.name) private genresModel: Model<GenreDocument>,
  ) {
    super(genresModel);
  }
}
