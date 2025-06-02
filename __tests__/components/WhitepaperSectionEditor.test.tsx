import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import WhitepaperSectionEditor from '@/components/WhitepaperSectionEditor';
import { supabase } from '@/integrations/supabase/client'; // To mock its functions

// Mock Supabase client
jest.mock('@/integrations/supabase/client', () => ({
  supabase: {
    functions: {
      invoke: jest.fn(),
    },
  },
}));

// Mock sonner/toast
jest.mock('sonner', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
    info: jest.fn(),
  },
}));

describe('WhitepaperSectionEditor', () => {
  const mockOnContentChange = jest.fn();
  const defaultProps = {
    title: 'Executive Summary',
    content: 'This is the initial content.',
    onContentChange: mockOnContentChange,
  };

  beforeEach(() => {
    // Clear mocks before each test
    jest.clearAllMocks();
    (supabase.functions.invoke as jest.Mock).mockReset();
  });

  test('renders with title and content', () => {
    render(<WhitepaperSectionEditor {...defaultProps} />);
    expect(screen.getByText('Executive Summary')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveValue('This is the initial content.');
  });

  test('calls onContentChange when textarea value changes', () => {
    render(<WhitepaperSectionEditor {...defaultProps} />);
    const textarea = screen.getByRole('textbox');
    fireEvent.change(textarea, { target: { value: 'New content' } });
    expect(mockOnContentChange).toHaveBeenCalledWith('New content');
  });

  test('"Get AI Suggestions" button click calls Supabase function and displays suggestions', async () => {
    const mockSuggestions = "1. Elaborate on market need.\n2. Add specific metrics.";
    (supabase.functions.invoke as jest.Mock).mockResolvedValueOnce({
      data: { suggestions: mockSuggestions },
      error: null,
    });

    render(<WhitepaperSectionEditor {...defaultProps} />);
    const suggestionsButton = screen.getByRole('button', { name: /Get AI Suggestions/i });
    fireEvent.click(suggestionsButton);

    expect(suggestionsButton).toBeDisabled(); // Check loading state
    expect(screen.getByText(/Getting Suggestions.../i)).toBeInTheDocument();

    await waitFor(() => {
      expect(supabase.functions.invoke).toHaveBeenCalledWith('get-whitepaper-section-suggestions', {
        body: {
          sectionTitle: defaultProps.title,
          sectionContent: defaultProps.content,
        },
      });
    });

    await waitFor(() => {
        expect(screen.getByText('Suggestions:')).toBeInTheDocument();
    });
    expect(screen.getByText(mockSuggestions)).toBeInTheDocument();
    expect(suggestionsButton).not.toBeDisabled(); // Check loading state removed
  });

  test('handles error when fetching AI suggestions', async () => {
    const errorMessage = 'Failed to fetch suggestions from Supabase.';
    (supabase.functions.invoke as jest.Mock).mockResolvedValueOnce({
      data: null,
      error: { message: errorMessage },
    });

    render(<WhitepaperSectionEditor {...defaultProps} />);
    const suggestionsButton = screen.getByRole('button', { name: /Get AI Suggestions/i });
    fireEvent.click(suggestionsButton);

    await waitFor(() => {
      expect(supabase.functions.invoke).toHaveBeenCalledTimes(1);
    });

    await waitFor(() => {
        expect(screen.getByText(`Error: Supabase function error: ${errorMessage}`)).toBeInTheDocument();
    });
    expect(suggestionsButton).not.toBeDisabled();
  });

   test('handles error when suggestions data is invalid', async () => {
    (supabase.functions.invoke as jest.Mock).mockResolvedValueOnce({
      data: { message: "This is not a suggestion" }, // Invalid data structure
      error: null,
    });

    render(<WhitepaperSectionEditor {...defaultProps} />);
    const suggestionsButton = screen.getByRole('button', { name: /Get AI Suggestions/i });
    fireEvent.click(suggestionsButton);

    await waitFor(() => {
      expect(supabase.functions.invoke).toHaveBeenCalledTimes(1);
    });

    await waitFor(() => {
        expect(screen.getByText('Error: No suggestions received from the function.')).toBeInTheDocument();
    });
  });

  test('hides suggestions when "Hide Suggestions" button is clicked', async () => {
    const mockSuggestions = "Some suggestions.";
    (supabase.functions.invoke as jest.Mock).mockResolvedValueOnce({
      data: { suggestions: mockSuggestions },
      error: null,
    });

    render(<WhitepaperSectionEditor {...defaultProps} />);
    fireEvent.click(screen.getByRole('button', { name: /Get AI Suggestions/i }));

    await waitFor(() => screen.getByText('Suggestions:'));
    expect(screen.getByText(mockSuggestions)).toBeVisible();

    fireEvent.click(screen.getByRole('button', { name: /Hide Suggestions/i }));
    expect(screen.queryByText(mockSuggestions)).not.toBeVisible();
  });
});
