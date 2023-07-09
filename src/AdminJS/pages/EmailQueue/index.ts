import { IPageRouter } from "src/@types/page.interface"
import { ResourceWithOptions } from "src/@types/types-adminjs/src"

interface IEmailQueuesPageProps extends IPageRouter {}

const EmailQueuesPage = ({dmmf, prisma}: IEmailQueuesPageProps) => ({
  resource: { model: dmmf.modelMap.EmailQueue, client: prisma },
  options: {
    id: 'EmailQueue',
    alias: 'Filas de Email',
    navigation: {
      name: null,
      icon: 'TrendingUp',
    },
    // showProperties: ['name', 'email', 'role', 'isActive', 'createdAt'],
    // listProperties: ['name', 'email', 'role', 'isActive', 'createdAt'],
    // filterProperties: ['name', 'email', 'role', 'isActive'],

  }
} as unknown as ResourceWithOptions)

  export default EmailQueuesPage