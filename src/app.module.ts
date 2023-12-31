import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrismaModule } from './prisma/prisma.module';
import { AdminJSModule } from './AdminJS/AdminJS.module';
import { ConfigModule } from './config/config.module';
import { KeycloakConnectModule } from 'nest-keycloak-connect';
import { Resources } from './resources/resources';

@Module({
  imports: [
    KeycloakConnectModule.register({
      authServerUrl: process.env.KEYCLOAK_URL,
      realm: process.env.KEYCLOAK_REALM,
      clientId: process.env.KEYCLOAK_CLIENT_ID,
      secret: process.env.KEYCLOAK_CLIENT_SECRET
      // Secret key of the client taken from keycloak server
    }),
    ConfigModule,
    PrismaModule,
    ...Resources,
    AdminJSModule
  ],
  controllers: [AppController], 
  providers: [
    AppService,
  ],
})
 
export class AppModule { }