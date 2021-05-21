---
to: src/modules/<%= h.lowercaseFirstLetter(name) %>/<%= h.lowercaseFirstLetter(name) %>.module.ts
---

import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';

import { <%= h.capitalizeFirstLetter(name, true) %>, <%= h.capitalizeFirstLetter(name, true) %>Schema } from './schemas/<%= h.lowercaseFirstLetter(name, true) %>.schema';
import { <%= h.capitalizeFirstLetter(name) %>Service } from './<%= h.lowercaseFirstLetter(name) %>.service';
import { <%= h.capitalizeFirstLetter(name) %>Controller } from './<%= h.lowercaseFirstLetter(name) %>.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: <%= h.capitalizeFirstLetter(name, true) %>.name, schema: <%= h.capitalizeFirstLetter(name, true) %>Schema }]),
  ],
  controllers: [<%= h.capitalizeFirstLetter(name) %>Controller],
  providers: [<%= h.capitalizeFirstLetter(name) %>Service],
})
export class <%= h.capitalizeFirstLetter(name) %>Module {}
