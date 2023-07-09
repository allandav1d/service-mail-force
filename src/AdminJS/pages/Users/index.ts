import { IPageRouter } from "src/@types/page.interface"
import { ResourceWithOptions } from "src/@types/types-adminjs/src"

interface IUsersPageProps extends IPageRouter {}

const UsersPage = ({dmmf, prisma}: IUsersPageProps) => ({
  resource: { model: dmmf.modelMap.User, client: prisma },
  options: {
    id: 'User',
    alias: 'Usuários',
    navigation: {
      name: 'Configurações',
      icon: 'Settings',
    },
    showProperties: ['name', 'email', 'role', 'isActive', 'createdAt'],
    listProperties: ['name', 'email', 'role', 'isActive', 'createdAt'],
    filterProperties: ['name', 'email', 'role', 'isActive'],
    properties: {
      name: {
        isTitle: true,
        position: 1,
      },
      isActive: {
        type: 'boolean',
        custom: {
          title: 'Status',
          render: (record) => record.params.isActive ? 'Ativo' : 'Inativo'
        },
        availableValues: [
          { value: true, label: 'Ativo', color: 'green' },
          { value: false, label: 'Inativo', color: 'red' },
        ]
      },
      createdAt: {
        type: 'date',
        custom: {
          // render: (record) => record.params.createdAt.toLocaleDateString('pt-BR')
        }
      }
    }
  }
} as unknown as ResourceWithOptions)

  export default UsersPage