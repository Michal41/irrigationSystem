import express from 'express'
import request from 'supertest'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import router from '../../src/controllers/irrigationController'

const app = express()
app.use(express.json())
app.use('/irrigation', router)

beforeEach(async () => {})

describe('GET /', () => {
  it('should send event', async () => {
    const response = await request(app).get(`/irrigation/`)
    expect(response.status).toBe(200)
  })
})
