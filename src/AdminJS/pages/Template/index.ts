import { IPageRouter } from "src/@types/page.interface"
import { ResourceWithOptions } from "src/@types/types-adminjs/src"

interface ITemplatesPageProps extends IPageRouter {}

const TemplatesPage = ({dmmf, prisma}: ITemplatesPageProps) => ({
  resource: { model: dmmf.modelMap.Template, client: prisma },
  options: {
    id: 'Template',
    alias: 'Modelos',
    navigation: {
      name: null,
      icon: 'FileText',
    },
    // showProperties: ['name', 'email', 'role', 'isActive', 'createdAt'],
    // listProperties: ['name', 'email', 'role', 'isActive', 'createdAt'],
    // filterProperties: ['name', 'email', 'role', 'isActive'],

  }
} as unknown as ResourceWithOptions)

  export default TemplatesPage