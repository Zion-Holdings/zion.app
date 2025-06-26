import { getStaticProps } from '@/pages/Categories';
import { CATEGORIES } from '@/data/categories';
import fetchMock from 'fetch-mock';

// Mock console methods
let consoleLogSpy: jest.SpyInstance;
let consoleErrorSpy: jest.SpyInstance;

describe('getStaticProps for Categories page', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    // Spy on console methods
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    fetchMock.reset(); // Reset fetch mock before each test
    process.env = { ...originalEnv }; // Reset process.env
  });

  afterEach(() => {
    // Restore console methods
    consoleLogSpy.mockRestore();
    consoleErrorSpy.mockRestore();
    process.env = originalEnv; // Restore original process.env
  });

  const sampleCategories = [
    { id: 'test1', name: 'Test Category 1', slug: 'test-cat-1', icon: 'TestIcon1' },
    { id: 'test2', name: 'Test Category 2', slug: 'test-cat-2', icon: 'TestIcon2' },
  ];
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const apiUrl = `${appUrl}/api/categories`;

  test('should return categories from API on successful fetch', async () => {
    fetchMock.getOnce(apiUrl, {
      status: 200,
      body: JSON.stringify(sampleCategories),
      headers: { 'Content-Type': 'application/json' },
    });

    const result = await getStaticProps({});

    expect(result).toEqual({ props: { categories: sampleCategories } });
    expect(fetchMock.lastUrl()).toEqual(apiUrl);
    expect(consoleLogSpy).toHaveBeenCalledWith(`Fetching categories from: ${apiUrl}`);
    expect(consoleLogSpy).toHaveBeenCalledWith('API response status: 200');
    expect(consoleLogSpy).toHaveBeenCalledWith(`API raw response: ${JSON.stringify(sampleCategories)}`);
    expect(consoleLogSpy).toHaveBeenCalledWith('Successfully fetched categories from API.');
  });

  test('should return default CATEGORIES if API response is not ok', async () => {
    fetchMock.getOnce(apiUrl, {
      status: 500,
      body: 'Server Error',
    });

    const result = await getStaticProps({});

    expect(result).toEqual({ props: { categories: CATEGORIES } });
    expect(consoleLogSpy).toHaveBeenCalledWith(`Fetching categories from: ${apiUrl}`);
    expect(consoleLogSpy).toHaveBeenCalledWith('API response status: 500');
    expect(consoleLogSpy).toHaveBeenCalledWith('API raw response: Server Error');
    expect(consoleLogSpy).toHaveBeenCalledWith('API request failed with status 500, falling back to default categories.');
  });

  test('should return default CATEGORIES if API response is ok but body is empty array', async () => {
    fetchMock.getOnce(apiUrl, {
      status: 200,
      body: JSON.stringify([]),
      headers: { 'Content-Type': 'application/json' },
    });

    const result = await getStaticProps({});

    expect(result).toEqual({ props: { categories: CATEGORIES } });
    expect(consoleLogSpy).toHaveBeenCalledWith(`Fetching categories from: ${apiUrl}`);
    expect(consoleLogSpy).toHaveBeenCalledWith('API response status: 200');
    expect(consoleLogSpy).toHaveBeenCalledWith('API raw response: []');
    expect(consoleLogSpy).toHaveBeenCalledWith('API returned empty or invalid categories, falling back to default.');
  });

  test('should return default CATEGORIES if fetch throws an error', async () => {
    const fetchError = new Error('Network error');
    fetchMock.getOnce(apiUrl, { throws: fetchError });

    const result = await getStaticProps({});

    expect(result).toEqual({ props: { categories: CATEGORIES } });
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'Error fetching categories in getStaticProps, falling back to default. Error:',
      fetchError
    );
    // The initial log for fetching still occurs
    expect(consoleLogSpy).toHaveBeenCalledWith(`Fetching categories from: ${apiUrl}`);
  });

  test('should use localhost:3000 if NEXT_PUBLIC_APP_URL is undefined and fallback', async () => {
    delete process.env.NEXT_PUBLIC_APP_URL;
    const localApiUrl = 'http://localhost:3000/api/categories';

    fetchMock.getOnce(localApiUrl, {
      status: 503, // Simulate a failure to ensure fallback
      body: 'Service Unavailable',
    });

    const result = await getStaticProps({});

    expect(fetchMock.lastUrl()).toEqual(localApiUrl);
    expect(result).toEqual({ props: { categories: CATEGORIES } });
    expect(consoleLogSpy).toHaveBeenCalledWith(`Fetching categories from: ${localApiUrl}`);
    expect(consoleLogSpy).toHaveBeenCalledWith('API response status: 503');
    expect(consoleLogSpy).toHaveBeenCalledWith('API raw response: Service Unavailable');
    expect(consoleLogSpy).toHaveBeenCalledWith('API request failed with status 503, falling back to default categories.');
  });
});
