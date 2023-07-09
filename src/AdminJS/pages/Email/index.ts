import { IPageRouter } from "src/@types/page.interface"
import { ResourceWithOptions } from "src/@types/types-adminjs/src"

interface IEmailsPageProps extends IPageRouter {}

const EmailsPage = ({dmmf, prisma}: IEmailsPageProps) => ({
  resource: { model: dmmf.modelMap.Email, client: prisma },
  options: {
    id: 'Email',
    alias: 'E-mails',
    navigation: {
      name: null,
      icon: 'Mail',
    },
    // showProperties: ['name', 'email', 'role', 'isActive', 'createdAt'],
    // listProperties: ['name', 'email', 'role', 'isActive', 'createdAt'],
    // filterProperties: ['name', 'email', 'role', 'isActive'],

  }
} as unknown as ResourceWithOptions)

  export default EmailsPage