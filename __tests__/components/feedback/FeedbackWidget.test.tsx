import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { FeedbackProvider } from '@/context/FeedbackContext';
import { FeedbackWidget } from '@/components/feedback/FeedbackWidget';

function TestRoutes() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/marketplace')}>Go</button>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/marketplace" element={<div>Marketplace</div>} />
      </Routes>
    </div>
  );
}

test('rating persists after navigation', async () => {
  const user = userEvent.setup();
  render(
    <FeedbackProvider>
      <MemoryRouter initialEntries={["/"]}>
        <TestRoutes />
        <FeedbackWidget />
      </MemoryRouter>
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
