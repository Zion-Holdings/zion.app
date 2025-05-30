import { render, screen, fireEvent } from '@testing-library/react';
import { ContactPublisherModal } from '@/components/profile/ContactPublisherModal';
import { vi } from 'vitest';

vi.mock('@/hooks/use-toast', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

const postMock = vi.fn();
vi.mock('@/services/apiClient', () => ({
  default: { post: postMock },
}));

const defaultProps = {
  isOpen: true,
  onClose: vi.fn(),
  publisherName: 'Test Publisher',
  publisherEmail: 'pub@example.com',
  productId: '123',
};

test('clicking send posts message once', async () => {
  render(<ContactPublisherModal {...defaultProps} />);

  fireEvent.input(screen.getByLabelText(/subject/i), {
    target: { value: 'Hello World' },
  });
  fireEvent.input(screen.getByLabelText(/message/i), {
    target: { value: 'This is a test message that is definitely long enough.' },
  });

  fireEvent.click(screen.getByRole('button', { name: /send message/i }));

  expect(postMock).toHaveBeenCalledTimes(1);
});
