import { createMocks } from 'node-mocks-http'
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import forgotHandler from '../../../pages/api/auth/forgot'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('/api/auth/forgot API Endpoint', () => {
  const OLD_ENV = process.env
  beforeEach(() => {
    jest.resetModules()
    process.env = { ...OLD_ENV }
    mockedAxios.post.mockReset()
  })
  afterAll(() => {
    process.env = OLD_ENV
  })

  it('rate limits after too many requests', async () => {
    process.env.INTERNAL_AUTH_SERVICE_URL = 'http://fake-auth-service.com'
    const body = { email: 'test@example.com' }
    for (let i = 0; i < 5; i++) {
      mockedAxios.post.mockResolvedValueOnce({ status: 200, data: { ok: true } })
      const { req, res } = createMocks({ method: 'POST', body })
      await forgotHandler(req as NextApiRequest, res as NextApiResponse)
    }
    const { req, res } = createMocks({ method: 'POST', body })
    mockedAxios.post.mockResolvedValueOnce({ status: 200, data: { ok: true } })
    await forgotHandler(req as NextApiRequest, res as NextApiResponse)
    expect(res._getStatusCode()).toBe(429)
  })
})
