import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import accessLogger from './log/accessLogger';
import { HttpExceptionFilter } from './http-exception.filter';
import configuration from './config/configuration';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  // CORS設定
  const options = { cors: configuration().app.cors };
  const app = await NestFactory.create(AppModule, options);
  // アクセスログ出力
  app.use(accessLogger({ level: 'info' }));
  // 例外フィルタ & システムログ出力
  app.useGlobalFilters(new HttpExceptionFilter());
  // APIプレフィクス
  app.setGlobalPrefix('/api');

  // OpenAPI/Swagger
  const config = new DocumentBuilder()
    .setTitle('todolist')
    .setDescription('ToDoリスト backend API')
    .setVersion('0.1.x')
    .addTag('todolist')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory, {
    jsonDocumentUrl: '/api-json',
    yamlDocumentUrl: '/api-yaml',
    explorer: true,
  });

  await app.listen(configuration().app.port);
}
bootstrap();
