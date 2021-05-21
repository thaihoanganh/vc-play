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
import { Public } from 'src/shared/decorators/auth.decorator';

import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body(new ValidationInputPipe()) createMovieDto: CreateMovieDto,
  ) {
    const checkMovieName = await this.moviesService.exists(createMovieDto);

    if (checkMovieName) {
      throw new HttpException('Object already exists', HttpStatus.CONFLICT);
    }

    const newData = await this.moviesService.create(createMovieDto);

    return {
      success: true,
      status: HttpStatus.CREATED,
      data: newData,
    };
  }

  @Public()
  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(@Query() query: any) {
    const { limit = 20, page = 1, ...filter } = query;

    const getData = await this.moviesService
      .findAll(filter)
      .populate('genres')
      .populate('countries')
      .skip(Number(page) * Number(limit) - Number(limit))
      .limit(Number(limit));

    return {
      success: true,
      status: HttpStatus.OK,
      data: getData,
    };
  }

  @Public()
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') id: string) {
    const getData = await this.moviesService
      .findOne({ _id: id })
      .populate('genres')
      .populate('countries');

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
    @Body(new ValidationInputPipe()) updateMovieDto: UpdateMovieDto,
  ) {
    const newData = await this.moviesService
      .update({ _id: id }, updateMovieDto)
      .populate('genres')
      .populate('countries');

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
    const getData = await this.moviesService.remove({ _id: id });

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
