---
to: src/modules/<%= h.lowercaseFirstLetter(name) %>/<%= h.lowercaseFirstLetter(name) %>.controller.ts
---

import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Query,
  Delete,
  HttpException,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';

import { ValidationInputPipe } from '../../shared/pipes/validation.pipe';

import { <%= h.capitalizeFirstLetter(name) %>Service } from './<%= h.lowercaseFirstLetter(name) %>.service';
import { Create<%= h.capitalizeFirstLetter(name, true) %>Dto } from './dto/create-<%= h.lowercaseFirstLetter(name, true) %>.dto';
import { Update<%= h.capitalizeFirstLetter(name, true) %>Dto } from './dto/update-<%= h.lowercaseFirstLetter(name, true) %>.dto';

@Controller('<%= h.lowercaseFirstLetter(name) %>')
export class <%= h.capitalizeFirstLetter(name) %>Controller {
  constructor(private <%= h.lowercaseFirstLetter(name) %>Service: <%= h.capitalizeFirstLetter(name) %>Service) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body(new ValidationInputPipe()) create<%= h.capitalizeFirstLetter(name, true) %>Dto: Create<%= h.capitalizeFirstLetter(name, true) %>Dto,
  ) {
    const check<%= h.capitalizeFirstLetter(name, true) %>Name = await this.<%= h.lowercaseFirstLetter(name) %>Service.exists(
      create<%= h.capitalizeFirstLetter(name, true) %>Dto,
    );

    if (check<%= h.capitalizeFirstLetter(name, true) %>Name) {
      throw new HttpException('Object already exists', HttpStatus.CONFLICT);
    }

    const newData = await this.<%= h.lowercaseFirstLetter(name) %>Service.create(create<%= h.capitalizeFirstLetter(name, true) %>Dto);

    return {
      success: true,
      status: HttpStatus.CREATED,
      data: newData,
    };
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(@Query() query: any) {
    const getData = await this.<%= h.lowercaseFirstLetter(name) %>Service.findAll(query);

    return {
      success: true,
      status: HttpStatus.OK,
      data: getData,
    };
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') id: string) {
    const getData = await this.<%= h.lowercaseFirstLetter(name) %>Service.findOne({ _id: id });

    return {
      success: true,
      status: HttpStatus.OK,
      data: getData,
    };
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async update(
    @Param('id') id: string,
    @Body(new ValidationInputPipe()) update<%= h.capitalizeFirstLetter(name, true) %>Dto: Update<%= h.capitalizeFirstLetter(name, true) %>Dto,
  ) {
    const newData = await this.<%= h.lowercaseFirstLetter(name) %>Service.update(
      { _id: id },
      update<%= h.capitalizeFirstLetter(name, true) %>Dto,
    );

    if (!newData) {
      throw new HttpException('Object not found', HttpStatus.NOT_FOUND);
    }

    return {
      success: true,
      status: HttpStatus.OK,
      data: newData,
    };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  async remove(@Param('id') id: string) {
    const getData = await this.<%= h.lowercaseFirstLetter(name) %>Service.remove({ _id: id });

    if (!getData) {
      throw new HttpException('Object not found', HttpStatus.NOT_FOUND);
    }

    return {
      success: true,
      status: HttpStatus.ACCEPTED,
      data: null,
    };
  }
}
