import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import TeamBuilderPage from '@/pages/team-builder'; // Adjust path if needed
import { AppLayout } from '@/layout/AppLayout'; // Mocked
import { useAuth } from '@/hooks/useAuth'; // Mocked
import { supabase } from '@/integrations/supabase/client'; // Mocked for any direct calls if they existed
import { toast } from 'sonner';

// Mocks
jest.mock('@/layout/AppLayout', () => ({
  AppLayout: ({ children }: { children: React.ReactNode }) => <div data-testid="app-layout">{children}</div>,
}));

jest.mock('@/hooks/useAuth', () => ({
  useAuth: jest.fn(() => ({ user: { id: 'test-user-id' } })), // Mock a logged-in user
}));

// Mock sonner toast
jest.mock('sonner', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
    info: jest.fn(),
  },
}));

// Mock next/router (if any navigation is directly used and tested, not strictly needed for this component's core logic)
// jest.mock('next/router', () => ({
//   useRouter: jest.fn(),
// }));

// Global fetch mock
global.fetch = jest.fn();

describe('TeamBuilderPage', () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
    // Clear toast mocks
    jest.mocked(toast.success).mockClear();
    jest.mocked(toast.error).mockClear();
    jest.mocked(toast.info).mockClear();
    // Reset useAuth mock for each test if its behavior needs to change per test,
    // for now, it consistently returns a user.
    jest.mocked(useAuth).mockImplementation(() => ({ user: { id: 'test-user-id' } } as any));

  });

  it('renders the initial form step correctly', () => {
    render(<TeamBuilderPage />);
    expect(screen.getByText('Team Builder')).toBeInTheDocument();
    expect(screen.getByLabelText(/Project Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Goals \/ Scope/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Next/i })).toBeInTheDocument();
  });

  it('shows validation errors for empty required fields on step 1', async () => {
    render(<TeamBuilderPage />);
    fireEvent.click(screen.getByRole('button', { name: /Next/i }));

    expect(await screen.findByText('Project name must be at least 3 characters')).toBeVisible();
    expect(await screen.findByText('Goals/scope must be at least 10 characters')).toBeVisible();
  });

  it('navigates to the second step on valid input for step 1', async () => {
    render(<TeamBuilderPage />);
    fireEvent.input(screen.getByLabelText(/Project Name/i), { target: { value: 'My New Project' } });
    fireEvent.input(screen.getByLabelText(/Goals \/ Scope/i), { target: { value: 'This is a detailed goal for the project.' } });
    fireEvent.click(screen.getByRole('button', { name: /Next/i }));

    // Check for elements on step 2
    expect(await screen.findByLabelText(/Timeline/i)).toBeVisible();
    expect(screen.getByLabelText(/Budget/i)).toBeVisible();
    expect(screen.getByRole('button', { name: /Previous/i })).toBeInTheDocument();
  });

  it('navigates to the review step (step 3) on valid input for step 2', async () => {
    render(<TeamBuilderPage />);
    // Step 1
    fireEvent.input(screen.getByLabelText(/Project Name/i), { target: { value: 'My New Project' } });
    fireEvent.input(screen.getByLabelText(/Goals \/ Scope/i), { target: { value: 'This is a detailed goal for the project.' } });
    fireEvent.click(screen.getByRole('button', { name: /Next/i }));

    // Step 2
    await screen.findByLabelText(/Timeline/i) // ensure step 2 is loaded
    fireEvent.input(screen.getByLabelText(/Timeline/i), { target: { value: '3 months' } });
    fireEvent.input(screen.getByLabelText(/Budget/i), { target: { value: '$5000' } });
    fireEvent.click(screen.getByRole('button', { name: /Next/i }));

    // Check for elements on step 3 (Review)
    expect(await screen.findByText(/Review Your Project Brief/i)).toBeVisible();
    expect(screen.getByRole('button', { name: /Get Team Recommendation/i })).toBeInTheDocument();
  });


  it('submits the form and displays recommendation on success', async () => {
    const mockRecommendation = {
      id: 'rec-123', // Added id as TeamRecommendationDisplay might use it
      project_brief_id: 'brief-xyz', // Added project_brief_id
      recommendationSummary: '1 PM, 1 Dev',
      roles: [{ role: 'Developer', description: 'Writes code', hourlyRateRange: {min: 50, max: 80}, weeklyHours: 40, matchedTalent: [] }],
      totalEstimatedRate: { min: 2000, max: 3200 },
      totalWeeklyBurn: { min: 2000, max: 3200 },
      totalProjectEstimate: { min: 24000, max: 38400 },
      createdAt: new Date().toISOString(),
    };
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockRecommendation,
    });

    render(<TeamBuilderPage />);
    // Fill step 1
    fireEvent.input(screen.getByLabelText(/Project Name/i), { target: { value: 'Final Project' } });
    fireEvent.input(screen.getByLabelText(/Goals \/ Scope/i), { target: { value: 'Final goals for submission test.' } });
    fireEvent.click(screen.getByRole('button', { name: /Next/i }));
    // Fill step 2
    await screen.findByLabelText(/Timeline/i);
    fireEvent.input(screen.getByLabelText(/Timeline/i), { target: { value: '6 weeks' } });
    fireEvent.input(screen.getByLabelText(/Budget/i), { target: { value: '$10000' } });
    // Optional: Fill talent filters if their absence causes issues or if they are part of default state
    // fireEvent.input(screen.getByLabelText(/Regions/i), { target: { value: 'Global' } });
    fireEvent.click(screen.getByRole('button', { name: /Next/i }));
    // Submit on step 3
    await screen.findByText(/Review Your Project Brief/i);
    fireEvent.click(screen.getByRole('button', { name: /Get Team Recommendation/i }));

    expect(await screen.findByText('Team Recommendation Generated!')).toBeVisible();
    expect(screen.getByText(mockRecommendation.recommendationSummary)).toBeVisible();
    expect(screen.getByText('Developer')).toBeVisible();
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('/api/team-builder/generate', expect.any(Object));
  });

  it('shows an error toast if API call fails', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: 'AI failed miserably' }),
    });

    render(<TeamBuilderPage />);
    // Fill form quickly to get to submit
    fireEvent.input(screen.getByLabelText(/Project Name/i), { target: { value: 'Error Project' } });
    fireEvent.input(screen.getByLabelText(/Goals \/ Scope/i), { target: { value: 'Error goals for failure test.' } });
    fireEvent.click(screen.getByRole('button', { name: /Next/i }));
    await screen.findByLabelText(/Timeline/i);
    fireEvent.input(screen.getByLabelText(/Timeline/i), { target: { value: '1 week' } });
    fireEvent.input(screen.getByLabelText(/Budget/i), { target: { value: '$1000' } });
    fireEvent.click(screen.getByRole('button', { name: /Next/i }));
    await screen.findByText(/Review Your Project Brief/i);
    fireEvent.click(screen.getByRole('button', { name: /Get Team Recommendation/i }));

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith('AI failed miserably');
    });
  });
});
