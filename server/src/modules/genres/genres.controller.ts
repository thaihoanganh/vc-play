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

import { GenresService } from './genres.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Controller('genres')
export class GenresController {
  constructor(private genresService: GenresService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body(new ValidationInputPipe()) createGenreDto: CreateGenreDto,
  ) {
    const checkGenreName = await this.genresService.exists(createGenreDto);

    if (checkGenreName) {
      throw new HttpException('Object already exists', HttpStatus.CONFLICT);
    }

    const newData = await this.genresService.create(createGenreDto);

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
    const getData = await this.genresService.findAll(query);

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
    const getData = await this.genresService.findOne({ _id: id });

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
    @Body(new ValidationInputPipe()) updateGenreDto: UpdateGenreDto,
  ) {
    const newData = await this.genresService.update(
      { _id: id },
      updateGenreDto,
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
    const getData = await this.genresService.remove({ _id: id });

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
