import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ContactPublisherModal } from '@/components/profile/ContactPublisherModal';
import { vi, expect, test } from 'vitest';
import api from '@/services/apiClient';

vi.mock('@/services/apiClient');

const mockedPost = vi.fn();
(api as any).post = mockedPost;

function setup() {
  render(
    <ContactPublisherModal
      isOpen={true}
      onClose={() => {}}
      publisherName="Alice"
    />
  );
}

test('clicking send posts message once', async () => {
  mockedPost.mockResolvedValue({});
  setup();
  fireEvent.change(screen.getByLabelText('Subject'), { target: { value: 'Hello world' } });
  fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'This is a message long enough to pass validation' } });
  fireEvent.click(screen.getByRole('button', { name: /send message/i }));
  await waitFor(() => expect(mockedPost).toHaveBeenCalledTimes(1));
});
