import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','..','public'),
      exclude: ['/v1*','/app*', '/docs*'],
  }),
  ],
})
export class StaticConfigModule {}
