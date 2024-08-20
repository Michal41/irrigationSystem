import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const connectPrisma = async () => {
  await prisma.$connect()
}

const disconnectPrisma = async () => {
  await prisma.$disconnect()
}

process.on('SIGINT', async () => {
  await disconnectPrisma()
  process.exit()
})
process.on('SIGTERM', async () => {
  await disconnectPrisma()
  process.exit()
})

export { prisma, connectPrisma, disconnectPrisma }
