import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import config from './config';

import { HttpExceptionFilter } from './shared/filters/http-exception.filter';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { GenresModule } from './modules/genres/genres.module';
import { CountriesModule } from './modules/countries/countries.module';
import { MoviesModule } from './modules/movies/movies.module';
import { AuthModule } from './modules/auth/auth.module';
import { JwtAuthGuard } from './shared/guards/jwt-auth.guard';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
    }),
    MongooseModule.forRootAsync({
      useFactory: () => config().mongodb,
    }),
    AuthModule,
    GenresModule,
    CountriesModule,
    MoviesModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    AppService,
  ],
})
export class AppModule {}
