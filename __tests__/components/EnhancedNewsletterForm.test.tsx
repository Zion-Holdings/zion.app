import { render, screen, fireEvent } from '@testing-library/react';
import { vi, expect, test } from 'vitest';
import { EnhancedNewsletterForm } from '@/components/EnhancedNewsletterForm';
import * as toastHook from '@/hooks/use-toast';

vi.mock('@/hooks/use-toast');

test('submit invalid email shows error toast', () => {
  render(<EnhancedNewsletterForm />);
  fireEvent.change(screen.getByPlaceholderText(/enter your email/i), { target: { value: 'invalid-email' } });
  fireEvent.submit(screen.getByRole('button', { name: /subscribe/i }));
  expect(toastHook.toast.error).toHaveBeenCalledWith('Invalid email');
});
