import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TalentDirectory from '@/pages/TalentDirectory';

// Mock child components and hooks
jest.mock('@/components/talent/FilterSidebar', () => ({ FilterSidebar: (props: any) => <div data-testid="filter-sidebar">Filter Sidebar</div> }));
jest.mock('@/components/talent/TalentResults', () => ({
  TalentResults: (props: any) => (
    <div data-testid="talent-results">
      {props.talents.map((talent: any) => (
        <div key={talent.id} data-testid="talent-profile-card">{talent.name}</div>
      ))}
      {props.totalCount === 0 && !props.isLoading && <div>No results based on filters</div>}
    </div>
  )
}));
jest.mock('@/components/talent/TalentSkeleton', () => ({ TalentSkeleton: () => <div data-testid="talent-skeleton">Loading...</div> }));
jest.mock('@/components/talent/ErrorBanner', () => ({ ErrorBanner: (props: any) => <div data-testid="error-banner">{props.msg}</div> }));
jest.mock('@/components/GlobalErrorBoundary', () => ({ children }: { children: React.ReactNode }) => <>{children}</>);
jest.mock('@/hooks/useAuth', () => ({
  useAuth: () => ({ user: { id: 'test-user' }, isAuthenticated: true }),
}));

// Mock fetch API (used by useTalentData via useTalentDirectory)
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ talents: [] }), // Assuming API returns { talents: [...] }
  })
) as jest.Mock;


describe('TalentDirectory Page', () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockClear();
    jest.clearAllMocks();
    (global.fetch as jest.Mock).mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ talents: [] }), // Default empty state for talents
      })
    );
  });

  it('renders without throwing errors and displays a heading', async () => {
    render(
      <MemoryRouter>
        <TalentDirectory />
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(screen.getByText(/AI & Tech Talent Directory/i)).toBeInTheDocument();
    });
    expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining('/api/talent'), expect.any(Object));
  });

  it('displays talent profiles when API returns data', async () => {
    const mockTalents = [
      { id: '1', name: 'John Doe', title: 'AI Developer' },
      { id: '2', name: 'Jane Smith', title: 'Data Scientist' },
    ];
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ talents: mockTalents }),
      })
    );

    render(
      <MemoryRouter>
        <TalentDirectory />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
      expect(screen.getByText(/Jane Smith/i)).toBeInTheDocument();
      expect(screen.getAllByTestId('talent-profile-card')).toHaveLength(2);
    });
  });

  it('renders empty state when API returns no talent profiles', async () => {
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ talents: [] }),
      })
    );
    render(
      <MemoryRouter>
        <TalentDirectory />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/Talent Directory Currently Empty/i)).toBeInTheDocument();
    });
  });

  it('handles API error when fetching talent profiles', async () => {
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        statusText: 'Server Error',
        json: () => Promise.resolve({ message: 'Failed to fetch talent' }),
      })
    );

    render(
      <MemoryRouter>
        <TalentDirectory />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByTestId('error-banner')).toHaveTextContent('Unable to load talent profiles.');
    });
  });
});
