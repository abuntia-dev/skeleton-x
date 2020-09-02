import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HTTP_PORT, HTTP_HOST } from './lib/env.enum';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = await app.get<ConfigService>(ConfigService);
  const httpPort = configService.get<number>(...HTTP_PORT);
  const httpHost = configService.get<string>(...HTTP_HOST);
  await app.listen(httpPort, httpHost);
}
bootstrap();
