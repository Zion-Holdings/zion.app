import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useParams, Link } from 'react-router-dom';
import WhitepaperViewPage from '@/pages/WhitepaperViewPage';
import { supabase } from '@/integrations/supabase/client';
import WhitepaperPreviewPanel from '@/components/WhitepaperPreviewPanel';

// Mock dependencies
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // import and retain default behavior
  useParams: jest.fn(),
  Link: jest.fn(({ children, to }) => <a href={to}>{children}</a>), // Simple Link mock
}));

jest.mock('@/integrations/supabase/client', () => ({
  supabase: {
    functions: {
      invoke: jest.fn(),
    },
  },
}));

jest.mock('@/components/WhitepaperPreviewPanel', () => jest.fn(() => <div data-testid="mock-preview-panel">Preview Panel</div>));

// Mock the useAuth hook used in WhitepaperViewPage
jest.mock('@/pages/WhitepaperViewPage', () => {
  const ActualPage = jest.requireActual('@/pages/WhitepaperViewPage');
  return {
    ...ActualPage, // Spread original exports
    __esModule: true, // This is important for modules with default exports
    default: (props: any) => { // Mock the default export (the page component)
      // Mock useAuth inline for this test file's scope
      ActualPage.useAuth = jest.fn();
      return <ActualPage.default {...props} />;
    },
  };
});
// A more direct way to mock useAuth if the above doesn't work due to module system intricacies:
// jest.mock('@/hooks/useAuth', () => ({ // Assuming useAuth is in a hook file
//   useAuth: jest.fn(),
// }));
// Then in tests: import { useAuth } from '@/hooks/useAuth'; (useAuth as jest.Mock).mockReturnValue(...)


const mockSupabaseInvoke = supabase.functions.invoke as jest.Mock;
const mockUseParams = useParams as jest.Mock;
const mockPreviewPanel = WhitepaperPreviewPanel as jest.Mock;
// const mockUseAuth = useAuth as jest.Mock; // If useAuth is a separate, imported hook

describe('WhitepaperViewPage', () => {
  beforeEach(() => {
    mockSupabaseInvoke.mockReset();
    mockUseParams.mockReset();
    mockPreviewPanel.mockClear();
     // Reset useAuth mock before each test if it's directly part of WhitepaperViewPage's module (as per current mock)
    const PageWithMockedAuth = require('@/pages/WhitepaperViewPage');
    if (PageWithMockedAuth.useAuth) {
        (PageWithMockedAuth.useAuth as jest.Mock).mockReset();
    }
  });

  const mockWhitepaperData = {
    tokenName: 'Test Token',
    tokenSupply: '100M',
    sections: [{ id: 's1', title: 'Intro', content: 'Hello' }],
    distributionChartData: [{ name: 'Team', value: 50 }],
  };

  test('displays loading state initially', () => {
    mockUseParams.mockReturnValue({ id: 'test-id' });
    // (require('@/pages/WhitepaperViewPage').useAuth as jest.Mock).mockReturnValue({ isAdmin: false });
    render(<WhitepaperViewPage />);
    expect(screen.getByText(/Loading whitepaper.../i)).toBeInTheDocument();
  });

  test('fetches and displays whitepaper data for a public whitepaper', async () => {
    mockUseParams.mockReturnValue({ id: 'public-id' });
    (require('@/pages/WhitepaperViewPage').useAuth as jest.Mock).mockReturnValue({ isAdmin: false });
    mockSupabaseInvoke.mockResolvedValue({
      data: { whitepaper_data: mockWhitepaperData, is_public: true, created_at: new Date().toISOString() },
      error: null,
    });

    render(<WhitepaperViewPage />);

    await waitFor(() => expect(mockSupabaseInvoke).toHaveBeenCalledWith('get-shared-whitepaper', { body: { id: 'public-id' } }));
    await waitFor(() => expect(screen.getByTestId('mock-preview-panel')).toBeInTheDocument());
    expect(mockPreviewPanel).toHaveBeenCalledWith(expect.objectContaining(mockWhitepaperData), {});
  });

  test('displays error message if fetching fails', async () => {
    mockUseParams.mockReturnValue({ id: 'error-id' });
    (require('@/pages/WhitepaperViewPage').useAuth as jest.Mock).mockReturnValue({ isAdmin: false });
    mockSupabaseInvoke.mockResolvedValue({
      data: null,
      error: { message: 'Fetch error' },
    });
    render(<WhitepaperViewPage />);
    await waitFor(() => expect(screen.getByText(/Error: Supabase function error: Fetch error/i)).toBeInTheDocument());
  });

  test('displays "not found" if no data is returned', async () => {
    mockUseParams.mockReturnValue({ id: 'not-found-id' });
    (require('@/pages/WhitepaperViewPage').useAuth as jest.Mock).mockReturnValue({ isAdmin: false });
    mockSupabaseInvoke.mockResolvedValue({
      data: null, // Or { data: { whitepaper_data: null } }
      error: null,
    });
    render(<WhitepaperViewPage />);
    await waitFor(() => expect(screen.getByText(/Whitepaper not found/i)).toBeInTheDocument());
  });

  describe('Access Control', () => {
    test('denies access to a non-public whitepaper for non-admin user', async () => {
      mockUseParams.mockReturnValue({ id: 'private-id' });
      (require('@/pages/WhitepaperViewPage').useAuth as jest.Mock).mockReturnValue({ isAdmin: false });
      mockSupabaseInvoke.mockResolvedValue({
        data: { whitepaper_data: mockWhitepaperData, is_public: false, created_at: new Date().toISOString() },
        error: null,
      });
      render(<WhitepaperViewPage />);
      await waitFor(() => expect(screen.getByText(/Access Denied/i)).toBeInTheDocument());
      expect(screen.getByText(/This whitepaper is not public/i)).toBeInTheDocument();
      expect(screen.queryByTestId('mock-preview-panel')).not.toBeInTheDocument();
    });

    test('allows access to a non-public whitepaper for admin user', async () => {
      mockUseParams.mockReturnValue({ id: 'private-id-admin' });
      (require('@/pages/WhitepaperViewPage').useAuth as jest.Mock).mockReturnValue({ isAdmin: true }); // User is admin
      mockSupabaseInvoke.mockResolvedValue({
        data: { whitepaper_data: mockWhitepaperData, is_public: false, created_at: new Date().toISOString() },
        error: null,
      });
      render(<WhitepaperViewPage />);
      await waitFor(() => expect(screen.getByTestId('mock-preview-panel')).toBeInTheDocument());
      expect(mockPreviewPanel).toHaveBeenCalledWith(expect.objectContaining(mockWhitepaperData), {});
      expect(screen.getByText(/Private \(Admin View\)/i)).toBeInTheDocument(); // Admin sees private status
    });

    test('allows access to a public whitepaper for non-admin user', async () => {
        mockUseParams.mockReturnValue({ id: 'public-id-non-admin' });
        (require('@/pages/WhitepaperViewPage').useAuth as jest.Mock).mockReturnValue({ isAdmin: false });
        mockSupabaseInvoke.mockResolvedValue({
          data: { whitepaper_data: mockWhitepaperData, is_public: true, created_at: new Date().toISOString() },
          error: null,
        });
        render(<WhitepaperViewPage />);
        await waitFor(() => expect(screen.getByTestId('mock-preview-panel')).toBeInTheDocument());
        expect(mockPreviewPanel).toHaveBeenCalledWith(expect.objectContaining(mockWhitepaperData), {});
      });
  });
});
