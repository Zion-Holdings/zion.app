import { render, screen, fireEvent } from '@testing-library/react';
import { AIMatchmaker } from '@/components/AIMatchmaker';

it('shows typed text', () => {
  render(<AIMatchmaker />);
  const textarea = screen.getByPlaceholderText(/describe what you need/i);
  fireEvent.change(textarea, { target: { value: 'hello' } });
  expect(screen.getByDisplayValue(/hello/)).toBeVisible();
});
