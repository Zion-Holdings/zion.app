import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { useRouter } from 'next/router';
import { FeedbackProvider } from '@/context/FeedbackContext';
import { FeedbackWidget } from '@/components/feedback/FeedbackWidget';
jest.mock('@/hooks/useAuth', () => ({ useAuth: () => ({ user: null }) }));

function TestRoutes() {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.push('/marketplace')}>Go</button>
      {router.pathname === '/' && <div>Home</div>}
      {router.pathname === '/marketplace' && <div>Marketplace</div>}
    </div>
  );
}

test('rating persists after navigation', async () => {
  const user = userEvent.setup();
  render(
    <FeedbackProvider>
      <MemoryRouterProvider>
        <TestRoutes />
        <FeedbackWidget />
      </MemoryRouterProvider>
    </FeedbackProvider>
  );

  await user.click(screen.getByText('Feedback'));
  const stars = screen.getAllByLabelText(/Rate/);
  await user.click(stars[4]);
  expect(stars.filter(s => s.className.includes('text-yellow-400')).length).toBe(5);

  await user.click(screen.getByText('Go'));
  expect(screen.getByText('Marketplace')).toBeInTheDocument();
  const starsAfter = screen.getAllByLabelText(/Rate/);
  expect(starsAfter.filter(s => s.className.includes('text-yellow-400')).length).toBe(5);
});
