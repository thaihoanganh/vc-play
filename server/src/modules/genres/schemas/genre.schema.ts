import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type GenreDocument = Genre & mongoose.Document;

@Schema()
export class Genre {
  @Prop({ type: String })
  name: string;
}

export const GenreSchema = SchemaFactory.createForClass(Genre);
