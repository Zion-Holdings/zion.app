import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import EquipmentPage from '@/pages/EquipmentPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import apiClient from '@/services/apiClient';
import { toast } from '@/hooks/use-toast';

// Mock child components and hooks
jest.mock('@/components/DynamicListingPage', () => ({
  DynamicListingPage: (props: any) => (
    <div data-testid="dynamic-listing-page">
      <h2>{props.title}</h2>
      {props.listings.map((item: any) => (
        <div key={item.id} data-testid="equipment-item">{item.title}</div>
      ))}
    </div>
  ),
}));
jest.mock('@/components/ui/skeleton', () => ({
    Skeleton: () => <div data-testid="skeleton">Loading Skeleton</div>,
    SkeletonCard: () => <div data-testid="skeleton-card">Skeleton Card</div>,
}));
jest.mock('@/components/skeletons/FilterSidebarSkeleton', () => ({
    FilterSidebarSkeleton: () => <div data-testid="filter-sidebar-skeleton">Filter Skeleton</div>,
}));
jest.mock('@/hooks/useAuth', () => ({
  useAuth: () => ({ user: { id: 'test-user' }, isAuthenticated: true }),
}));
jest.mock('@/hooks/use-toast', () => ({
  toast: jest.fn(),
}));
jest.mock('@/services/apiClient'); // Mock apiClient

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false, // Disable retries for testing
    },
  },
});

const renderWithProviders = (ui: React.ReactElement, route = '/equipment') => {
  return render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouterProvider url={route}>
        {ui}
      </MemoryRouterProvider>
    </QueryClientProvider>
  );
};

describe('EquipmentPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    queryClient.clear(); // Clear query cache
  });

  it('renders equipment listings when API returns data', async () => {
    const mockEquipment = [
      { id: 'eq1', title: 'Super Server X', price: 5000, category: 'Servers', images: ['server.jpg'], description: 'A powerful server.' },
      { id: 'eq2', title: 'Network Switch Pro', price: 800, category: 'Networking', images: ['switch.jpg'], description: 'High-speed network switch.' },
    ];
    (apiClient.get as jest.Mock).mockResolvedValue({ data: mockEquipment });

    renderWithProviders(<EquipmentPage />);

    await waitFor(() => {
      expect(screen.getByText('Super Server X')).toBeInTheDocument();
      expect(screen.getByText('Network Switch Pro')).toBeInTheDocument();
      expect(screen.getAllByTestId('equipment-item')).toHaveLength(2);
    });
    expect(apiClient.get).toHaveBeenCalledWith('/equipment');
  });

  it('renders empty state when API returns no equipment', async () => {
    (apiClient.get as jest.Mock).mockResolvedValue({ data: [] });

    renderWithProviders(<EquipmentPage />);

    await waitFor(() => {
      expect(screen.getByText('Equipment Catalog Currently Empty')).toBeInTheDocument();
    });
  });

  it('renders error state when API call fails', async () => {
    const errorMessage = 'Network Error';
    (apiClient.get as jest.Mock).mockRejectedValue(new Error(errorMessage));

    renderWithProviders(<EquipmentPage />);

    await waitFor(() => {
      expect(screen.getByText(`Failed to load equipment: ${errorMessage}`)).toBeInTheDocument();
    });
  });

  it('handles 500 error gracefully and shows toast', async () => {
    const error = { response: { status: 500, headers: {} }, message: 'Server error' };
    (apiClient.get as jest.Mock).mockRejectedValue(error);

    renderWithProviders(<EquipmentPage />);

    await waitFor(() => {
      expect(screen.getByText('Failed to load equipment: Server error')).toBeInTheDocument();
    });
    expect(toast).toHaveBeenCalled();
  });

  it('shows loading skeletons initially', async () => {
    (apiClient.get as jest.Mock).mockImplementation(() => new Promise(() => {})); // Never resolves

    renderWithProviders(<EquipmentPage />);

    // Check for the main loading state container first
    expect(screen.getByTestId('loading-state-equipment')).toBeInTheDocument();
    // Then check for specific skeletons within it
    expect(screen.getAllByTestId('skeleton-card').length).toBeGreaterThan(0);
    expect(screen.getByTestId('filter-sidebar-skeleton')).toBeInTheDocument();
  });

  it('renders error state and hides skeletons on API timeout', async () => {
    const timeoutError = new Error('timeout of 15000ms exceeded');
    // Simulating Axios timeout error structure
    (timeoutError as any).code = 'ECONNABORTED';
    (apiClient.get as jest.Mock).mockRejectedValueOnce(timeoutError);

    renderWithProviders(<EquipmentPage />);

    await waitFor(() => {
      // Check that the specific loading state for equipment is gone
      expect(screen.queryByTestId('loading-state-equipment')).not.toBeInTheDocument();
      // Check that skeleton cards are no longer rendered
      expect(screen.queryAllByTestId('skeleton-card')).toHaveLength(0);
    });

    // Check for the error message display
    expect(screen.getByText(/Failed to load equipment: timeout of 15000ms exceeded/i)).toBeInTheDocument();

    // Check if toast was called with the error
    expect(toast).toHaveBeenCalledWith(expect.objectContaining({
      title: 'timeout of 15000ms exceeded',
      variant: 'destructive',
    }));
  });
});
