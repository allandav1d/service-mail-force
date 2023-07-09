import { ClientsModule } from "./clients/clients.module";
import { EmailQueuesModule } from "./email-queues/email-queues.module";
import { EmailsModule } from "./emails/emails.module";
import { PlansModule } from "./plans/plans.module";
import { ProjectsModule } from "./projects/projects.module";
import { SubscriptionsModule } from "./subscriptions/subscriptions.module";
import { TemplatesVariationsModule } from "./templates-variations/templates-variations.module";
import { TemplatesModule } from "./templates/templates.module";
import { UsersPermissionsModule } from "./users-permissions/users-permissions.module";
import { UsersModule } from "./users/users.module";

export const Resources = [
    ClientsModule,
    EmailQueuesModule,
    EmailsModule,
    PlansModule,
    ProjectsModule,
    SubscriptionsModule,
    TemplatesModule,
    TemplatesVariationsModule,
    UsersModule,
    UsersPermissionsModule,
]