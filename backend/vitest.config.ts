import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    maxConcurrency: 1,
    setupFiles: './__tests__/prismaTestSetup.ts',
    poolOptions: {
      threads: {
        maxThreads: 1
      }
    }
  }
})
