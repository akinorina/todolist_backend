import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import accessLogger from './log/accessLogger';
import { HttpExceptionFilter } from './http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(accessLogger({ level: 'info' }));
  app.useGlobalFilters(new HttpExceptionFilter());
  app.setGlobalPrefix('/api');
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
