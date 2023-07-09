import { IRouterBase } from "src/@types/page.interface";
import UsersPage from "./Users";
import ClientsPage from "./Clients";
import ProjectsPage from "./Projects";
import PlansPage from "./Plan";
import SubscriptionsPage from "./Subscription";
import TemplatesPage from "./Template";
import LogsPage from "./Log";
import EmailsPage from "./Email";
import EmailQueuesPage from "./EmailQueue";


interface IRouterBuilder extends IRouterBase { }

const RouterBuilder = ({ dmmf, prisma, ...props }: IRouterBuilder) => {

    return [
        ProjectsPage({ dmmf, prisma }),
        TemplatesPage({ dmmf, prisma }),
        EmailsPage({ dmmf, prisma }),
        EmailQueuesPage({ dmmf, prisma }),
        ClientsPage({ dmmf, prisma }),
        UsersPage({ dmmf, prisma }),
        PlansPage({ dmmf, prisma }),
        SubscriptionsPage({ dmmf, prisma }),
        LogsPage({ dmmf, prisma }),
    ]
}

export default RouterBuilder