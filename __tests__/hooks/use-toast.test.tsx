import { toast } from '@/hooks/use-toast';
// Removed unused imports: sonnerToastImport, React

// Mock sonner
jest.mock('sonner', () => ({ // Changed vi.mock to jest.mock
  toast: {
    error: jest.fn(), // Changed vi.fn to jest.fn
    success: jest.fn(), // Changed vi.fn to jest.fn
    info: jest.fn(), // Changed vi.fn to jest.fn
    warning: jest.fn(), // Changed vi.fn to jest.fn
    loading: jest.fn(), // Changed vi.fn to jest.fn
    custom: jest.fn(), // Changed vi.fn to jest.fn
    dismiss: jest.fn(), // Changed vi.fn to jest.fn
  },
}));

// Mock logError as it's called by the destructive toast
jest.mock('@/utils/logError', () => ({ // Changed vi.mock to jest.mock
  logError: jest.fn(() => 'mocked-trace-id'), // Changed vi.fn to jest.fn
}));

describe('useToast', () => {
  const sonnerToast = jest.requireMock('sonner').toast as { // Use renamed import for requireMock
    error: jest.Mock;
    success: jest.Mock;
    info: jest.Mock;
    warning: jest.Mock;
    loading: jest.Mock;
    custom: jest.Mock;
    dismiss: jest.Mock;
  };


  beforeEach(() => {
    jest.clearAllMocks(); // Changed vi.clearAllMocks to jest.clearAllMocks
    // Reset the deduplication internal state for each test
    toast.dismiss(); // Clears sonner's internal state if any, effectively resetting lastKey/lastShown for shouldShow
    // const now = Date.now(); // Date.now() is already mocked by fake timers
    (toast as any).lastKey = '';
    (toast as any).lastShown = 0;
  });

  it('should call sonnerToast.error with a Retry button when onRetry is provided for destructive variant', () => {
    const mockOnRetry = jest.fn(); // Changed vi.fn to jest.fn
    const title = 'Error Title';
    const description = 'Something went wrong.';

    toast({
      variant: 'destructive',
      title,
      description,
      onRetry: mockOnRetry,
    });

    expect(sonnerToast.error).toHaveBeenCalledTimes(1);
    const [message, options] = (sonnerToast.error as jest.Mock).mock.calls[0]; // Changed vi.Mock to jest.Mock

    expect(message).toBe(`${title} (Trace ID: mocked-trace-id)`);
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
    const [message, options] = (sonnerToast.error as jest.Mock).mock.calls[0]; // Changed vi.Mock to jest.Mock
    expect(message).toBe(`${title} (Trace ID: mocked-trace-id)`);
    expect(options.action).toBeUndefined();
  });

   it('should call sonnerToast.error with a generic action when action prop is provided and onRetry is not', () => {
    const mockActionOnClick = jest.fn(); // Changed vi.fn to jest.fn
    const title = 'Error With Generic Action';
    const actionLabel = 'Custom Action';

    toast({
      variant: 'destructive',
      title,
      action: { label: actionLabel, onClick: mockActionOnClick },
    });

    expect(sonnerToast.error).toHaveBeenCalledTimes(1);
    const [message, options] = (sonnerToast.error as jest.Mock).mock.calls[0]; // Changed vi.Mock to jest.Mock

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
    const mockOnRetry = jest.fn(); // Changed vi.fn to jest.fn
    const mockActionOnClick = jest.fn(); // Changed vi.fn to jest.fn
    const title = 'Error With Both Actions';
    const actionLabel = 'Generic Action';

    toast({
      variant: 'destructive',
      title,
      action: { label: actionLabel, onClick: mockActionOnClick },
      onRetry: mockOnRetry,
    });

    expect(sonnerToast.error).toHaveBeenCalledTimes(1);
    const [message, options] = (sonnerToast.error as jest.Mock).mock.calls[0]; // Changed vi.Mock to jest.Mock

    expect(message).toBe(`${title} (Trace ID: mocked-trace-id)`);
    expect(options).toBeDefined();
    expect(options.action).toBeDefined();
    expect(options.action.type).toBe('button');
    expect(options.action.props.children).toBe('Retry');

    // Simulate clicking the retry button
    options.action.props.onClick();
    expect(mockOnRetry).toHaveBeenCalledTimes(1);
    expect(mockActionOnClick).not.toHaveBeenCalled();
  });

  // Test deduplication logic
  it('should not show identical toasts rapidly', () => {
    const title = "Unique Error Message for Dedupe Test";
    toast({ title, variant: 'destructive' });
    expect(sonnerToast.error).toHaveBeenCalledTimes(1);

    // Try to show the same toast again immediately
    toast({ title, variant: 'destructive' });
    expect(sonnerToast.error).toHaveBeenCalledTimes(1);

    // Advance time by more than DEDUPE_DELAY (3000ms)
    jest.advanceTimersByTime(3100); // Changed vi.advanceTimersByTime to jest.advanceTimersByTime

    toast({ title, variant: 'destructive' });
    expect(sonnerToast.error).toHaveBeenCalledTimes(2);
  });

  it('should show different toasts even if rapid', () => {
    toast({ title: "Error 1", variant: 'destructive' });
    expect(sonnerToast.error).toHaveBeenCalledTimes(1);

    toast({ title: "Error 2", variant: 'destructive' });
    expect(sonnerToast.error).toHaveBeenCalledTimes(2);
  });
});

// Setup timers for deduplication tests
beforeAll(() => {
  jest.useFakeTimers(); // Changed vi.useFakeTimers to jest.useFakeTimers
});

afterAll(() => {
  jest.useRealTimers(); // Changed vi.useRealTimers to jest.useRealTimers
});
