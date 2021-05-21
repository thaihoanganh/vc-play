import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import config from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('v1');

  await app.listen(config().port);
}
bootstrap();
