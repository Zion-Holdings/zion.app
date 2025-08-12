import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import { ChatAssistant, Message } from '../ChatAssistant';
import { AuthContext } from '../../../context/auth/AuthContext';
import * as UseLocalStorageHook from '../../../hooks/useLocalStorage';
import * as UseDebounceHook from '../../../hooks/useDebounce'; // Assuming path
import Image from 'next/image'; // Import next/image

// Mock dependencies
vi.mock('../../../hooks/useLocalStorage');
vi.mock('../../../hooks/useDebounce');

// Mock UI sub-components if they cause issues or to simplify tests
vi.mock('@/components/ui/avatar', () => ({
  Avatar: ({ children }: { children: React.ReactNode }) => <div data-testid="avatar">{children}</div>,
  AvatarImage: ({ src, alt }: { src?: string, alt?: string }) => (
    <Image src={src || '/default-avatar.png'} alt={alt || 'avatar'} width={40} height={40} data-testid="avatar-image" />
  ),
  AvatarFallback: ({ children }: { children: React.ReactNode }) => <div data-testid="avatar-fallback">{children}</div>,
}));
vi.mock('@/components/ui/button', () => ({
  Button: ({ children, onClick, variant, size, className }: { children: React.ReactNode, onClick?: () => void, variant?: string, size?: string, className?: string }) => (
    <button onClick={onClick} data-variant={variant} data-size={size} className={className}>
      {children}
    </button>
  ),
}));
vi.mock('../ChatMessage', () => ({
  ChatMessage: ({ role, message }: { role: string, message: string }) => (
    <div data-testid={`chat-message-${role}`}>{message}</div>
  ),
}));
vi.mock('../ChatInput', () => ({
  ChatInput: ({ onSend }: { onSend: (message: string) => void }) => (
    <input type="text" data-testid="chat-input" onChange={(e) => e.target.value} onKeyDown={(e) => { if (e.key === 'Enter') onSend((e.target as HTMLInputElement).value); }} />
  ),
}));


const mockRecipient = {
  id: 'recipient123',
  name: 'Test Recipient',
  avatarUrl: 'http://example.com/avatar.png',
  role: 'Tester',
};

const mockOnSendMessage = vi.fn();

// Default mock implementations
const mockUseLocalStorage = UseLocalStorageHook.useLocalStorage as unknown as vi.Mock;
const mockUseDebounce = UseDebounceHook.useDebounce as unknown as vi.Mock;

// Helper to provide context
const renderWithAuth = (ui: React.ReactElement, { providerProps, ...renderOptions }: { providerProps: any, [key: string]: any }) => {
  return render(
    <AuthContext.Provider value={providerProps}>{ui}</AuthContext.Provider>,
    renderOptions
  );
};

describe('ChatAssistant', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Default debounce mock: returns value immediately for most tests unless timers are used
    mockUseDebounce.mockImplementation((value, delay) => value);
    // Default localStorage mock: basic pass-through or specific setup per test
    mockUseLocalStorage.mockReturnValue([[], vi.fn()]);
  });

  describe('Debounce Functionality', () => {
    beforeEach(() => {
      vi.useFakeTimers();
      // For debounce tests, we need useDebounce to respect timers
      mockUseDebounce.mockImplementation((value, delay) => {
        const [debouncedValue, setDebouncedValue] = React.useState(null);
        React.useEffect(() => {
          if (value === null || value === undefined) { // Handle initial null/undefined state if necessary
            setDebouncedValue(null);
            return;
          }
          const handler = setTimeout(() => {
            setDebouncedValue(value);
          }, delay);
          return () => {
            clearTimeout(handler);
          };
        }, [value, delay]);
        return debouncedValue;
      });
    });

    afterEach(() => {
      vi.runOnlyPendingTimers();
      vi.useRealTimers();
    });

    test('onSendMessage is called only once after multiple rapid inputs within debounce window', async () => {
      const authProviderProps = { isAuthenticated: true, user: { id: 'user1' }, isLoading: false };
      renderWithAuth(
        <ChatAssistant
          isOpen={true}
          onClose={vi.fn()}
          recipient={mockRecipient}
          onSendMessage={mockOnSendMessage}
          initialMessages={[]}
        />,
        { providerProps: authProviderProps }
      );

      const chatInput = screen.getByTestId('chat-input') as HTMLInputElement;

      fireEvent.change(chatInput, { target: { value: 'Message 1' } });
      fireEvent.keyDown(chatInput, { key: 'Enter', code: 'Enter' });

      fireEvent.change(chatInput, { target: { value: 'Message 2' } });
      fireEvent.keyDown(chatInput, { key: 'Enter', code: 'Enter' });

      fireEvent.change(chatInput, { target: { value: 'Message 3' } });
      fireEvent.keyDown(chatInput, { key: 'Enter', code: 'Enter' });

      expect(mockOnSendMessage).not.toHaveBeenCalled();

      act(() => {
        vi.advanceTimersByTime(3000);
      });

      await waitFor(() => {
        expect(mockOnSendMessage).toHaveBeenCalledTimes(1);
      });
      // It should send the last message
      expect(mockOnSendMessage).toHaveBeenCalledWith('Message 3', undefined);
    });

    test('onSendMessage is called after the 3-second delay', async () => {
        const authProviderProps = { isAuthenticated: true, user: { id: 'user1' }, isLoading: false };
        renderWithAuth(
          <ChatAssistant
            isOpen={true}
            onClose={vi.fn()}
            recipient={mockRecipient}
            onSendMessage={mockOnSendMessage}
            initialMessages={[]}
          />,
          { providerProps: authProviderProps }
        );

        const chatInput = screen.getByTestId('chat-input') as HTMLInputElement;
        fireEvent.change(chatInput, { target: { value: 'Test Message' } });
        fireEvent.keyDown(chatInput, { key: 'Enter', code: 'Enter' });

        expect(mockOnSendMessage).not.toHaveBeenCalled();

        act(() => {
          vi.advanceTimersByTime(2999);
        });
        expect(mockOnSendMessage).not.toHaveBeenCalled();

        act(() => {
          vi.advanceTimersByTime(1);
        });

        await waitFor(() => {
          expect(mockOnSendMessage).toHaveBeenCalledTimes(1);
        });
        expect(mockOnSendMessage).toHaveBeenCalledWith('Test Message', undefined);
      });
  });

  describe('Guest Preview Modal', () => {
    const guestAuthProviderProps = { isAuthenticated: false, user: null, isLoading: false };

    test('shows preview modal when guest user tries to send a message', () => {
      renderWithAuth(
        <ChatAssistant
          isOpen={true}
          onClose={vi.fn()}
          recipient={mockRecipient}
          onSendMessage={mockOnSendMessage}
        />,
        { providerProps: guestAuthProviderProps }
      );

      const chatInput = screen.getByTestId('chat-input') as HTMLInputElement;
      fireEvent.change(chatInput, { target: { value: 'Guest Message' } });
      fireEvent.keyDown(chatInput, { key: 'Enter', code: 'Enter' });

      expect(screen.getByText('Confirm Message')).toBeInTheDocument();
      expect(screen.getByText('Guest Message')).toBeInTheDocument();
    });

    test('calls onSendMessage when "Send" is clicked in modal', async () => {
      renderWithAuth(
        <ChatAssistant
          isOpen={true}
          onClose={vi.fn()}
          recipient={mockRecipient}
          onSendMessage={mockOnSendMessage}
        />,
        { providerProps: guestAuthProviderProps }
      );

      const chatInput = screen.getByTestId('chat-input') as HTMLInputElement;
      fireEvent.change(chatInput, { target: { value: 'Guest Send' } });
      fireEvent.keyDown(chatInput, { key: 'Enter', code: 'Enter' });

      fireEvent.click(screen.getByText('Send'));

      // Debounce logic is still in play
      act(() => { vi.advanceTimersByTime(3000); });

      await waitFor(() => {
        expect(mockOnSendMessage).toHaveBeenCalledWith('Guest Send', undefined);
      });
      expect(screen.queryByText('Confirm Message')).not.toBeInTheDocument();
    });

    test('does not call onSendMessage and closes modal when "Cancel" is clicked', () => {
      renderWithAuth(
        <ChatAssistant
          isOpen={true}
          onClose={vi.fn()}
          recipient={mockRecipient}
          onSendMessage={mockOnSendMessage}
        />,
        { providerProps: guestAuthProviderProps }
      );

      const chatInput = screen.getByTestId('chat-input') as HTMLInputElement;
      fireEvent.change(chatInput, { target: { value: 'Guest Cancel' } });
      fireEvent.keyDown(chatInput, { key: 'Enter', code: 'Enter' });

      fireEvent.click(screen.getByText('Cancel'));

      act(() => { vi.advanceTimersByTime(3000); }); // Advance timers just in case

      expect(mockOnSendMessage).not.toHaveBeenCalled();
      expect(screen.queryByText('Confirm Message')).not.toBeInTheDocument();
    });
  });

  describe('Guest Chat History Persistence', () => {
    const guestAuthProviderProps = { isAuthenticated: false, user: null, isLoading: false };
    const localStorageKey = `chatHistory-${mockRecipient.id}`;
    let mockSetStoredValue: vi.Mock;

    beforeEach(() => {
      mockSetStoredValue = vi.fn();
      // Reset to a version of useLocalStorage that uses the mockSetStoredValue for set
      mockUseLocalStorage.mockImplementation((key, initialValue) => {
        // Simulate initial load: if initialValue from prop is present, use it, else use what test provides for "stored"
        const [storedValue, setReactStateValue] = React.useState(initialValue);
        return [storedValue, mockSetStoredValue];
      });
    });

    test('saves message to localStorage when guest sends a message', async () => {
      const initialStoredMessages: Message[] = [];
      mockUseLocalStorage.mockImplementation((key, defaultVal) => {
        const [val, setVal] = React.useState<Message[]>(defaultVal.length > 0 ? defaultVal : initialStoredMessages);
        const setAndPersist = (newValue: Message[] | ((v: Message[]) => Message[])) => {
          const newV = typeof newValue === 'function' ? (newValue as (v: Message[]) => Message[])(val) : newValue;
          setVal(newV);
          mockSetStoredValue(newV); // this mockSetStoredValue is for assertion
        };
        return [val, setAndPersist];
      });

      renderWithAuth(
        <ChatAssistant
          isOpen={true}
          onClose={vi.fn()}
          recipient={mockRecipient}
          onSendMessage={mockOnSendMessage}
        />,
        { providerProps: guestAuthProviderProps }
      );

      const chatInput = screen.getByTestId('chat-input') as HTMLInputElement;
      fireEvent.change(chatInput, { target: { value: 'Persist This' } });
      fireEvent.keyDown(chatInput, { key: 'Enter', code: 'Enter' });
      fireEvent.click(screen.getByText('Send')); // Confirm in modal

      // The message is added to currentMessages, which then should be persisted
      await waitFor(() => {
        expect(mockSetStoredValue).toHaveBeenCalled();
      });
      const lastCall = mockSetStoredValue.mock.calls[mockSetStoredValue.mock.calls.length - 1][0];
      expect(lastCall).toEqual(expect.arrayContaining([
        expect.objectContaining({ message: 'Persist This', role: 'user' })
      ]));
    });

    test('displays messages from localStorage when component mounts for a guest', () => {
      const messagesFromStorage: Message[] = [
        { id: '1', role: 'user', message: 'Old Message 1', timestamp: new Date() },
        { id: '2', role: 'assistant', message: 'Old Reply 1', timestamp: new Date() },
      ];
      // Mock useLocalStorage to return these messages on initial load
      mockUseLocalStorage.mockReturnValue([messagesFromStorage, mockSetStoredValue]);

      renderWithAuth(
        <ChatAssistant
          isOpen={true}
          onClose={vi.fn()}
          recipient={mockRecipient}
          onSendMessage={mockOnSendMessage}
        />,
        { providerProps: guestAuthProviderProps }
      );

      expect(screen.getByText('Old Message 1')).toBeInTheDocument();
      expect(screen.getByText('Old Reply 1')).toBeInTheDocument();
    });

    test('initialMessages prop takes precedence over localStorage for guest user', () => {
      const messagesFromStorage: Message[] = [
        { id: 'ls1', role: 'user', message: 'From Local Storage', timestamp: new Date() },
      ];
      const messagesFromProp: Message[] = [
        { id: 'prop1', role: 'user', message: 'From Prop', timestamp: new Date() },
      ];

      // Mock useLocalStorage to return messagesFromStorage initially
      // The component's useEffect for initialMessages should then overwrite this
      mockUseLocalStorage.mockImplementation((key, defaultVal) => {
        // initialMessages prop takes precedence logic is handled inside ChatAssistant's useEffect
        // This mock just needs to provide a value and a setter.
        // The key part is what `storedGuestMessages` is initially.
        const [val, setVal] = React.useState<Message[]>(messagesFromStorage);
        const setAndPersist = (newValue: Message[] | ((v: Message[]) => Message[])) => {
          const newV = typeof newValue === 'function' ? (newValue as (v: Message[]) => Message[])(val) : newValue;
          setVal(newV);
          mockSetStoredValue(newV);
        };
        return [val, setAndPersist];
      });

      renderWithAuth(
        <ChatAssistant
          isOpen={true}
          onClose={vi.fn()}
          recipient={mockRecipient}
          onSendMessage={mockOnSendMessage}
          initialMessages={messagesFromProp} // These should take precedence
        />,
        { providerProps: guestAuthProviderProps }
      );

      expect(screen.getByText('From Prop')).toBeInTheDocument();
      expect(screen.queryByText('From Local Storage')).not.toBeInTheDocument();

      // And it should have updated localStorage with the prop's messages
      expect(mockSetStoredValue).toHaveBeenCalledWith(messagesFromProp);
    });
  });
});
