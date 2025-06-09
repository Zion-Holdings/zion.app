import React from 'react';
import { render, screen, fireEvent, waitFor, within, act } from '@testing-library/react';
import { AIMatchmaker } from './AIMatchmaker';
import { MatchResultItem, MatchResult } from '@/lib/ai-matchmaking';

// Mock dependencies
jest.mock('@/hooks/use-toast', () => ({
  toast: jest.fn(),
}));

const mockFindMatches = jest.fn();
jest.mock('@/lib/ai-matchmaking', () => ({
  findMatches: (query: string, serviceType: string, count: number) => mockFindMatches(query, serviceType, count),
  // Exporting MatchResultItem if it's used by AIMatchmaker props or state,
  // but it seems AIMatchmaker uses MatchResult internally and passes MatchResultItem to AIMatchingResults
}));

jest.mock('@/components/ui/textarea', () => ({
  Textarea: jest.fn((props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
    <textarea data-testid="textarea" {...props} />
  )),
}));

jest.mock('@/components/ui/button', () => ({
  Button: jest.fn(({ children, onClick, disabled, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: string }) => (
    <button data-testid="button" onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  )),
}));

// Mock AIMatchingResults: the factory function is hoisted.
// We will get a reference to this mock inside `beforeEach`.
jest.mock('@/components/AIMatchingResults', () => ({
  AIMatchingResults: jest.fn(() => <div data-testid="ai-matching-results">Mocked Results</div>),
}));

jest.mock('lucide-react', () => ({
  Sparkles: () => <svg data-testid="sparkles-icon" />,
  Search: () => <svg data-testid="search-icon" />,
}));

// Mock Card components
jest.mock('@/components/ui/card', () => ({
  Card: jest.fn(({ children, ...props }: any) => <div data-testid="card" {...props}>{children}</div>),
  CardHeader: jest.fn(({ children, ...props }: any) => <div data-testid="card-header" {...props}>{children}</div>),
  CardTitle: jest.fn(({ children, ...props }: any) => <h2 data-testid="card-title" {...props}>{children}</h2>),
  CardContent: jest.fn(({ children, ...props }: any) => <div data-testid="card-content" {...props}>{children}</div>),
}));


const sampleMatchResultItems: MatchResultItem[] = [
  { id: '1', title: 'Match 1', description: 'Desc 1', category: 'Talent' },
  { id: '2', title: 'Match 2', description: 'Desc 2', category: 'Service' },
];
const sampleMatchResults: MatchResult[] = sampleMatchResultItems.map((item, index) => ({ item, score: 0.5 + index * 0.1 }));


describe('AIMatchmaker', () => {
  const { toast } = require('@/hooks/use-toast');
  let MockedAIMatchingResults: jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
    // Import the mocked component to get a reference to the mock function
    MockedAIMatchingResults = require('@/components/AIMatchingResults').AIMatchingResults as jest.Mock;
    MockedAIMatchingResults.mockClear();
  });

  it('renders initial form elements and no results', () => {
    render(<AIMatchmaker />);
    expect(screen.getByTestId('textarea')).toBeInTheDocument();
    expect(screen.getByTestId('button')).toHaveTextContent(/find matches/i);
    expect(screen.queryByTestId('ai-matching-results')).not.toBeInTheDocument();
  });

  it('updates query state on textarea change', () => {
    render(<AIMatchmaker />);
    const textarea = screen.getByTestId('textarea');
    fireEvent.change(textarea, { target: { value: 'Looking for a developer' } });
    expect(textarea).toHaveValue('Looking for a developer');
  });

  it('shows validation toast if search is clicked with empty query', () => {
    render(<AIMatchmaker />);
    fireEvent.click(screen.getByTestId('button'));
    expect(toast).toHaveBeenCalledWith({
      title: "Please enter a description",
      description: "Tell us what you're looking for so we can find matches.",
      variant: "destructive",
    });
    expect(mockFindMatches).not.toHaveBeenCalled();
  });

  it('calls findMatches and displays loading state, then results', async () => {
    mockFindMatches.mockResolvedValue(sampleMatchResults);
    render(<AIMatchmaker serviceType="Software Development" />);

    const textarea = screen.getByTestId('textarea');
    fireEvent.change(textarea, { target: { value: 'Need a React expert' } });

    const searchButton = screen.getByTestId('button');
    fireEvent.click(searchButton);

    expect(searchButton).toBeDisabled();
    expect(searchButton).toHaveTextContent(/analyzing your needs/i);
    // AIMatchingResults should be rendered with isLoading=true
    await waitFor(() => expect(MockedAIMatchingResults).toHaveBeenCalledWith(expect.objectContaining({ isLoading: true }), expect.anything()));

    expect(mockFindMatches).toHaveBeenCalledWith('Need a React expert', "Software Development", 3);

    await waitFor(() => expect(searchButton).not.toBeDisabled());
    expect(searchButton).toHaveTextContent(/find matches/i);

    expect(toast).toHaveBeenCalledWith({
      title: "Matches Found",
      description: `Found ${sampleMatchResults.length} matches based on your description.`,
    });
    expect(MockedAIMatchingResults).toHaveBeenCalledWith(
      expect.objectContaining({
        matches: sampleMatchResultItems,
        isLoading: false,
        projectDescription: 'Need a React expert',
        serviceType: "Software Development"
      }),
      expect.anything()
    );
  });

  it('handles error from findMatches and displays error toast', async () => {
    mockFindMatches.mockRejectedValue(new Error('API Error'));
    render(<AIMatchmaker />);

    fireEvent.change(screen.getByTestId('textarea'), { target: { value: 'Another query' } });
    fireEvent.click(screen.getByTestId('button'));

    await waitFor(() => expect(screen.getByTestId('button')).not.toBeDisabled());

    expect(toast).toHaveBeenCalledWith({
      title: "Matching Error",
      description: "We couldn't find matches for your request. Please try again.",
      variant: "destructive",
    });
    // AIMatchingResults should be rendered with empty matches and isLoading=false
    expect(MockedAIMatchingResults).toHaveBeenCalledWith(
      expect.objectContaining({
        matches: [],
        isLoading: false,
        projectDescription: 'Another query',
      }),
      expect.anything()
    );
  });

  it('calls onMatchSelect when a match is selected from AIMatchingResults', () => {
    mockFindMatches.mockResolvedValue([sampleMatchResults[0]]); // Simulate one match
    const mockOnMatchSelect = jest.fn();
    render(<AIMatchmaker onMatchSelect={mockOnMatchSelect} />);

    // Simulate initial search to render AIMatchingResults
    fireEvent.change(screen.getByTestId('textarea'), { target: { value: 'Query for select' } });
    fireEvent.click(screen.getByTestId('button'));

    // Wait for AIMatchingResults to be rendered (it's mocked, but we wait for the call)
    return waitFor(() => expect(MockedAIMatchingResults).toHaveBeenCalledTimes(1)).then(() => {
      // Get the onSelectMatch prop passed to the last call of MockedAIMatchingResults
      const passedProps = MockedAIMatchingResults.mock.calls[MockedAIMatchingResults.mock.calls.length - 1][0];
      expect(passedProps.onSelectMatch).toBeInstanceOf(Function);

      // Simulate AIMatchingResults calling its onSelectMatch prop with an item
      // The item passed by AIMatchingResults is MatchResultItem, but AIMatchmaker's onMatchSelect expects MatchResult
      // The handleItemSelect in AIMatchmaker converts this.
      const selectedItem = sampleMatchResultItems[0]; // This is what AIMatchingResults would pass
      act(() => {
         passedProps.onSelectMatch(selectedItem);
      });

      expect(mockOnMatchSelect).toHaveBeenCalledTimes(1);
      expect(mockOnMatchSelect).toHaveBeenCalledWith(sampleMatchResults[0]); // AIMatchmaker should pass the full MatchResult
    });
  });
});
