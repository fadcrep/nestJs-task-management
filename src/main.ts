import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common'
import { AppModule } from './app.module';
import * as config from 'config'

async function bootstrap() {
  const logger = new Logger('bootsrap');
  const app = await NestFactory.create(AppModule);
  const serverConfig = config.get('server');


  if (process.env.NODE_ENV === 'development') {
    app.enableCors();
  } else {

    app.enableCors({ origin: serverConfig.origin });
    logger.log(`Accept requests from origin "${serverConfig.origin}" `);
  }



  console.log(serverConfig);
  const port = 3000
  await app.listen(port);

  logger.log(`Application listening on port ${port}`);

}
bootstrap();
