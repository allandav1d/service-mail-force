import { Module } from '@nestjs/common';
import { DMMFClass } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';

import branding from './utils/branding';

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
    
            const resources = [
              {
                resource: { model: dmmf.modelMap.User, client: prisma},
                options: {
                  id: 'User',
                  href: '/app/resources/User',
                  alias: 'Usuários',
                  navigation:{
                    name: null,
                    icon: 'User',
                  }
                }
              }
            ]
    
            return {
              auth: {
                authenticate: async (email, password) => {
                  const user = await prisma.user.findUnique({
                    where: { email },
                  })
                  
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
                pages: {
                  login: {
                  
                  },
                  logout: {
                    label: 'Sair',
                  },
                },

                resources,
                defaultTheme: dark.id,
                availableThemes: [dark, light, noSidebar],
                settings: {
                  defaultPerPage: 10,
                },
                locale: {
                  language: 'pt-BR',
                  availableLanguages: ['pt-BR'],
                  translations: {
                    'pt-BR': {
                      labels: {
                        User: 'Usuário',
                        Users: 'Usuários',
                      },
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
