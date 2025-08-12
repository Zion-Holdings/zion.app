import { rest } from 'msw';
import { setupServer } from 'msw/node';
import {
  fetchProducts,
  fetchCategories,
  fetchTalent,
  fetchEquipment,
  getMarketplaceErrorMessage,
  marketplaceClient,
} from '../marketplace';

// Mock Supabase
jest.mock('@/integrations/supabase/client', () => ({
  supabase: {
    auth: {
      getSession: jest.fn().mockResolvedValue({
        data: { session: { access_token: 'mock-token' } },
        error: null,
      }),
      refreshSession: jest.fn().mockResolvedValue({
        data: { session: { access_token: 'mock-refreshed-token' } },
        error: null,
      }),
    },
  },
}));

// Mock data
const mockProducts = [
  {
    id: 'prod-1',
    title: 'AI Development Kit',
    description: 'Complete AI development toolkit',
    price: 299,
    currency: 'USD',
    category: 'Software',
    subcategory: 'AI Tools',
    tags: ['AI', 'Development', 'Toolkit'],
    author: {
      name: 'Tech Corp',
      id: 'tech-corp-1',
      avatarUrl: 'https://example.com/avatar.jpg',
    },
    images: ['https://example.com/product1.jpg'],
    createdAt: '2024-01-01T00:00:00Z',
    rating: 4.5,
    reviewCount: 25,
    featured: true,
    location: 'Global',
    availability: 'Available',
    brand: 'TechCorp',
  },
  {
    id: 'prod-2',
    title: 'Machine Learning Framework',
    description: 'Advanced ML framework for enterprises',
    price: 599,
    currency: 'USD',
    category: 'Software',
    subcategory: 'ML Tools',
    tags: ['ML', 'Framework', 'Enterprise'],
    author: {
      name: 'ML Solutions',
      id: 'ml-solutions-1',
      avatarUrl: 'https://example.com/avatar2.jpg',
    },
    images: ['https://example.com/product2.jpg'],
    createdAt: '2024-01-02T00:00:00Z',
    rating: 4.8,
    reviewCount: 42,
    featured: false,
    location: 'US',
    availability: 'Limited',
    brand: 'MLSolutions',
  },
];

const mockCategories = [
  { id: 'cat-1', name: 'AI Tools', slug: 'ai-tools', icon: 'Brain' },
  { id: 'cat-2', name: 'Development', slug: 'development', icon: 'Code' },
  { id: 'cat-3', name: 'Hardware', slug: 'hardware', icon: 'Cpu' },
];

const mockTalent = [
  {
    id: 'talent-1',
    name: 'John Doe',
    title: 'Senior AI Engineer',
    skills: ['Python', 'TensorFlow', 'PyTorch'],
    hourlyRate: 150,
    avatar: 'https://example.com/john.jpg',
    rating: 4.9,
    reviewCount: 67,
    availability: 'Available',
  },
  {
    id: 'talent-2',
    name: 'Jane Smith',
    title: 'Machine Learning Specialist',
    skills: ['R', 'Scikit-learn', 'Keras'],
    hourlyRate: 125,
    avatar: 'https://example.com/jane.jpg',
    rating: 4.7,
    reviewCount: 34,
    availability: 'Busy',
  },
];

const mockEquipment = [
  {
    id: 'eq-1',
    title: 'NVIDIA RTX 4090',
    description: 'High-performance GPU for AI workloads',
    price: 1599,
    category: 'Hardware',
    brand: 'NVIDIA',
    specifications: ['24GB GDDR6X', 'Ada Lovelace Architecture'],
    images: ['https://example.com/gpu.jpg'],
    availability: 'In Stock',
  },
  {
    id: 'eq-2',
    title: 'Intel Xeon Processor',
    description: 'Server-grade processor for enterprise applications',
    price: 2299,
    category: 'Hardware',
    brand: 'Intel',
    specifications: ['28 Cores', '56 Threads', '3.2GHz Base Clock'],
    images: ['https://example.com/cpu.jpg'],
    availability: 'Limited Stock',
  },
];

// Setup MSW server
const server = setupServer(
  // Products endpoint
  rest.get('*/products', (req, res, ctx) => {
    const page = Number(req.url.searchParams.get('page')) || 1;
    const limit = Number(req.url.searchParams.get('limit')) || 10;
    const category = req.url.searchParams.get('category');
    const search = req.url.searchParams.get('search');

    let filteredProducts = [...mockProducts];

    if (category) {
      filteredProducts = filteredProducts.filter(p => 
        p.category.toLowerCase().includes(category.toLowerCase())
      );
    }

    if (search) {
      filteredProducts = filteredProducts.filter(p => 
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedProducts = filteredProducts.slice(start, end);

    return res(ctx.status(200), ctx.json(paginatedProducts));
  }),

  // Categories endpoint
  rest.get('*/categories', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockCategories));
  }),

  // Talent endpoint
  rest.get('*/talent', (req, res, ctx) => {
    const page = Number(req.url.searchParams.get('page')) || 1;
    const limit = Number(req.url.searchParams.get('limit')) || 10;
    const skills = req.url.searchParams.get('skills')?.split(',') || [];
    const search = req.url.searchParams.get('search');

    let filteredTalent = [...mockTalent];

    if (skills.length > 0) {
      filteredTalent = filteredTalent.filter(t => 
        skills.some(skill => t.skills.some(ts => ts.toLowerCase().includes(skill.toLowerCase())))
      );
    }

    if (search) {
      filteredTalent = filteredTalent.filter(t => 
        t.name.toLowerCase().includes(search.toLowerCase()) ||
        t.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedTalent = filteredTalent.slice(start, end);

    return res(ctx.status(200), ctx.json(paginatedTalent));
  }),

  // Equipment endpoint
  rest.get('*/equipment', (req, res, ctx) => {
    const page = Number(req.url.searchParams.get('page')) || 1;
    const limit = Number(req.url.searchParams.get('limit')) || 10;
    const category = req.url.searchParams.get('category');
    const search = req.url.searchParams.get('search');

    let filteredEquipment = [...mockEquipment];

    if (category) {
      filteredEquipment = filteredEquipment.filter(e => 
        e.category.toLowerCase().includes(category.toLowerCase())
      );
    }

    if (search) {
      filteredEquipment = filteredEquipment.filter(e => 
        e.title.toLowerCase().includes(search.toLowerCase()) ||
        e.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedEquipment = filteredEquipment.slice(start, end);

    return res(ctx.status(200), ctx.json(paginatedEquipment));
  }),

  // Error simulation endpoints
  rest.get('*/products-500', (req, res, ctx) => {
    return res(ctx.status(500), ctx.json({ error: 'Internal Server Error' }));
  }),

  rest.get('*/products-404', (req, res, ctx) => {
    return res(ctx.status(404), ctx.json({ error: 'Not Found' }));
  }),

  rest.get('*/products-timeout', (req, res, ctx) => {
    // Simulate timeout by delaying response
    return res(ctx.delay(15000), ctx.status(200), ctx.json([]));
  }),
);

// Test setup
beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' });
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe('Marketplace Service', () => {
  describe('fetchProducts', () => {
    test('should fetch products successfully and return 200 response', async () => {
      const products = await fetchProducts();

      expect(products).toHaveLength(2);
      expect(products[0]).toMatchObject({
        id: 'prod-1',
        title: 'AI Development Kit',
        price: 299,
        currency: 'USD',
        category: 'Software',
      });
      expect(products[1]).toMatchObject({
        id: 'prod-2',
        title: 'Machine Learning Framework',
        price: 599,
      });
    });

    test('should handle pagination parameters', async () => {
      const products = await fetchProducts({ page: 1, limit: 1 });

      expect(products).toHaveLength(1);
      expect(products[0].id).toBe('prod-1');
    });

    test('should filter by category', async () => {
      const products = await fetchProducts({ category: 'Software' });

      expect(products).toHaveLength(2);
      expect(products.every(p => p.category === 'Software')).toBe(true);
    });

    test('should filter by search term', async () => {
      const products = await fetchProducts({ search: 'AI' });

      expect(products).toHaveLength(1);
      expect(products[0].title).toBe('AI Development Kit');
    });

    test('should return empty array on 500 error', async () => {
      // Override endpoint to return 500 error
      server.use(
        rest.get('*/products', (req, res, ctx) => {
          return res(ctx.status(500), ctx.json({ error: 'Server Error' }));
        })
      );

      const products = await fetchProducts();
      expect(products).toEqual([]);
    });

    test('should handle timeout gracefully', async () => {
      // Mock a timeout scenario
      server.use(
        rest.get('*/products', (req, res, ctx) => {
          return res(ctx.delay(15000), ctx.status(200), ctx.json([]));
        })
      );

      const products = await fetchProducts();
      expect(products).toEqual([]);
    });
  });

  describe('fetchCategories', () => {
    test('should fetch categories successfully and return 200 response', async () => {
      const categories = await fetchCategories();

      expect(categories).toHaveLength(3);
      expect(categories[0]).toMatchObject({
        id: 'cat-1',
        name: 'AI Tools',
        slug: 'ai-tools',
        icon: 'Brain',
      });
    });

    test('should return empty array on error', async () => {
      server.use(
        rest.get('*/categories', (req, res, ctx) => {
          return res(ctx.status(500), ctx.json({ error: 'Server Error' }));
        })
      );

      const categories = await fetchCategories();
      expect(categories).toEqual([]);
    });
  });

  describe('fetchTalent', () => {
    test('should fetch talent successfully and return 200 response', async () => {
      const talent = await fetchTalent();

      expect(talent).toHaveLength(2);
      expect(talent[0]).toMatchObject({
        id: 'talent-1',
        name: 'John Doe',
        title: 'Senior AI Engineer',
        hourlyRate: 150,
      });
    });

    test('should filter by skills', async () => {
      const talent = await fetchTalent({ skills: ['Python'] });

      expect(talent).toHaveLength(1);
      expect(talent[0].name).toBe('John Doe');
    });

    test('should handle search functionality', async () => {
      const talent = await fetchTalent({ search: 'Machine Learning' });

      expect(talent).toHaveLength(1);
      expect(talent[0].name).toBe('Jane Smith');
    });

    test('should return empty array on error', async () => {
      server.use(
        rest.get('*/talent', (req, res, ctx) => {
          return res(ctx.status(404), ctx.json({ error: 'Not Found' }));
        })
      );

      const talent = await fetchTalent();
      expect(talent).toEqual([]);
    });
  });

  describe('fetchEquipment', () => {
    test('should fetch equipment successfully and return 200 response', async () => {
      const equipment = await fetchEquipment();

      expect(equipment).toHaveLength(2);
      expect(equipment[0]).toMatchObject({
        id: 'eq-1',
        title: 'NVIDIA RTX 4090',
        price: 1599,
        category: 'Hardware',
        brand: 'NVIDIA',
      });
    });

    test('should filter by category', async () => {
      const equipment = await fetchEquipment({ category: 'Hardware' });

      expect(equipment).toHaveLength(2);
      expect(equipment.every(e => e.category === 'Hardware')).toBe(true);
    });

    test('should handle search functionality', async () => {
      const equipment = await fetchEquipment({ search: 'GPU' });

      expect(equipment).toHaveLength(1);
      expect(equipment[0].title).toBe('NVIDIA RTX 4090');
    });

    test('should return empty array on error', async () => {
      server.use(
        rest.get('*/equipment', (req, res, ctx) => {
          return res(ctx.status(500), ctx.json({ error: 'Server Error' }));
        })
      );

      const equipment = await fetchEquipment();
      expect(equipment).toEqual([]);
    });
  });

  describe('getMarketplaceErrorMessage', () => {
    test('should return appropriate message for 404 error', () => {
      const error = { response: { status: 404 } };
      const message = getMarketplaceErrorMessage(error);
      expect(message).toBe('The requested marketplace data was not found.');
    });

    test('should return appropriate message for 500 error', () => {
      const error = { response: { status: 500 } };
      const message = getMarketplaceErrorMessage(error);
      expect(message).toBe('Our servers are experiencing issues. Please try again later.');
    });

    test('should return appropriate message for 401 error', () => {
      const error = { response: { status: 401 } };
      const message = getMarketplaceErrorMessage(error);
      expect(message).toBe('Please log in to access marketplace data.');
    });

    test('should return appropriate message for timeout error', () => {
      const error = { code: 'ECONNABORTED' };
      const message = getMarketplaceErrorMessage(error);
      expect(message).toBe('Request timeout. Please check your connection and try again.');
    });

    test('should return generic message for unknown errors', () => {
      const error = { message: 'Unknown error' };
      const message = getMarketplaceErrorMessage(error);
      expect(message).toBe('Unable to load marketplace data. Please try again.');
    });
  });

  describe('Authentication and Token Refresh', () => {
    test('should handle 401 errors with token refresh', async () => {
      let requestCount = 0;
      server.use(
        rest.get('*/products', (req, res, ctx) => {
          requestCount++;
          if (requestCount === 1) {
            return res(ctx.status(401), ctx.json({ error: 'Unauthorized' }));
          }
          return res(ctx.status(200), ctx.json(mockProducts));
        })
      );

      const products = await fetchProducts();
      expect(products).toHaveLength(2);
      expect(requestCount).toBe(2); // First request fails, second succeeds after token refresh
    });
  });

  describe('Network Conditions', () => {
    test('should handle offline status', () => {
      // Mock navigator.onLine
      Object.defineProperty(navigator, 'onLine', {
        writable: true,
        value: false,
      });

      const error = {};
      const message = getMarketplaceErrorMessage(error);
      expect(message).toBe('No internet connection. Please check your network.');

      // Restore online status
      Object.defineProperty(navigator, 'onLine', {
        writable: true,
        value: true,
      });
    });
  });
}); 