import { Module } from '@nestjs/common';
import { DMMFClass } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';

import branding from './utils/branding';
import RouterBuilder from './pages/routes';
import { ClientTraslate } from './pages/Clients';

@Module({
  imports: [
        // AdminJS version 7 is ESM-only. In order to import it, you have to use dynamic imports.
        import('@adminjs/nestjs').then(({ AdminModule }) => AdminModule.createAdminAsync({
          useFactory: async () => {
            const { dark, light, noSidebar } = await import('@adminjs/themes')
            const { AdminJS, locales } = await import('adminjs')
            const AdminJSPrisma = await import('@adminjs/prisma')
    
            AdminJS.registerAdapter({
              Resource: AdminJSPrisma.Resource,
              Database: AdminJSPrisma.Database,
            })
    
            const prisma = new PrismaService()
    
            if (!prisma) {
              throw new Error('Prisma Client not found')
            }
    
            const dmmf = (prisma as any)._baseDmmf as DMMFClass
    
            if (!dmmf) {
              throw new Error('Prisma DMMF not found')
            }
    
            return {
              auth: {
                authenticate: async (email, password) => {
                  const user = await prisma.user.findUnique({
                    where: { email },
                  })
                  
                  console.log('user', user)
                  if (user && user.password === password) {
                    return user
                  }

                  return null
                },
                cookieName: `@token:${process.env.APP_NAME}`,
                cookiePassword: process.env.COOKIE_SECRET!,
              }, 
              adminJsOptions: {
                rootPath: '/app',
                loginPath: '/app/login',
                logoutPath: '/app/logout',
                resources: RouterBuilder({ dmmf, prisma }),
                // defaultTheme: light.id,
                availableThemes: [dark, light, noSidebar],
                pages: {
                  docs: {
                    label: 'Documentação',
                    path: '/docs',
                    component: '<></>',

                  }
                },
                settings: {
                  defaultPerPage: 10,
                },
                locale: {
                  language: 'pt-BR',
                  availableLanguages: ['pt-BR'],
                  translations: {
                    'pt-BR': {
                      labels: {
                        User: 'Usuários',
                        Client: 'Clientes',
                        Plan: 'Planos',
                        Project: 'Projetos',
                        Subscription: 'Assinaturas',
                        Template: 'Modelos',
                        Email: 'E-mails',
                        EmailQueue: 'Fila de E-mails',
                      },
                      resources: {
                        Client: ClientTraslate,
                      }
                    }
                  }
                },
                branding: branding(),
              },
            }
          },
        })),
  ],
})
export class AdminJSModule {}
