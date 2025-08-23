import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
// import { vi } from 'vitest'; // Removed Vitest import
import TalentPage from '@/pages/talent/[id]';
import { TALENT_PROFILES } from '@/data/talentData'; // Adjust path if necessary
import { useRouter } from 'next/router'; // Keep Next.js import for mocking

// Mock next/router
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

// Helper to mock fetch
const mockFetch = (data: any, ok = true, status = 200) => {
  global.fetch = jest.fn().mockResolvedValue({ // Changed vi.fn to jest.fn
    ok,
    status,
    json: () => Promise.resolve(data),
    text: () => Promise.resolve(typeof data === 'string' ? data : JSON.stringify(data)),
  } as Response); // Added type assertion for Response
};

// Mock TalentDetails and NextHead to simplify testing TalentPage focus
jest.mock('@/components/talent/TalentDetails', () => ({
  default: ({ talent }: { talent: any }) => (
    <div data-testid="talent-details">
      <h1>{talent.full_name}</h1>
      {talent.skills.map((skill: string) => <span key={skill}>{skill}</span>)}
    </div>
  ),
}));

// Mock TalentProfileSkeleton
jest.mock('@/components/talent/TalentProfileSkeleton', () => ({
  default: () => <div data-testid="talent-profile-skeleton">Loading...</div>,
}));

// Mock NotFound component
jest.mock('@/components/NotFound', () => ({
  default: () => <div data-testid="not-found-page">Page Not Found</div>,
}));

describe('TalentPage', () => {
  it('should render skeleton loader when router is not ready', () => {
    (useRouter as jest.Mock).mockReturnValue({ // Changed vi.Mock to jest.Mock
      query: { id: 't-001' },
      isReady: false,
    });

    render(<TalentPage />);
    expect(screen.getByTestId('talent-profile-skeleton')).toBeInTheDocument();
  });

  it('should render skeleton loader when initially loading data even if router is ready', () => {
    (useRouter as jest.Mock).mockReturnValue({ // Changed vi.Mock to jest.Mock
      query: { id: 't-001' },
      isReady: true, // Router is ready
    });
    // fetch will be pending, so isLoading is true initially
    global.fetch = jest.fn(() => new Promise(() => {})); // unresolved promise, changed vi.fn to jest.fn

    render(<TalentPage />);
    expect(screen.getByTestId('talent-profile-skeleton')).toBeInTheDocument();
  });

  it('should fetch and display talent profile successfully', async () => {
    const mockProfile = TALENT_PROFILES[0];
    (useRouter as jest.Mock).mockReturnValue({ // Changed vi.Mock to jest.Mock
      query: { id: mockProfile.id },
      isReady: true,
    });
    mockFetch({ profile: mockProfile });

    render(<TalentPage />);

    // Wait for loading to complete and talent details to be rendered
    await waitFor(() => {
      expect(screen.getByTestId('talent-details')).toBeInTheDocument();
    });

    expect(screen.getByText(mockProfile.full_name)).toBeInTheDocument();
    mockProfile.skills.forEach(skill => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
    expect(screen.queryByTestId('talent-profile-skeleton')).not.toBeInTheDocument();
    expect(screen.queryByTestId('not-found-page')).not.toBeInTheDocument();
  });

  it('should render NotFound component when API returns 404', async () => {
    (useRouter as jest.Mock).mockReturnValue({ // Changed vi.Mock to jest.Mock
      query: { id: 'non-existent-id' },
      isReady: true,
    });
    mockFetch({ error: 'Talent not found' }, false, 404);

    render(<TalentPage />);

    await waitFor(() => {
      expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
    });

    expect(screen.queryByTestId('talent-details')).not.toBeInTheDocument();
    expect(screen.queryByTestId('talent-profile-skeleton')).not.toBeInTheDocument();
  });

  it('should render generic error message when API returns a non-404 error', async () => {
    (useRouter as jest.Mock).mockReturnValue({ // Changed vi.Mock to jest.Mock
      query: { id: 't-001' },
      isReady: true,
    });
    mockFetch({ error: 'Server error' }, false, 500);

    render(<TalentPage />);

    await waitFor(() => {
      expect(screen.getByText(/Failed to load talent profile./i)).toBeInTheDocument();
    });

    expect(screen.getByText(/Status: 500/i)).toBeInTheDocument();
    // Check for part of the error message from the mock
    expect(screen.getByText(/Message: Server error/i)).toBeInTheDocument();
    expect(screen.queryByTestId('talent-details')).not.toBeInTheDocument();
    expect(screen.queryByTestId('talent-profile-skeleton')).not.toBeInTheDocument();
    expect(screen.queryByTestId('not-found-page')).not.toBeInTheDocument();
  });
});

// Basic cleanup
afterEach(() => {
  jest.restoreAllMocks(); // Changed from vi.restoreAllMocks()
});
