import { IPageRouter } from "src/@types/page.interface"
import { ResourceWithOptions } from "src/@types/types-adminjs/src"

interface ILogsPageProps extends IPageRouter {}

const LogsPage = ({dmmf, prisma}: ILogsPageProps) => ({
  resource: { model: dmmf.modelMap.Log, client: prisma },
  options: {
    id: 'Log',
    alias: 'Logs',
    navigation: {
      name: null,
      icon: 'Pocket',
    },
    // showProperties: ['name', 'email', 'role', 'isActive', 'createdAt'],
    // listProperties: ['name', 'email', 'role', 'isActive', 'createdAt'],
    // filterProperties: ['name', 'email', 'role', 'isActive'],

  }
} as unknown as ResourceWithOptions)

  export default LogsPage