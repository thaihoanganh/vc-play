import { Document, Model } from 'mongoose';

export class BaseService<T extends Document> {
  constructor(private model: Model<T>) {}

  create(createDto: any) {
    return this.model.create(createDto);
  }

  findAll(query: any) {
    return this.model.find(this.filter(query));
  }

  findOne(query: any) {
    if (query._id) {
      return this.model.findById(query._id);
    }
    return this.model.findOne(this.filter(query));
  }

  update(query: any, updateDto: any) {
    if (query._id) {
      return this.model.findByIdAndUpdate(query._id, updateDto, { new: true });
    }
    return this.model.findOneAndUpdate(this.filter(query), updateDto, {
      new: true,
    });
  }

  remove(query: any) {
    if (query._id) {
      return this.model.findByIdAndRemove(query._id);
    }
    return this.model.findOneAndRemove(this.filter(query));
  }

  exists(query: any) {
    return this.model.exists(query);
  }

  filter(query: any) {
    const filter: any = {};
    for (const key in query) {
      filter[key] = { $regex: query[key], $options: 'i' };
    }
    return filter;
  }
}
