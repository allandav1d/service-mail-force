
import { IPageRouter } from "src/@types/page.interface"
import { AdminJSOptions, ResourceWithOptions } from "src/@types/types-adminjs/src"

interface IClientsPageProps extends IPageRouter { }

export const ClientTraslate = {
  properties: {
    name: 'Nome',
    createdAt: 'Criado em',
  },
}

const ClientsPage = ({ dmmf, prisma }: IClientsPageProps) => ({
  resource: { model: dmmf.modelMap.Client, client: prisma },
  options: {
    id: 'Client',
    alias: 'Clientes',
    navigation: {
      name: 'Gestão de Clientes',
      icon: 'Shield',
    },
    listProperties: ['name', 'createdAt'],
    filterProperties: ['name', 'createdAt'],
    properties: {
      name: {
        isTitle: true,
        position: 1,
      },
      createdAt: {
        type: 'date',
        get: (record) => {
          if (record && record.createdAt) {
            return maskDate(record.createdAt);
          }
          return '';
        },
      }
    }
  }
} as ResourceWithOptions)

export default ClientsPage