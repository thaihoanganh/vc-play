import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

import { Genre } from '../../genres/schemas/genre.schema';
import { Country } from '../../countries/schemas/country.schema';

export type MovieDocument = Movie & mongoose.Document;

@Schema()
export class Movie {
  @Prop({
    isRelativePath: { type: Boolean },
    src: { type: String },
    width: { type: Number },
  })
  backdropPath: { isRelativePath: boolean; src: string; width: number }[];

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: Country.name }])
  countries: Country;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: Genre.name }])
  genres: Genre;

  @Prop({ type: String })
  overview: string;

  @Prop({ type: String })
  originalTitle: string;

  @Prop({
    isRelativePath: { type: Boolean },
    src: { type: String },
    width: { type: Number },
  })
  posterPath: { isRelativePath: boolean; src: string; width: number }[];

  @Prop({ type: String })
  title: string;

  @Prop({ type: String })
  releaseDate: string;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
