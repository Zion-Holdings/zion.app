import React from 'react';
import { render, screen } from '@testing-library/react';
import ServiceCard from '../ServiceCard';
import { Service } from '../../../utils/types/service';

describe('ServiceCard', () => {
  const service: Service = {
    id: '1',
    title: 'Test Service',
    providerName: 'Test Provider',
    category: 'Test Category',
    price: { from: 100, currency: 'USD', type: 'fixed' },
    rating: 4.5,
    reviewCount: 10,
    aiScore: 95,
    location: 'Test Location',
    deliveryTime: '2 days',
    specialties: ['Test', 'Driven', 'Development'],
    description: 'This is a test service.',
  };

  it('renders the service title', () => {
    render(<ServiceCard service={service} onRequestQuote={() => {}} />);
    expect(screen.getByText('Test Service')).toBeInTheDocument();
  });
});
