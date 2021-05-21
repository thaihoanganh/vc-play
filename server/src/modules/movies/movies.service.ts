import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseService } from '../../shared/services/base.service';

import { Movie, MovieDocument } from './schemas/movie.schema';

@Injectable()
export class MoviesService extends BaseService<MovieDocument> {
  constructor(
    @InjectModel(Movie.name) private moviesModel: Model<MovieDocument>,
  ) {
    super(moviesModel);
  }
}
