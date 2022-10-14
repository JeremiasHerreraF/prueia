import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  const test = process.env.TEST || 'guau, funciona'; `¡Hola mundo desde NestJS! - ${test}`;
  console.log (test)
  await app.listen(port);
}
bootstrap();
