import { toast } from '@/hooks/use-toast';
import { toast as sonnerToast } from 'sonner';
import React from 'react';

// Mock sonner
vi.mock('sonner', () => ({
  toast: {
    error: vi.fn(),
    success: vi.fn(),
    info: vi.fn(),
    warning: vi.fn(),
    loading: vi.fn(),
    custom: vi.fn(),
    dismiss: vi.fn(),
  },
}));

// Mock logError as it's called by the destructive toast
vi.mock('@/utils/logError', () => ({
  logError: vi.fn(() => 'mocked-trace-id'),
}));

describe('useToast', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Reset the deduplication internal state for each test
    toast.dismiss(); // Clears sonner's internal state if any, effectively resetting lastKey/lastShown for shouldShow
    const now = Date.now();
    (toast as any).lastKey = ''; // Directly reset internal state if possible, or re-initialize module
    (toast as any).lastShown = 0;
  });

  it('should call sonnerToast.error with a Retry button when onRetry is provided for destructive variant', () => {
    const mockOnRetry = vi.fn();
    const title = 'Error Title';
    const description = 'Something went wrong.';

    toast({
      variant: 'destructive',
      title,
      description,
      onRetry: mockOnRetry,
    });

    expect(sonnerToast.error).toHaveBeenCalledTimes(1);
    const [message, options] = (sonnerToast.error as vi.Mock).mock.calls[0];

    expect(message).toBe(`${title} (Trace ID: mocked-trace-id)`); // or description if title is not provided
    expect(options).toBeDefined();
    expect(options.action).toBeDefined();
    expect(options.action.type).toBe('button');
    expect(options.action.props.children).toBe('Retry');

    // Simulate clicking the retry button
    options.action.props.onClick();
    expect(mockOnRetry).toHaveBeenCalledTimes(1);
  });

  it('should call sonnerToast.error without a custom Retry button if onRetry is not provided', () => {
    const title = 'Another Error';
    toast({
      variant: 'destructive',
      title,
    });

    expect(sonnerToast.error).toHaveBeenCalledTimes(1);
    const [message, options] = (sonnerToast.error as vi.Mock).mock.calls[0];
    expect(message).toBe(`${title} (Trace ID: mocked-trace-id)`);
    expect(options.action).toBeUndefined(); // No generic action or retry
  });

   it('should call sonnerToast.error with a generic action when action prop is provided and onRetry is not', () => {
    const mockActionOnClick = vi.fn();
    const title = 'Error With Generic Action';
    const actionLabel = 'Custom Action';

    toast({
      variant: 'destructive',
      title,
      action: { label: actionLabel, onClick: mockActionOnClick },
    });

    expect(sonnerToast.error).toHaveBeenCalledTimes(1);
    const [message, options] = (sonnerToast.error as vi.Mock).mock.calls[0];

    expect(message).toBe(`${title} (Trace ID: mocked-trace-id)`);
    expect(options).toBeDefined();
    expect(options.action).toBeDefined();
    expect(options.action.type).toBe('button');
    expect(options.action.props.children).toBe(actionLabel);

    // Simulate clicking the action button
    options.action.props.onClick();
    expect(mockActionOnClick).toHaveBeenCalledTimes(1);
  });

  it('should prioritize onRetry over generic action for destructive toasts', () => {
    const mockOnRetry = vi.fn();
    const mockActionOnClick = vi.fn();
    const title = 'Error With Both Actions';
    const actionLabel = 'Generic Action';

    toast({
      variant: 'destructive',
      title,
      action: { label: actionLabel, onClick: mockActionOnClick },
      onRetry: mockOnRetry,
    });

    expect(sonnerToast.error).toHaveBeenCalledTimes(1);
    const [message, options] = (sonnerToast.error as vi.Mock).mock.calls[0];

    expect(message).toBe(`${title} (Trace ID: mocked-trace-id)`);
    expect(options).toBeDefined();
    expect(options.action).toBeDefined();
    expect(options.action.type).toBe('button');
    expect(options.action.props.children).toBe('Retry'); // onRetry should take precedence

    // Simulate clicking the retry button
    options.action.props.onClick();
    expect(mockOnRetry).toHaveBeenCalledTimes(1);
    expect(mockActionOnClick).not.toHaveBeenCalled(); // Generic action should not be called
  });

  // Test deduplication logic
  it('should not show identical toasts rapidly', () => {
    const title = "Unique Error Message for Dedupe Test";
    toast({ title, variant: 'destructive' });
    expect(sonnerToast.error).toHaveBeenCalledTimes(1);

    // Try to show the same toast again immediately
    toast({ title, variant: 'destructive' });
    expect(sonnerToast.error).toHaveBeenCalledTimes(1); // Should still be 1 due to deduplication

    // Advance time by more than DEDUPE_DELAY (3000ms)
    vi.advanceTimersByTime(3100);

    toast({ title, variant: 'destructive' });
    expect(sonnerToast.error).toHaveBeenCalledTimes(2); // Should now be 2
  });

  it('should show different toasts even if rapid', () => {
    toast({ title: "Error 1", variant: 'destructive' });
    expect(sonnerToast.error).toHaveBeenCalledTimes(1);

    toast({ title: "Error 2", variant: 'destructive' });
    expect(sonnerToast.error).toHaveBeenCalledTimes(2); // Should be 2 as messages are different
  });
});

// Setup timers for deduplication tests
beforeAll(() => {
  vi.useFakeTimers();
});

afterAll(() => {
  vi.useRealTimers();
});
