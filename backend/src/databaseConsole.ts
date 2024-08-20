import { PrismaClient } from '@prisma/client'
import readline from 'readline'

const prisma = new PrismaClient()
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const prompt = (query: string): Promise<string> => {
  return new Promise((resolve) => rl.question(query, resolve))
}

const main = async () => {
  console.log("Type 'exit' to quit.")
  while (true) {
    const input = await prompt('prisma> ')
    if (input.toLowerCase() === 'exit') {
      break
    }

    try {
      const result = await eval(input)
      console.log(result)
    } catch (e) {
      console.error('Error executing query:', e)
    }
  }
}

main()
  .catch((e) => {
    console.error(e)
  })
  .finally(async () => {
    rl.close()
    await prisma.$disconnect()
  })
