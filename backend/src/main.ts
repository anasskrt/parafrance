import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

    // 🧱 Configuration Swagger
    const config = new DocumentBuilder()
    .setTitle('API Parafrance')
    .setDescription('Documentation de l\'API e-commerce')
    .setVersion('1.0')
    .addBearerAuth() // Pour le JWT
    .build();

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Swagger dispo sur /api

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
