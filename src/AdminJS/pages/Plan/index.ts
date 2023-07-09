import { IPageRouter } from "src/@types/page.interface"
import { ResourceWithOptions } from "src/@types/types-adminjs/src"

interface IPlansPageProps extends IPageRouter {}

const PlansPage = ({dmmf, prisma}: IPlansPageProps) => ({
  resource: { model: dmmf.modelMap.Plan, client: prisma },
  options: {
    id: 'Plan',
    alias: 'Planos',
    navigation: {
      name: 'Gestão de Clientes',
      icon: 'DollarSign',
    },
    // showProperties: ['name', 'email', 'role', 'isActive', 'createdAt'],
    // listProperties: ['name', 'email', 'role', 'isActive', 'createdAt'],
    // filterProperties: ['name', 'email', 'role', 'isActive'],

  }
} as unknown as ResourceWithOptions)

  export default PlansPage