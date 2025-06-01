import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ServicesPage from '@/pages/ServicesPage'; // Adjust path as necessary
import apiClient from '@/services/apiClient';

// Mock apiClient
jest.mock('@/services/apiClient');
const mockedApiClient = apiClient as jest.Mocked<typeof apiClient>;

const createTestQueryClient = () => new QueryClient({
  defaultOptions: {
    queries: {
      retry: false, // Disable retries for testing
    },
  },
});

const renderWithClient = (client: QueryClient, ui: React.ReactElement) => {
  return render(
    <QueryClientProvider client={client}>
      {ui}
    </QueryClientProvider>
  );
};

// Sample service data generator
const createService = (id: number, title: string) => ({
  id: `service-${id}`,
  title: `${title} ${id}`,
  description: `Description for ${title} ${id}`,
  category: 'Test Category',
  price: 100 + id * 10,
  currency: '$',
  tags: ['test', `tag${id}`],
  author: { name: 'Test Author', id: 'test-author' },
  images: ['test-image.jpg'],
  createdAt: new Date().toISOString(),
  aiScore: 90 + id,
  rating: 4.5,
  reviewCount: 10 + id,
});

describe('ServicesPage', () => {
  let queryClient: QueryClient;

  beforeEach(() => {
    queryClient = createTestQueryClient();
    // Reset mocks before each test
    mockedApiClient.get.mockReset();
  });

  test('Test Case 1: Initial Load and Display', async () => {
    // Initial API response
    mockedApiClient.get.mockResolvedValueOnce({
      data: {
        data: [createService(1, 'Initial Service')],
        nextPage: 2,
      },
    });

    renderWithClient(queryClient, <ServicesPage />);

    // Check for loading state (skeleton)
    // Assuming Skeleton components have a specific test id or role
    expect(screen.getByTestId('loading-state')).toBeInTheDocument();

    // Wait for the initial services to be displayed
    await waitFor(() => {
      expect(screen.getByText('Initial Service 1')).toBeInTheDocument();
    });

    // Verify loading state is gone
    await waitFor(() => {
        expect(screen.queryByTestId('loading-state')).not.toBeInTheDocument();
    });
  });

  test('Test Case 2: Infinite Scroll Triggering', async () => {
    mockedApiClient.get.mockResolvedValueOnce({
      data: {
        data: [createService(1, 'Page 1 Service')],
        nextPage: 2,
      },
    });
    mockedApiClient.get.mockResolvedValueOnce({ // For second page
      data: {
        data: [createService(2, 'Page 2 Service')],
        nextPage: 3,
      },
    });

    renderWithClient(queryClient, <ServicesPage />);
    await waitFor(() => expect(screen.getByText('Page 1 Service 1')).toBeInTheDocument());

    // Mock scroll properties
    Object.defineProperty(window, 'innerHeight', { configurable: true, value: 800 });
    Object.defineProperty(document.documentElement, 'scrollTop', { configurable: true, value: 400 });
    Object.defineProperty(document.documentElement, 'offsetHeight', { configurable: true, value: 1200 }); // scrollTop + innerHeight = offsetHeight

    fireEvent.scroll(window);

    await waitFor(() => {
      expect(mockedApiClient.get).toHaveBeenCalledTimes(2);
      expect(mockedApiClient.get).toHaveBeenNthCalledWith(2, '/services?page=2');
    });

    await waitFor(() => expect(screen.getByText('Page 2 Service 2')).toBeInTheDocument());
  });

  test('Test Case 3: Loading Spinner on Fetching Next Page', async () => {
    mockedApiClient.get.mockResolvedValueOnce({
      data: {
        data: [createService(1, 'Service P1')],
        nextPage: 2,
      },
    });
    // Delay the second response to show spinner
    mockedApiClient.get.mockImplementationOnce(() =>
      new Promise(resolve =>
        setTimeout(() => resolve({
          data: { data: [createService(2, 'Service P2')], nextPage: 3 }
        }), 100)
      )
    );

    renderWithClient(queryClient, <ServicesPage />);
    await waitFor(() => expect(screen.getByText('Service P1 1')).toBeInTheDocument());

    Object.defineProperty(window, 'innerHeight', { configurable: true, value: 800 });
    Object.defineProperty(document.documentElement, 'scrollTop', { configurable: true, value: 400 });
    Object.defineProperty(document.documentElement, 'offsetHeight', { configurable: true, value: 1200 });

    fireEvent.scroll(window);

    // Spinner should be visible while fetching
    // The spinner is a Skeleton with specific classes, let's assume a test ID or a common role
    // For now, checking if the API call for the next page has been initiated
    await waitFor(() => expect(mockedApiClient.get).toHaveBeenCalledTimes(2));

    // Check for the loading spinner (Skeleton)
    // This relies on the Skeleton component being identifiable, e.g. by a role or testid
    // The ServicesPage uses: <div className="text-center py-4"><Skeleton className="h-8 w-32 mx-auto" /></div>
    // We can look for a div with these classes if no direct testid is on Skeleton
    // For simplicity, let's assume the Skeleton itself or its container has a role or a more specific query.
    // If the spinner is simple text: await screen.findByText("Loading more...");
    // If it's a Skeleton, it might be harder to query directly without more specific attributes.
    // We'll check for its presence during the fetch.
    expect(screen.getByText((content, element) => element?.classList.contains('text-center') && element.classList.contains('py-4'))).toBeInTheDocument();
    // And then check for the actual skeleton child if possible, or rely on the above container.

    await waitFor(() => expect(screen.getByText('Service P2 2')).toBeInTheDocument()); // Wait for new content
    // Spinner should be gone
    expect(screen.queryByText((content, element) => element?.classList.contains('text-center') && element.classList.contains('py-4'))).not.toBeInTheDocument();
  });

  test('Test Case 4: Appending New Items', async () => {
    mockedApiClient.get.mockResolvedValueOnce({
      data: {
        data: [createService(1, 'Item Set 1')],
        nextPage: 2,
      },
    });
    mockedApiClient.get.mockResolvedValueOnce({
      data: {
        data: [createService(2, 'Item Set 2')],
        nextPage: 3,
      },
    });

    renderWithClient(queryClient, <ServicesPage />);
    await waitFor(() => expect(screen.getByText('Item Set 1 1')).toBeInTheDocument());

    Object.defineProperty(window, 'innerHeight', { configurable: true, value: 800 });
    Object.defineProperty(document.documentElement, 'scrollTop', { configurable: true, value: 400 });
    Object.defineProperty(document.documentElement, 'offsetHeight', { configurable: true, value: 1200 });

    fireEvent.scroll(window);

    await waitFor(() => {
      expect(screen.getByText('Item Set 1 1')).toBeInTheDocument();
      expect(screen.getByText('Item Set 2 2')).toBeInTheDocument();
    });
  });

  test('Test Case 5: No More Pages', async () => {
    mockedApiClient.get.mockResolvedValueOnce({
      data: {
        data: [createService(1, 'Final Page Service')],
        nextPage: null, // No next page
      },
    });

    renderWithClient(queryClient, <ServicesPage />);
    await waitFor(() => expect(screen.getByText('Final Page Service 1')).toBeInTheDocument());

    // API should have been called once for the initial load
    expect(mockedApiClient.get).toHaveBeenCalledTimes(1);

    Object.defineProperty(window, 'innerHeight', { configurable: true, value: 800 });
    Object.defineProperty(document.documentElement, 'scrollTop', { configurable: true, value: 400 });
    Object.defineProperty(document.documentElement, 'offsetHeight', { configurable: true, value: 1200 });

    fireEvent.scroll(window);

    // Give React time to process the scroll event, if any state changes were to occur
    await new Promise(r => setTimeout(r, 50));

    // API should NOT have been called again
    expect(mockedApiClient.get).toHaveBeenCalledTimes(1);

    // Spinner should not appear
    expect(screen.queryByText((content, element) => element?.classList.contains('text-center') && element.classList.contains('py-4'))).not.toBeInTheDocument();
  });
});
