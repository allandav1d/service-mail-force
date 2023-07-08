import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const planData: Prisma.PlanCreateInput[] = [
  {
    name: 'Basíco',
    price: 0,
    features: '1 usúario, 1 projeto, 1GB de armazenamento',
    isActive: true,
  },
  {
    name: 'Pro',
    price: 10,
    features: '5 usúarios, 5 projetos, 5GB de armazenamento',
    isActive: true,
  },
  {
    name: 'Business',
    price: 25,
    features: 'Usuários ilimitados, projetos ilimitados, 10GB de armazenamento',
    isActive: true,
  },
]

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Administrador',
    email: 'administrador@demo.com.br',
    password: '123456',
    isActive: true,
    role: 'ADMIN',
  },
  {
    name: 'Dev',
    email: 'dev@demo.com.br',
    password: '123456',
    isActive: true,
    role: 'DEVELOPER',
  },
  {
    name: 'Master',
    email: 'master@demo.com.br',
    password: '123456',
    isActive: true,
    role: 'MASTER',
  },
]

const clientData: Prisma.ClientCreateInput[] = [
  {
    name: 'Cliente 1',
  },
  {
    name: 'Cliente 2',
  },
  {
    name: 'Cliente 3',
  },
]

async function main() {
  console.log(`Start seeding ...`)

  for (const p of planData) {
    const plan = await prisma.plan.create({
      data: p,
    })
    console.log(`Created plan with id: ${plan.id}`)
  }

  for (const c of clientData) {
    const client = await prisma.client.create({
      data: c,
    })
    console.log(`Created client with id: ${client.id}`)
  }

  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }

  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })