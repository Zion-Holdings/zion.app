import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Routes, Route, Link } from 'react-router-dom';
import { RouterWrapper } from '@/components/RouterWrapper';

function TestApp() {
  return (
    <RouterWrapper>
      <Routes>
        <Route path="/" element={<Link to="/about">About</Link>} />
        <Route path="/about" element={<div>About Page</div>} />
      </Routes>
    </RouterWrapper>
  );
}

test('navigates between routes using RouterWrapper', async () => {
  render(<TestApp />);
  await userEvent.click(screen.getByText('About'));
  expect(screen.getByText('About Page')).toBeInTheDocument();
});
