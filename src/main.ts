import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import accessLogger from './log/accessLogger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(accessLogger({ level: 'info' }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
