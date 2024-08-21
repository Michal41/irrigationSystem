import express from 'express'
import request from 'supertest'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import router from '../../src/controllers/irrigationController'

const app = express()
app.use(express.json())
app.use('/irrigation', router)

beforeEach(async () => {})

describe('POST /irrigate', () => {
  it('should send event', async () => {
    const requestBody = {
      irrigationTime: 20
    }
    const response = await request(app).post(`/irrigation/irrigate`).send(requestBody)
    expect(response.status).toBe(200)
  })
})
