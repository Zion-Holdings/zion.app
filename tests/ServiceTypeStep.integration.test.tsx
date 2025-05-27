import { render, screen, waitFor } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { ServiceTypeStep } from '@/components/QuoteRequestForm/ServiceTypeStep'
import { QuoteFormData } from '@/types/quotes'

const server = setupServer()

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

const baseData: QuoteFormData = {
  serviceType: 'service',
  serviceCategory: '',
  specificItem: null,
  projectName: '',
  projectDescription: '',
  startDate: undefined,
  endDate: undefined,
  timeline: 'flexible',
  budget: { amount: 0, type: 'fixed' },
  contactInfo: { name: '', email: '', phone: '', company: '' },
}

test('loads services on success', async () => {
  server.use(
    rest.get('/api/services', (_, res, ctx) =>
      res(ctx.json([{ id: '1', title: 'IT Consulting', category: 'service' }]))
    )
  )

  render(<ServiceTypeStep formData={baseData} updateFormData={() => {}} />)

  await waitFor(() =>
    expect(screen.getByText('IT Consulting')).toBeInTheDocument()
  )
})

test('shows alert and retries on failure', async () => {
  server.use(rest.get('/api/services', (_, res, ctx) => res(ctx.status(500))))

  render(<ServiceTypeStep formData={baseData} updateFormData={() => {}} />)

  await waitFor(() => screen.getByRole('alert'))
  expect(screen.getByRole('alert')).toBeInTheDocument()

  server.use(
    rest.get('/api/services', (_, res, ctx) =>
      res(ctx.json([{ id: '2', title: 'Cloud Migration', category: 'service' }]))
    )
  )

  screen.getByRole('button', { name: /retry/i }).click()

  await waitFor(() =>
    expect(screen.getByText('Cloud Migration')).toBeInTheDocument()
  )
})
