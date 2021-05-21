---
to: src/modules/<%= name %>/schemas/<%= h.lowercaseFirstLetter(name, true) %>.schema.ts
---

import { Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type <%= h.capitalizeFirstLetter(name, true) %>Document = <%= h.capitalizeFirstLetter(name, true) %> & mongoose.Document;

@Schema()
export class <%= h.capitalizeFirstLetter(name, true) %> {}

export const <%= h.capitalizeFirstLetter(name, true) %>Schema = SchemaFactory.createForClass(<%= h.capitalizeFirstLetter(name, true) %>);
