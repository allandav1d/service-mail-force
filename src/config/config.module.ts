import { Module } from '@nestjs/common';
import { StaticConfigModule } from './static-config.module';

@Module({
    imports: [
        StaticConfigModule
    ],
})

export class ConfigModule { }