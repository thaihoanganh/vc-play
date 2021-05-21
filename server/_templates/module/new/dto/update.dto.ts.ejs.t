---
to: src/modules/<%= h.lowercaseFirstLetter(name) %>/dto/update-<%= h.lowercaseFirstLetter(name, true) %>.dto.ts
---

import { PartialType } from '@nestjs/mapped-types';
import { Create<%= h.capitalizeFirstLetter(name, true) %>Dto } from './create-<%= h.lowercaseFirstLetter(name, true) %>.dto';

export class Update<%= h.capitalizeFirstLetter(name, true) %>Dto extends PartialType(Create<%= h.capitalizeFirstLetter(name, true) %>Dto) {}
