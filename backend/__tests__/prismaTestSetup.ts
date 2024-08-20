import { execSync } from 'child_process'
import { PrismaClient } from '@prisma/client'
import { beforeAll, beforeEach, afterAll } from 'vitest'

const prisma = new PrismaClient()

beforeAll(() => {
  execSync('npx prisma migrate deploy')
})

beforeEach(async () => {
  await prisma.preferences.deleteMany()
})

afterAll(async () => {
  await prisma.$disconnect()
})
