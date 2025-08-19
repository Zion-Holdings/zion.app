import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ServiceTypeStep } from '@/components/QuoteRequestForm/ServiceTypeStep';
import { QuoteFormData } from '@/types/quotes';

const baseData: QuoteFormData = {
  serviceType: '',
  serviceCategory: '',
  specificItem: null,
  projectName: '',
  projectDescription: '',
  startDate: undefined,
  endDate: undefined,
  timeline: 'flexible',
  budget: { amount: 0, type: 'fixed' },
  contactInfo: { name: '', email: '', phone: '', company: '' },
};

it('shows results when searching services', async () => {
  const data = { ...baseData };
  const updateFormData = (d: Partial<QuoteFormData>) => Object.assign(data, d);

  global.fetch = vi.fn().mockResolvedValue({
    ok: true,
    json: async () => [
      { id: 'service-3', title: 'IT Consulting', category: 'service' },
    ],
  }) as any;

  render(<ServiceTypeStep formData={data} updateFormData={updateFormData} />);

  fireEvent.click(screen.getByText('Services'));

  const input = screen.getByPlaceholderText(/search service/i);
  fireEvent.change(input, { target: { value: 'IT' } });

  await waitFor(() => {
    expect(screen.getAllByRole('button', { name: /request quote/i }).length).toBeGreaterThan(0);
  });
});

