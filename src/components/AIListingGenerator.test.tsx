import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { AIListingGenerator } from './AIListingGenerator';

// Mock dependencies
const mockToast = jest.fn();
jest.mock('@/hooks/use-toast', () => ({
  useToast: () => ({ toast: mockToast }),
}));

const mockSupabaseInvoke = jest.fn();
jest.mock('@/integrations/supabase/client', () => ({
  supabase: {
    functions: {
      invoke: (name: string, options: any) => mockSupabaseInvoke(name, options),
    },
  },
}));

jest.mock('lucide-react', () => ({
  Sparkles: () => <svg data-testid="sparkles-icon" />,
  ArrowRight: () => <svg data-testid="arrow-right-icon" />,
}));

// Simple mocks for UI components
jest.mock('@/components/ui/button', () => ({
  Button: jest.fn(({ children, onClick, disabled, ...props }: any) => (
    <button onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  )),
}));
jest.mock('@/components/ui/input', () => ({
  Input: jest.fn((props: any) => <input {...props} />),
}));
jest.mock('@/components/ui/textarea', () => ({
  Textarea: jest.fn((props: any) => <textarea {...props} />),
}));
jest.mock('@/components/ui/card', () => ({
  Card: jest.fn(({ children, ...props }: any) => <div data-testid="card" {...props}>{children}</div>),
  CardHeader: jest.fn(({ children, ...props }: any) => <div data-testid="card-header" {...props}>{children}</div>),
  CardTitle: jest.fn(({ children, ...props }: any) => <div data-testid="card-title" {...props}>{children}</div>),
  CardContent: jest.fn(({ children, ...props }: any) => <div data-testid="card-content" {...props}>{children}</div>),
  CardFooter: jest.fn(({ children, ...props }: any) => <div data-testid="card-footer" {...props}>{children}</div>),
}));
// Skeleton is a default export
jest.mock('@/components/ui/skeleton', () => jest.fn((props: any) => <div data-testid="skeleton" {...props} />));

jest.mock('@/components/ui/badge', () => ({
  Badge: jest.fn(({ children, ...props }: any) => <span data-testid="badge" {...props}>{children}</span>),
}));


const mockGeneratedContent = {
  description: "AI generated description.",
  tags: ["AI", "Test", "Generated"],
  suggestedPrice: { min: 10, max: 20 },
  keyPoints: ["Point 1", "Point 2"],
};

describe('AIListingGenerator', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Corrected placeholder test from initial creation (removed unused mlsListingId)
  it('should render the main card title', () => {
    render(<AIListingGenerator />);
    expect(screen.getByText(/AI Listing Optimizer/i)).toBeInTheDocument();
  });

  it('renders initial form fields', () => {
    render(<AIListingGenerator />);
    expect(screen.getByPlaceholderText("Enter your product or service title")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("e.g. AI Tool, Digital Product, Service")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Briefly describe the main features or benefits")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("e.g. Developers, Marketers, Startups")).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /generate optimized content/i })).toBeInTheDocument();
  });

  it('renders with initialValues if provided', () => {
    const initialValues = {
      title: "Initial Title",
      category: "Initial Category",
      keyFeatures: "Initial Features",
      targetAudience: "Initial Audience",
    };
    render(<AIListingGenerator initialValues={initialValues} />);
    expect(screen.getByDisplayValue("Initial Title")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Initial Category")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Initial Features")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Initial Audience")).toBeInTheDocument();
  });

  it('updates input fields on change', () => {
    render(<AIListingGenerator />);
    fireEvent.change(screen.getByPlaceholderText("Enter your product or service title"), { target: { value: "New Title" } });
    expect(screen.getByDisplayValue("New Title")).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText("e.g. AI Tool, Digital Product, Service"), { target: { value: "New Category" } });
    expect(screen.getByDisplayValue("New Category")).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText("Briefly describe the main features or benefits"), { target: { value: "New Features" } });
    expect(screen.getByDisplayValue("New Features")).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText("e.g. Developers, Marketers, Startups"), { target: { value: "New Audience" } });
    expect(screen.getByDisplayValue("New Audience")).toBeInTheDocument();
  });

  it('disables generate button if title or category is missing', () => {
    render(<AIListingGenerator />);
    const generateButton = screen.getByRole('button', { name: /generate optimized content/i });
    expect(generateButton).toBeDisabled();

    fireEvent.change(screen.getByPlaceholderText("Enter your product or service title"), { target: { value: "Test Title" } });
    expect(generateButton).toBeDisabled(); // Category still missing

    fireEvent.change(screen.getByPlaceholderText("Enter your product or service title"), { target: { value: "" } }); // Clear title
    fireEvent.change(screen.getByPlaceholderText("e.g. AI Tool, Digital Product, Service"), { target: { value: "Test Category" } });
    expect(generateButton).toBeDisabled(); // Title missing

    fireEvent.change(screen.getByPlaceholderText("Enter your product or service title"), { target: { value: "Test Title" } });
    expect(generateButton).not.toBeDisabled(); // Both present
  });

  it('does not call generate or toast if button is clicked while disabled (e.g. missing fields)', () => {
    render(<AIListingGenerator />);
    const generateButton = screen.getByRole('button', { name: /generate optimized content/i });

    // Ensure button is disabled (e.g., title and category are empty)
    expect(generateButton).toBeDisabled();

    fireEvent.click(generateButton);

    // Toast for missing fields should not be called because handleGenerate is not reached
    expect(mockToast).not.toHaveBeenCalledWith(expect.objectContaining({
      title: "Missing required fields",
    }));
    expect(mockSupabaseInvoke).not.toHaveBeenCalled();
  });

  describe('handleGenerate successful generation', () => {
    beforeEach(() => {
      mockSupabaseInvoke.mockResolvedValue({ data: { generated: mockGeneratedContent }, error: null });
      render(<AIListingGenerator />);
      fireEvent.change(screen.getByPlaceholderText("Enter your product or service title"), { target: { value: "Test Title" } });
      fireEvent.change(screen.getByPlaceholderText("e.g. AI Tool, Digital Product, Service"), { target: { value: "Test Category" } });
      fireEvent.change(screen.getByPlaceholderText("Briefly describe the main features or benefits"), { target: { value: "Test Features" } });
      fireEvent.change(screen.getByPlaceholderText("e.g. Developers, Marketers, Startups"), { target: { value: "Test Audience" } });
    });

    it('calls supabase function, shows loading, then generated content and success toast', async () => {
      fireEvent.click(screen.getByRole('button', { name: /generate optimized content/i }));

      expect(screen.getByText(/generating optimized content\.\.\./i)).toBeInTheDocument();
      expect(screen.queryAllByTestId('skeleton').length).toBeGreaterThan(0);

      await waitFor(() => {
        expect(mockSupabaseInvoke).toHaveBeenCalledWith('ai-listing-generator', {
          body: { title: "Test Title", category: "Test Category", keyFeatures: "Test Features", targetAudience: "Test Audience" }
        });
      });

      await waitFor(() => {
        expect(screen.getByText("AI generated description.")).toBeInTheDocument();
      });

      expect(screen.queryByText(/generating optimized content\.\.\./i)).not.toBeInTheDocument();
      expect(screen.queryAllByTestId('skeleton').length).toBe(0);

      expect(screen.getByText("AI generated description.")).toBeInTheDocument();
      expect(screen.getByText("AI")).toBeInTheDocument();
      expect(screen.getByText("$10.00 - $20.00")).toBeInTheDocument();
      expect(screen.getByText("Point 1")).toBeInTheDocument();

      expect(mockToast).toHaveBeenCalledWith(expect.objectContaining({
        title: "Content Generated",
      }));
    });
  });

  it('handles Supabase function error during generation', async () => {
    mockSupabaseInvoke.mockResolvedValue({ data: null, error: { message: "Supabase error" } });
    render(<AIListingGenerator />);
    fireEvent.change(screen.getByPlaceholderText("Enter your product or service title"), { target: { value: "Test Title" } });
    fireEvent.change(screen.getByPlaceholderText("e.g. AI Tool, Digital Product, Service"), { target: { value: "Test Category" } });
    fireEvent.click(screen.getByRole('button', { name: /generate optimized content/i }));

    await waitFor(() => {
      expect(mockToast).toHaveBeenCalledWith(expect.objectContaining({
        title: "Generation Failed",
        description: "Supabase error",
        variant: "destructive",
      }));
    });
    expect(screen.queryByText("AI generated description.")).not.toBeInTheDocument();
  });

  it('handles internal error from Supabase function data', async () => {
    mockSupabaseInvoke.mockResolvedValue({ data: { error: "Internal AI error" }, error: null });
    render(<AIListingGenerator />);
    fireEvent.change(screen.getByPlaceholderText("Enter your product or service title"), { target: { value: "Test Title" } });
    fireEvent.change(screen.getByPlaceholderText("e.g. AI Tool, Digital Product, Service"), { target: { value: "Test Category" } });
    fireEvent.click(screen.getByRole('button', { name: /generate optimized content/i }));

    await waitFor(() => {
      expect(mockToast).toHaveBeenCalledWith(expect.objectContaining({
        title: "Generation Failed",
        description: "Internal AI error",
        variant: "destructive",
      }));
    });
  });

  it('handles network or unexpected error during generation', async () => {
    mockSupabaseInvoke.mockRejectedValue(new Error("Network failure"));
    render(<AIListingGenerator />);
    fireEvent.change(screen.getByPlaceholderText("Enter your product or service title"), { target: { value: "Test Title" } });
    fireEvent.change(screen.getByPlaceholderText("e.g. AI Tool, Digital Product, Service"), { target: { value: "Test Category" } });
    fireEvent.click(screen.getByRole('button', { name: /generate optimized content/i }));

    await waitFor(() => {
      expect(mockToast).toHaveBeenCalledWith(expect.objectContaining({
        title: "Generation Failed",
        description: "Network failure",
        variant: "destructive",
      }));
    });
  });

  describe('handleApply', () => {
    const mockOnApply = jest.fn();

    beforeEach(async () => {
      mockSupabaseInvoke.mockResolvedValue({ data: { generated: mockGeneratedContent }, error: null });
      // Use a key for AIListingGenerator to force re-mount with new props if needed, or ensure clean state.
      render(<AIListingGenerator key="apply-test" onApplyGenerated={mockOnApply} />);
      fireEvent.change(screen.getByPlaceholderText("Enter your product or service title"), { target: { value: "Test Title" } });
      fireEvent.change(screen.getByPlaceholderText("e.g. AI Tool, Digital Product, Service"), { target: { value: "Test Category" } });
      fireEvent.click(screen.getByRole('button', { name: /generate optimized content/i }));
      await waitFor(() => screen.getByText("AI generated description."));
    });

    it('apply button is visible and calls onApplyGenerated with content', () => {
      const applyButton = screen.getByRole('button', { name: /apply to my listing/i });
      expect(applyButton).toBeInTheDocument();
      fireEvent.click(applyButton);

      expect(mockOnApply).toHaveBeenCalledWith(mockGeneratedContent);
      expect(mockToast).toHaveBeenCalledWith(expect.objectContaining({
        title: "Content Applied",
      }));
    });
  });

  it('apply button is not visible if onApplyGenerated is not provided', async () => {
    mockSupabaseInvoke.mockResolvedValue({ data: { generated: mockGeneratedContent }, error: null });
    render(<AIListingGenerator key="no-apply-test" />);
    fireEvent.change(screen.getByPlaceholderText("Enter your product or service title"), { target: { value: "Test Title" } });
    fireEvent.change(screen.getByPlaceholderText("e.g. AI Tool, Digital Product, Service"), { target: { value: "Test Category" } });
    fireEvent.click(screen.getByRole('button', { name: /generate optimized content/i }));

    await waitFor(() => screen.getByText("AI generated description."));
    expect(screen.queryByRole('button', { name: /apply to my listing/i })).not.toBeInTheDocument();
  });
});
