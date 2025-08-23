import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ContactPublisherModal } from '@/components/profile/ContactPublisherModal';
import { vi } from 'vitest';
import * as toastHook from '@/hooks/use-toast';
vi.mock('@/hooks/useAuth', () => ({ useAuth: () => ({ user: { id: '1' } }) }));

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

beforeEach(() => {
  vi.clearAllMocks();
  postMock.mockResolvedValue({});
});

test('successful send closes modal and shows toast', async () => {
  render(<ContactPublisherModal {...defaultProps} />);

  fireEvent.input(screen.getByLabelText(/subject/i), {
    target: { value: 'Hello World' },
  });
  fireEvent.input(screen.getByLabelText(/message/i), {
    target: { value: 'This is a test message that is definitely long enough.' },
  });

  fireEvent.click(screen.getByRole('button', { name: /send message/i }));

  await waitFor(() => expect(postMock).toHaveBeenCalledTimes(1));
  expect(postMock).toHaveBeenCalledWith('/api/messages', {
    productId: '123',
    subject: 'Hello World',
    body: 'This is a test message that is definitely long enough.',
    fromUser: '1'
  });
  expect(toastHook.toast.success).toHaveBeenCalledWith('Message sent');
  expect(defaultProps.onClose).toHaveBeenCalled();
});

test('shows toast when send fails', async () => {
  postMock.mockRejectedValueOnce({ message: 'Bad' });

  render(<ContactPublisherModal {...defaultProps} />);

  fireEvent.input(screen.getByLabelText(/subject/i), {
    target: { value: 'Hello World' },
  });
  fireEvent.input(screen.getByLabelText(/message/i), {
    target: { value: 'This is a test message that is definitely long enough.' },
  });

  fireEvent.click(screen.getByRole('button', { name: /send message/i }));

  await waitFor(() => expect(toastHook.toast.error).toHaveBeenCalledWith('Bad'));
});
