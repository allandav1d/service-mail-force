import { IPageRouter } from "src/@types/page.interface"
import { ResourceWithOptions } from "src/@types/types-adminjs/src"

interface ISubscriptionsPageProps extends IPageRouter {}

const SubscriptionsPage = ({dmmf, prisma}: ISubscriptionsPageProps) => ({
  resource: { model: dmmf.modelMap.Subscription, client: prisma },
  options: {
    id: 'Subscription',
    navigation: {
      name: 'Gestão de Clientes',
      //icon: 'DollarSign',
    },
    // showProperties: ['name', 'email', 'role', 'isActive', 'createdAt'],
    // listProperties: ['name', 'email', 'role', 'isActive', 'createdAt'],
    // filterProperties: ['name', 'email', 'role', 'isActive'],

  }
} as unknown as ResourceWithOptions)

  export default SubscriptionsPage