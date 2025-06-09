import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { ChatWidget } from './ChatWidget';

// Mock @/hooks/useAuth
const mockUseAuth = jest.fn();
jest.mock('@/hooks/useAuth', () => ({
  useAuth: () => mockUseAuth(),
}));

// Mock @/components/messaging/MessageBubble
// The mock implementation is defined inline in the factory.
// A reference to this mock will be obtained in beforeEach.
jest.mock('@/components/messaging/MessageBubble', () => ({
  MessageBubble: jest.fn(props => (
    <div data-testid="message-bubble" data-isusermessage={props.isUserMessage}>
      {props.message.content}
    </div>
  )),
}));

// Mock @/components/ui/button
jest.mock('@/components/ui/button', () => ({
  Button: jest.fn(({ children, onClick, disabled, ...props }: any) => (
    <button onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  )),
}));

// Mock socket.io-client
const mockSocketOn = jest.fn();
const mockSocketEmit = jest.fn();
const mockSocketDisconnect = jest.fn();
const mockSocketInstance = {
  on: mockSocketOn,
  emit: mockSocketEmit,
  disconnect: mockSocketDisconnect,
  connected: true,
};
const mockIo = jest.fn(() => mockSocketInstance);
jest.mock('socket.io-client', () => ({
  __esModule: true,
  default: mockIo,
}));

// Mock Notification API
const mockShowNotification = jest.fn();
const mockGetRegistration = jest.fn().mockResolvedValue({
  showNotification: mockShowNotification,
});

Object.defineProperty(global, 'Notification', {
  value: {
    permission: 'granted',
    requestPermission: jest.fn().mockResolvedValue('granted'),
  },
  writable: true,
});
Object.defineProperty(global.navigator, 'serviceWorker', {
  value: {
    getRegistration: mockGetRegistration,
  },
  writable: true,
});


describe('ChatWidget', () => {
  const defaultUser = { id: 'user123' };
  const defaultProps = {
    roomId: 'room-abc',
    recipientId: 'recipient456',
    isOpen: true,
    onClose: jest.fn(),
  };

  let MockedMessageBubble: jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
    mockUseAuth.mockReturnValue({ user: defaultUser, loading: false });

    MockedMessageBubble = require('@/components/messaging/MessageBubble').MessageBubble as jest.Mock;

    // Reset socket instance mocks for each test
    mockIo.mockClear().mockReturnValue(mockSocketInstance);
    mockSocketOn.mockClear();
    mockSocketEmit.mockClear();
    mockSocketDisconnect.mockClear();
    (mockSocketInstance as any).connected = true;
  });

  it('renders null if isOpen is false', () => {
    const { container } = render(<ChatWidget {...defaultProps} isOpen={false} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders chat UI if isOpen is true', () => {
    render(<ChatWidget {...defaultProps} />);
    expect(screen.getByText('Chat')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /close chat widget/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
  });

  it('connects to socket, joins room, and listens for messages when opened', async () => {
    render(<ChatWidget {...defaultProps} />);
    await waitFor(() => expect(mockIo).toHaveBeenCalledTimes(1));
    expect(mockIo).toHaveBeenCalledWith({ path: '/api/socket', transports: ['websocket'] });
    expect(mockSocketEmit).toHaveBeenCalledWith('join-room', defaultProps.roomId);
    expect(mockSocketOn).toHaveBeenCalledWith('receive-message', expect.any(Function));
  });

  it('disconnects socket when isOpen becomes false or component unmounts', async () => {
    const { unmount, rerender } = render(<ChatWidget {...defaultProps} />);
    await waitFor(() => expect(mockIo).toHaveBeenCalledTimes(1));
    mockSocketDisconnect.mockClear();

    rerender(<ChatWidget {...defaultProps} isOpen={false} />);
    expect(mockSocketDisconnect).toHaveBeenCalledTimes(1);

    const newSocketInstanceForUnmountTest = { ...mockSocketInstance, disconnect: jest.fn() };
    mockIo.mockReturnValueOnce(newSocketInstanceForUnmountTest);
    rerender(<ChatWidget {...defaultProps} isOpen={true} />);
    await waitFor(() => expect(mockIo).toHaveBeenCalledTimes(2)); // ensure new socket was created
    unmount();
    expect(newSocketInstanceForUnmountTest.disconnect).toHaveBeenCalledTimes(1);
  });

  it('handles sending a message', async () => {
    mockUseAuth.mockReturnValue({ user: { id: 'user123' } as any, loading: false });
    render(<ChatWidget {...defaultProps} />);
    await waitFor(() => expect(mockIo).toHaveBeenCalled());

    const textarea = screen.getByRole('textbox');
    const sendButton = screen.getByRole('button', { name: /send/i });

    expect(sendButton).toBeDisabled();

    fireEvent.change(textarea, { target: { value: 'Hello there' } });
    expect(sendButton).not.toBeDisabled();

    fireEvent.click(sendButton);

    await waitFor(() => expect(screen.getByText('Hello there')).toBeInTheDocument());
    expect(MockedMessageBubble).toHaveBeenCalledWith(
      expect.objectContaining({
        message: expect.objectContaining({ content: 'Hello there', sender_id: 'user123' }),
        isUserMessage: true,
      }),
      expect.anything()
    );
    expect(textarea).toHaveValue('');

    expect(mockSocketEmit).toHaveBeenCalledWith('send-message', {
      roomId: defaultProps.roomId,
      message: expect.objectContaining({
        content: 'Hello there',
        sender_id: 'user123',
        recipient_id: defaultProps.recipientId,
      }),
    });
  });

  it('does not send message or optimistically update if user is not authenticated', async () => {
    mockUseAuth.mockReturnValue({ user: null, loading: false });
    render(<ChatWidget {...defaultProps} />);
    await waitFor(() => expect(mockIo).toHaveBeenCalled());

    const textarea = screen.getByRole('textbox');
    const sendButton = screen.getByRole('button', { name: /send/i });
    fireEvent.change(textarea, { target: { value: 'Anonymous message' } });
    fireEvent.click(sendButton);

    expect(mockSocketEmit).not.toHaveBeenCalledWith('send-message', expect.anything());
    // Check that MessageBubble was not called with this message
    expect(MockedMessageBubble).not.toHaveBeenCalledWith(
      expect.objectContaining({
        message: expect.objectContaining({ content: 'Anonymous message' })
      }),
      expect.anything()
    );
    expect(textarea).toHaveValue('Anonymous message');
  });

  it('receives and displays a message from socket and triggers notification', async () => {
    render(<ChatWidget {...defaultProps} />);
    await waitFor(() => expect(mockIo).toHaveBeenCalled());

    let receiveMessageHandler: (msg: any) => void = () => {};
    const onCall = mockSocketOn.mock.calls.find(call => call[0] === 'receive-message');
    if (onCall && typeof onCall[1] === 'function') {
      receiveMessageHandler = onCall[1];
    } else {
      throw new Error("receive-message handler not registered by socket mock");
    }

    const incomingMessage = {
      id: 'msg2',
      sender_id: 'recipient456',
      recipient_id: 'user123',
      content: 'Reply from recipient',
      created_at: new Date().toISOString(),
    };

    act(() => {
      receiveMessageHandler(incomingMessage);
    });

    await waitFor(() => {
      expect(screen.getByText('Reply from recipient')).toBeInTheDocument();
    });
    expect(MockedMessageBubble).toHaveBeenCalledWith(
      expect.objectContaining({
        message: incomingMessage,
        isUserMessage: false,
      }),
      expect.anything()
    );
    expect(mockShowNotification).toHaveBeenCalledWith('New message', { body: 'Reply from recipient' });
  });

  it('calls onClose when close button is clicked', () => {
    render(<ChatWidget {...defaultProps} />);
    const closeButton = screen.getByRole('button', { name: /close chat widget/i });
    fireEvent.click(closeButton);
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });
});
