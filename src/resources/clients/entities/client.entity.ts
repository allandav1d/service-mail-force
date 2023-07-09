import { Inject } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { Client, PrismaClient, Project, User } from "@prisma/client";

export class ClientEntity implements Client {
    constructor(@Inject("PrismaClient") private readonly prisma: PrismaClient) { }

    @ApiProperty()
    id: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    users: User[];

    @ApiProperty()
    projects: Project[];

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}

