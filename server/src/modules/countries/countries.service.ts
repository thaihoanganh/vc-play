import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseService } from '../../shared/services/base.service';

import { Country, CountryDocument } from './schemas/country.schema';

@Injectable()
export class CountriesService extends BaseService<CountryDocument> {
  constructor(
    @InjectModel(Country.name) private countriesModel: Model<CountryDocument>,
  ) {
    super(countriesModel);
  }
}
