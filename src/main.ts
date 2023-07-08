import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1', {
    // exclude: [{ path: 'health', method: RequestMethod.GET }],
  });

  //Swagger
  const config = new DocumentBuilder()
    .setTitle('Mail Force API')
    .setDescription('Uma API para envio de e-mails em massa utilizando o template customizado')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  //expose on port 3000
  await app.listen(3000);
}
bootstrap();
