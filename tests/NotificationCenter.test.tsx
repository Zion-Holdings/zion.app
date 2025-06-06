import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { NotificationCenter } from '@/components/NotificationCenter';
import { useNotifications } from '@/context/notifications/NotificationContext';
import { useEnqueueSnackbar } from '@/context';

jest.mock('@/context/notifications/NotificationContext');
jest.mock('@/context', () => ({
  useEnqueueSnackbar: jest.fn()
}));

const mockUseNotifications = useNotifications as jest.Mock;
const mockEnqueue = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
  mockUseNotifications.mockReturnValue({
    filteredNotifications: [],
    unreadCount: 0,
    markAsRead: jest.fn(),
    markAllAsRead: jest.fn(),
    dismissNotification: jest.fn(),
    loading: false,
    filter: 'all',
    setFilter: jest.fn(),
    fetchNotifications: jest.fn().mockResolvedValue(undefined),
  });
  (useEnqueueSnackbar as jest.Mock).mockReturnValue(mockEnqueue);
});

test('opening dropdown does not show error toast', async () => {
  render(<NotificationCenter />);

  const trigger = screen.getByLabelText('Open notifications');
  fireEvent.click(trigger);

  await waitFor(() => {
    expect(mockUseNotifications().fetchNotifications).toHaveBeenCalled();
  });

  expect(mockEnqueue).not.toHaveBeenCalled();
});
