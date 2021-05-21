import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type CountryDocument = Country & mongoose.Document;

@Schema()
export class Country {
  @Prop({ type: String })
  name: string;
}

export const CountrySchema = SchemaFactory.createForClass(Country);
