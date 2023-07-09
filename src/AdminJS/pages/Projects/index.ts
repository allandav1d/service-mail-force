import { IPageRouter } from "src/@types/page.interface"
import { ResourceWithOptions } from "src/@types/types-adminjs/src"

interface IProjectsPageProps extends IPageRouter {}

const ProjectsPage = ({dmmf, prisma}: IProjectsPageProps) => ({
  resource: { model: dmmf.modelMap.Project, client: prisma },
  options: {
    id: 'Project',
    alias: 'Projetos',
    navigation: {
      name: null,
      icon: 'ShoppingBag',
    },
    // showProperties: ['name', 'email', 'role', 'isActive', 'createdAt'],
    // listProperties: ['name', 'email', 'role', 'isActive', 'createdAt'],
    // filterProperties: ['name', 'email', 'role', 'isActive'],

  }
} as unknown as ResourceWithOptions)

  export default ProjectsPage