import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { ChatAssistantTrigger } from './ChatAssistantTrigger';

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  MessageSquare: () => <svg data-testid="message-square-icon" />,
}));

// Mock ChatAssistant: The factory provides the mock implementation.
// We will get a reference to this mock in beforeEach for assertions and interaction.
jest.mock('@/components/ChatAssistant', () => ({
  ChatAssistant: jest.fn(props => {
    // Get the mock function itself (the one Jest is using for ChatAssistant)
    // to attach properties to it for test interaction.
    const ChatAssistantMock = require('@/components/ChatAssistant').ChatAssistant;
    if (props.isOpen) {
      (ChatAssistantMock as any).currentOnClose = props.onClose;
      (ChatAssistantMock as any).currentOnSendMessage = props.onSendMessage;
      return <div data-testid="chat-assistant">Mocked Chat Assistant</div>;
    }
    return null;
  }),
}));

// Mock Button component
jest.mock('@/components/ui/button', () => ({
  Button: jest.fn(({ children, onClick, ...props }: any) => (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  )),
}));

// Mock global fetch
global.fetch = jest.fn();

describe('ChatAssistantTrigger', () => {
  let MockedChatAssistant: jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
    // This ensures MockedChatAssistant is the function Jest is using for the mock.
    MockedChatAssistant = require('@/components/ChatAssistant').ChatAssistant as jest.Mock;
    // Clear any properties attached from previous test runs
    (MockedChatAssistant as any).currentOnClose = null;
    (MockedChatAssistant as any).currentOnSendMessage = null;
  });

  it('should render the trigger button and no ChatAssistant initially', () => {
    render(<ChatAssistantTrigger />);
    expect(screen.getByRole('button', { name: /open chat assistant/i })).toBeInTheDocument();
    expect(screen.getByTestId('message-square-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('chat-assistant')).not.toBeInTheDocument();
  });

  it('should open ChatAssistant when trigger button is clicked', () => {
    render(<ChatAssistantTrigger />);
    const triggerButton = screen.getByRole('button', { name: /open chat assistant/i });
    fireEvent.click(triggerButton);

    expect(screen.getByTestId('chat-assistant')).toBeInTheDocument();
    expect(MockedChatAssistant).toHaveBeenCalledWith(
      expect.objectContaining({
        isOpen: true,
        recipient: expect.objectContaining({ name: 'AI Assistant' }),
      }),
      expect.anything()
    );
  });

  it('should close ChatAssistant when its onClose prop is called', () => {
    render(<ChatAssistantTrigger />);
    const triggerButton = screen.getByRole('button', { name: /open chat assistant/i });
    fireEvent.click(triggerButton);

    expect(screen.getByTestId('chat-assistant')).toBeInTheDocument();

    const onCloseCallback = (MockedChatAssistant as any).currentOnClose;
    expect(onCloseCallback).toBeInstanceOf(Function);
    if (onCloseCallback) {
      act(() => {
        onCloseCallback();
      });
    }

    expect(screen.queryByTestId('chat-assistant')).not.toBeInTheDocument();
  });

  it('handleSendMessage should call fetch with correct parameters on success', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ reply: 'AI response' }),
    });

    render(<ChatAssistantTrigger />);
    fireEvent.click(screen.getByRole('button', { name: /open chat assistant/i }));

    await waitFor(() => expect(MockedChatAssistant).toHaveBeenCalled());

    const testMessage = "Hello AI";
    const onSendMessageCallback = (MockedChatAssistant as any).currentOnSendMessage;
    expect(onSendMessageCallback).toBeInstanceOf(Function);

    if (onSendMessageCallback) {
      await onSendMessageCallback(testMessage);
    }

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      'https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat',
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [{ role: 'user', content: testMessage }] }),
      })
    );
  });

  it('handleSendMessage should handle fetch error gracefully', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 500,
    });

    render(<ChatAssistantTrigger />);
    fireEvent.click(screen.getByRole('button', { name: /open chat assistant/i }));

    await waitFor(() => expect(MockedChatAssistant).toHaveBeenCalled());

    const testMessage = "Test error";
    const onSendMessageCallback = (MockedChatAssistant as any).currentOnSendMessage;
    expect(onSendMessageCallback).toBeInstanceOf(Function);

    if (onSendMessageCallback) {
      await onSendMessageCallback(testMessage);
    }

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(consoleErrorSpy).toHaveBeenCalledWith("Error in AI chat:", new Error("Failed to get response from AI assistant"));
    consoleErrorSpy.mockRestore();
  });
});
