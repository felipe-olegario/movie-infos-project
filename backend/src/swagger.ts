import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const setupSwagger = (app) => {
  const options = new DocumentBuilder()
    .setTitle('movie-streaming')
    .setDescription('teste realizado por Felipe')
    .setVersion('1.0')
    .addTag('api')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
};
