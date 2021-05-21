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

import { CountriesService } from './countries.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';

@Controller('countries')
export class CountriesController {
  constructor(private countriesService: CountriesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body(new ValidationInputPipe()) createCountryDto: CreateCountryDto,
  ) {
    const checkCountryName = await this.countriesService.exists(
      createCountryDto,
    );

    if (checkCountryName) {
      throw new HttpException('Object already exists', HttpStatus.CONFLICT);
    }

    const newCountry = await this.countriesService.create(createCountryDto);

    return {
      success: true,
      status: HttpStatus.CREATED,
      data: newCountry,
    };
  }

  @Public()
  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(@Query() query: any) {
    const getCountries = await this.countriesService.findAll(query);

    return {
      success: true,
      status: HttpStatus.OK,
      data: getCountries,
    };
  }

  @Public()
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') id: string) {
    const getCountry = await this.countriesService.findOne({ _id: id });

    return {
      success: true,
      status: HttpStatus.OK,
      data: getCountry,
    };
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async update(
    @Param('id') id: string,
    @Body(new ValidationInputPipe()) updateCountryDto: UpdateCountryDto,
  ) {
    const newData = await this.countriesService.update(
      { _id: id },
      updateCountryDto,
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
    const getData = await this.countriesService.remove({ _id: id });

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
