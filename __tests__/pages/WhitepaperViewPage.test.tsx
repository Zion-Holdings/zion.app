import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useRouter } from 'next/router';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import WhitepaperViewPage from '@/pages/WhitepaperViewPage';
import { supabase } from '@/integrations/supabase/client';
import WhitepaperPreviewPanel from '@/components/WhitepaperPreviewPanel';

// Mock dependencies
jest.mock('next/router', () => require('next-router-mock'));
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }) => <a href={href}>{children}</a>,
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
const mockUseRouter = useRouter as jest.Mock;
const mockPreviewPanel = WhitepaperPreviewPanel as jest.Mock;
// const mockUseAuth = useAuth as jest.Mock; // If useAuth is a separate, imported hook

describe('WhitepaperViewPage', () => {
  beforeEach(() => {
    mockSupabaseInvoke.mockReset();
    mockUseRouter.mockReset();
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
    mockUseRouter.mockReturnValue({
      query: { id: 'test-id' },
      push: jest.fn(),
      pathname: '/share/test-id',
      asPath: '/share/test-id',
    });
    // (require('@/pages/WhitepaperViewPage').useAuth as jest.Mock).mockReturnValue({ isAdmin: false });
    render(
      <MemoryRouterProvider>
        <WhitepaperViewPage />
      </MemoryRouterProvider>
    );
    expect(screen.getByText(/Loading whitepaper.../i)).toBeInTheDocument();
  });

  test('fetches and displays whitepaper data for a public whitepaper', async () => {
    mockUseRouter.mockReturnValue({
      query: { id: 'public-id' },
      push: jest.fn(),
      pathname: '/share/public-id',
      asPath: '/share/public-id',
    });
    (require('@/pages/WhitepaperViewPage').useAuth as jest.Mock).mockReturnValue({ isAdmin: false });
    mockSupabaseInvoke.mockResolvedValue({
      data: { whitepaper_data: mockWhitepaperData, is_public: true, created_at: new Date().toISOString() },
      error: null,
    });

    render(
      <MemoryRouterProvider>
        <WhitepaperViewPage />
      </MemoryRouterProvider>
    );

    await waitFor(() => expect(mockSupabaseInvoke).toHaveBeenCalledWith('get-shared-whitepaper', { body: { id: 'public-id' } }));
    await waitFor(() => expect(screen.getByTestId('mock-preview-panel')).toBeInTheDocument());
    expect(mockPreviewPanel).toHaveBeenCalledWith(expect.objectContaining(mockWhitepaperData), {});
  });

  test('displays error message if fetching fails', async () => {
    mockUseRouter.mockReturnValue({
      query: { id: 'error-id' },
      push: jest.fn(),
      pathname: '/share/error-id',
      asPath: '/share/error-id',
    });
    (require('@/pages/WhitepaperViewPage').useAuth as jest.Mock).mockReturnValue({ isAdmin: false });
    mockSupabaseInvoke.mockResolvedValue({
      data: null,
      error: { message: 'Fetch error' },
    });
    render(
      <MemoryRouterProvider>
        <WhitepaperViewPage />
      </MemoryRouterProvider>
    );
    await waitFor(() => expect(screen.getByText(/Error: Supabase function error: Fetch error/i)).toBeInTheDocument());
  });

  test('displays "not found" if no data is returned', async () => {
    mockUseRouter.mockReturnValue({
      query: { id: 'not-found-id' },
      push: jest.fn(),
      pathname: '/share/not-found-id',
      asPath: '/share/not-found-id',
    });
    (require('@/pages/WhitepaperViewPage').useAuth as jest.Mock).mockReturnValue({ isAdmin: false });
    mockSupabaseInvoke.mockResolvedValue({
      data: null, // Or { data: { whitepaper_data: null } }
      error: null,
    });
    render(
      <MemoryRouterProvider>
        <WhitepaperViewPage />
      </MemoryRouterProvider>
    );
    await waitFor(() => expect(screen.getByText(/Whitepaper not found/i)).toBeInTheDocument());
  });

  describe('Access Control', () => {
    test('denies access to a non-public whitepaper for non-admin user', async () => {
      mockUseRouter.mockReturnValue({
        query: { id: 'private-id' },
        push: jest.fn(),
        pathname: '/share/private-id',
        asPath: '/share/private-id',
      });
      (require('@/pages/WhitepaperViewPage').useAuth as jest.Mock).mockReturnValue({ isAdmin: false });
      mockSupabaseInvoke.mockResolvedValue({
        data: { whitepaper_data: mockWhitepaperData, is_public: false, created_at: new Date().toISOString() },
        error: null,
      });
      render(
        <MemoryRouterProvider>
          <WhitepaperViewPage />
        </MemoryRouterProvider>
      );
      await waitFor(() => expect(screen.getByText(/Access Denied/i)).toBeInTheDocument());
      expect(screen.getByText(/This whitepaper is not public/i)).toBeInTheDocument();
      expect(screen.queryByTestId('mock-preview-panel')).not.toBeInTheDocument();
    });

    test('allows access to a non-public whitepaper for admin user', async () => {
      mockUseRouter.mockReturnValue({
        query: { id: 'private-id-admin' },
        push: jest.fn(),
        pathname: '/share/private-id-admin',
        asPath: '/share/private-id-admin',
      });
      (require('@/pages/WhitepaperViewPage').useAuth as jest.Mock).mockReturnValue({ isAdmin: true }); // User is admin
      mockSupabaseInvoke.mockResolvedValue({
        data: { whitepaper_data: mockWhitepaperData, is_public: false, created_at: new Date().toISOString() },
        error: null,
      });
      render(
        <MemoryRouterProvider>
          <WhitepaperViewPage />
        </MemoryRouterProvider>
      );
      await waitFor(() => expect(screen.getByTestId('mock-preview-panel')).toBeInTheDocument());
      expect(mockPreviewPanel).toHaveBeenCalledWith(expect.objectContaining(mockWhitepaperData), {});
      expect(screen.getByText(/Private \(Admin View\)/i)).toBeInTheDocument(); // Admin sees private status
    });

    test('allows access to a public whitepaper for non-admin user', async () => {
        mockUseRouter.mockReturnValue({
          query: { id: 'public-id-non-admin' },
          push: jest.fn(),
          pathname: '/share/public-id-non-admin',
          asPath: '/share/public-id-non-admin',
        });
        (require('@/pages/WhitepaperViewPage').useAuth as jest.Mock).mockReturnValue({ isAdmin: false });
        mockSupabaseInvoke.mockResolvedValue({
          data: { whitepaper_data: mockWhitepaperData, is_public: true, created_at: new Date().toISOString() },
          error: null,
        });
        render(
          <MemoryRouterProvider>
            <WhitepaperViewPage />
          </MemoryRouterProvider>
        );
        await waitFor(() => expect(screen.getByTestId('mock-preview-panel')).toBeInTheDocument());
        expect(mockPreviewPanel).toHaveBeenCalledWith(expect.objectContaining(mockWhitepaperData), {});
      });
  });
});
