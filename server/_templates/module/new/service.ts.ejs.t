---
to: src/modules/<%= h.lowercaseFirstLetter(name) %>/<%= h.lowercaseFirstLetter(name) %>.service.ts
---

import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseService } from '../../shared/services/base.service';

import { <%= h.capitalizeFirstLetter(name, true) %>, <%= h.capitalizeFirstLetter(name, true) %>Document } from './schemas/<%= h.lowercaseFirstLetter(name, true) %>.schema';

@Injectable()
export class <%= h.capitalizeFirstLetter(name) %>Service extends BaseService<<%= h.capitalizeFirstLetter(name, true) %>Document> {
  constructor(
    @InjectModel(<%= h.capitalizeFirstLetter(name, true) %>.name) private <%= h.lowercaseFirstLetter(name) %>Model: Model<<%= h.capitalizeFirstLetter(name, true) %>Document>,
  ) {
    super(<%= h.lowercaseFirstLetter(name) %>Model);
  }
}
