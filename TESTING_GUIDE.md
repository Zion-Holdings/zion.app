# Testing Guide

## Overview

This guide covers comprehensive testing strategies for bolt.new.zion.app, including unit testing, integration testing, end-to-end testing, and automated testing in CI/CD pipelines.

## Testing Strategy

### Testing Pyramid
Our testing approach follows the testing pyramid principle:

1. **Unit Tests** (70%) - Fast, isolated tests for individual components
2. **Integration Tests** (20%) - Tests for component interactions
3. **End-to-End Tests** (10%) - Full application workflow tests

### Testing Goals
- Ensure code quality and reliability
- Prevent regressions
- Facilitate refactoring
- Provide documentation
- Enable continuous deployment

## Testing Tools

### Core Testing Framework
- **Jest** - Unit and integration testing
- **React Testing Library** - Component testing
- **Playwright** - End-to-end testing
- **Cypress** - Alternative E2E testing

### Testing Utilities
- **@testing-library/jest-dom** - Custom Jest matchers
- **@testing-library/user-event** - User interaction simulation
- **MSW (Mock Service Worker)** - API mocking
- **Faker.js** - Test data generation

## Unit Testing

### Component Testing

#### Basic Component Test
```typescript
// __tests__/components/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../components/Button';

describe('Button Component', () => {
  test('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveTextContent('Click me');
  });

  test('applies custom className', () => {
    render(<Button className="custom-class">Click me</Button>);
    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });
});
```

#### Testing Hooks
```typescript
// __tests__/hooks/useCounter.test.ts
import { renderHook, act } from '@testing-library/react';
import { useCounter } from '../hooks/useCounter';

describe('useCounter Hook', () => {
  test('initializes with default value', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  test('increments counter', () => {
    const { result } = renderHook(() => useCounter());
    
    act(() => {
      result.current.increment();
    });
    
    expect(result.current.count).toBe(1);
  });

  test('decrements counter', () => {
    const { result } = renderHook(() => useCounter({ initialValue: 5 }));
    
    act(() => {
      result.current.decrement();
    });
    
    expect(result.current.count).toBe(4);
  });
});
```

### Utility Function Testing

#### Pure Function Testing
```typescript
// __tests__/utils/stringUtils.test.ts
import { capitalize, truncate, slugify } from '../utils/stringUtils';

describe('String Utils', () => {
  describe('capitalize', () => {
    test('capitalizes first letter', () => {
      expect(capitalize('hello')).toBe('Hello');
    });

    test('handles empty string', () => {
      expect(capitalize('')).toBe('');
    });

    test('handles single character', () => {
      expect(capitalize('a')).toBe('A');
    });
  });

  describe('truncate', () => {
    test('truncates long strings', () => {
      expect(truncate('This is a very long string', 10)).toBe('This is a...');
    });

    test('returns original string if shorter than limit', () => {
      expect(truncate('Short', 10)).toBe('Short');
    });
  });
});
```

#### API Utility Testing
```typescript
// __tests__/utils/apiUtils.test.ts
import { fetchData, postData } from '../utils/apiUtils';

// Mock fetch globally
global.fetch = jest.fn();

describe('API Utils', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('fetchData makes GET request', async () => {
    const mockResponse = { data: 'test' };
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const result = await fetchData('/api/test');
    expect(fetch).toHaveBeenCalledWith('/api/test', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    expect(result).toEqual(mockResponse);
  });

  test('postData makes POST request', async () => {
    const postBody = { name: 'test' };
    const mockResponse = { success: true };
    
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const result = await postData('/api/test', postBody);
    expect(fetch).toHaveBeenCalledWith('/api/test', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postBody),
    });
    expect(result).toEqual(mockResponse);
  });
});
```

## Integration Testing

### API Integration Testing

#### Testing API Routes
```typescript
// __tests__/api/hello.test.ts
import { createMocks } from 'node-mocks-http';
import helloHandler from '../../pages/api/hello';

describe('/api/hello', () => {
  test('returns greeting with name', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: { name: 'John' },
    });

    await helloHandler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual({
      message: 'Hello John!',
    });
  });

  test('returns default greeting without name', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {},
    });

    await helloHandler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual({
      message: 'Hello World!',
    });
  });
});
```

#### Testing with MSW
```typescript
// __tests__/setupTests.ts
import { server } from './mocks/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// __tests__/components/UserList.test.tsx
import { rest } from 'msw';
import { server } from '../mocks/server';

describe('UserList Component', () => {
  test('displays users from API', async () => {
    const mockUsers = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
    ];

    server.use(
      rest.get('/api/users', (req, res, ctx) => {
        return res(ctx.json(mockUsers));
      })
    );

    render(<UserList />);
    
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    });
  });
});
```

### Database Integration Testing

#### Testing with Test Database
```typescript
// __tests__/utils/testDb.ts
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

let mongoServer: MongoMemoryServer;

export const setupTestDb = async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  await mongoose.connect(mongoUri);
};

export const teardownTestDb = async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
};

// __tests__/models/User.test.ts
import { setupTestDb, teardownTestDb } from '../utils/testDb';
import User from '../../models/User';

describe('User Model', () => {
  beforeAll(async () => {
    await setupTestDb();
  });

  afterAll(async () => {
    await teardownTestDb();
  });

  beforeEach(async () => {
    await User.deleteMany({});
  });

  test('creates user with valid data', async () => {
    const userData = {
      email: 'test@example.com',
      name: 'Test User',
      password: 'password123',
    };

    const user = new User(userData);
    const savedUser = await user.save();

    expect(savedUser.email).toBe(userData.email);
    expect(savedUser.name).toBe(userData.name);
    expect(savedUser.password).toBeDefined();
  });
});
```

## End-to-End Testing

### Playwright Testing

#### Basic E2E Test
```typescript
// tests/e2e/homepage.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should display main content', async ({ page }) => {
    await page.goto('/');
    
    // Check main heading
    await expect(page.locator('h1')).toContainText('bolt.new.zion.app');
    
    // Check navigation
    await expect(page.locator('nav')).toBeVisible();
    
    // Check automation stats
    await expect(page.locator('[data-testid="automation-count"]')).toContainText('227');
  });

  test('should navigate to about page', async ({ page }) => {
    await page.goto('/');
    
    // Click about link
    await page.click('a[href="/about"]');
    
    // Verify navigation
    await expect(page).toHaveURL('/about');
    await expect(page.locator('h1')).toContainText('About');
  });

  test('should handle form submission', async ({ page }) => {
    await page.goto('/contact');
    
    // Fill contact form
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('textarea[name="message"]', 'Test message');
    
    // Submit form
    await page.click('button[type="submit"]');
    
    // Verify success message
    await expect(page.locator('.success-message')).toBeVisible();
  });
});
```

#### Testing Authentication
```typescript
// tests/e2e/auth.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Authentication', () => {
  test('should login with valid credentials', async ({ page }) => {
    await page.goto('/login');
    
    // Fill login form
    await page.fill('input[name="email"]', 'user@example.com');
    await page.fill('input[name="password"]', 'password123');
    
    // Submit form
    await page.click('button[type="submit"]');
    
    // Verify redirect to dashboard
    await expect(page).toHaveURL('/dashboard');
    await expect(page.locator('.user-menu')).toBeVisible();
  });

  test('should show error with invalid credentials', async ({ page }) => {
    await page.goto('/login');
    
    // Fill login form with invalid data
    await page.fill('input[name="email"]', 'invalid@example.com');
    await page.fill('input[name="password"]', 'wrongpassword');
    
    // Submit form
    await page.click('button[type="submit"]');
    
    // Verify error message
    await expect(page.locator('.error-message')).toContainText('Invalid credentials');
  });
});
```

### Visual Regression Testing

#### Screenshot Testing
```typescript
// tests/visual/homepage.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Visual Regression', () => {
  test('homepage should match baseline', async ({ page }) => {
    await page.goto('/');
    
    // Wait for page to load completely
    await page.waitForLoadState('networkidle');
    
    // Take screenshot
    await expect(page).toHaveScreenshot('homepage.png');
  });

  test('responsive design on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveScreenshot('homepage-mobile.png');
  });
});
```

## Performance Testing

### Lighthouse Testing

#### Automated Performance Testing
```typescript
// tests/performance/lighthouse.spec.ts
import { test, expect } from '@playwright/test';
import lighthouse from 'lighthouse';

test.describe('Performance Testing', () => {
  test('should meet performance budgets', async ({ page }) => {
    const url = 'http://localhost:3000';
    
    // Run Lighthouse audit
    const { lhr } = await lighthouse(url, {
      port: 9222,
      output: 'json',
      onlyCategories: ['performance'],
    });

    // Check performance score
    expect(lhr.categories.performance.score).toBeGreaterThan(0.9);
    
    // Check Core Web Vitals
    const fcp = lhr.audits['first-contentful-paint'];
    expect(fcp.numericValue).toBeLessThan(1500); // 1.5s
    
    const lcp = lhr.audits['largest-contentful-paint'];
    expect(lcp.numericValue).toBeLessThan(2500); // 2.5s
    
    const cls = lhr.audits['cumulative-layout-shift'];
    expect(cls.numericValue).toBeLessThan(0.1);
  });
});
```

### Load Testing

#### API Load Testing
```typescript
// tests/load/api.spec.ts
import { test, expect } from '@playwright/test';

test.describe('API Load Testing', () => {
  test('should handle concurrent requests', async ({ request }) => {
    const promises = [];
    
    // Send 10 concurrent requests
    for (let i = 0; i < 10; i++) {
      promises.push(
        request.get('/api/content').then(response => {
          expect(response.status()).toBe(200);
          return response.json();
        })
      );
    }
    
    const results = await Promise.all(promises);
    expect(results).toHaveLength(10);
  });

  test('should maintain performance under load', async ({ request }) => {
    const startTime = Date.now();
    
    // Send multiple requests
    for (let i = 0; i < 50; i++) {
      const response = await request.get('/api/content');
      expect(response.status()).toBe(200);
    }
    
    const endTime = Date.now();
    const totalTime = endTime - startTime;
    
    // Should complete 50 requests in under 10 seconds
    expect(totalTime).toBeLessThan(10000);
  });
});
```

## Test Configuration

### Jest Configuration
```javascript
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/__tests__/setupTests.ts'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/$1',
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/utils/(.*)$': '<rootDir>/utils/$1',
  },
  collectCoverageFrom: [
    'components/**/*.{ts,tsx}',
    'utils/**/*.{ts,tsx}',
    'pages/**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  testMatch: [
    '<rootDir>/__tests__/**/*.test.{ts,tsx}',
    '<rootDir>/components/**/*.test.{ts,tsx}',
    '<rootDir>/utils/**/*.test.{ts,tsx}',
  ],
};
```

### Playwright Configuration
```typescript
// playwright.config.ts
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests/e2e',
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],
  webServer: {
    command: 'npm run dev',
    port: 3000,
    reuseExistingServer: !process.env.CI,
  },
};

export default config;
```

## Test Data Management

### Fixtures and Factories

#### Test Data Factories
```typescript
// __tests__/factories/userFactory.ts
import { faker } from '@faker-js/faker';
import User from '../../models/User';

export const createUser = (overrides = {}) => {
  const defaultUser = {
    email: faker.internet.email(),
    name: faker.person.fullName(),
    password: faker.internet.password(),
    role: 'user',
  };

  return { ...defaultUser, ...overrides };
};

export const createUserDocument = async (overrides = {}) => {
  const userData = createUser(overrides);
  const user = new User(userData);
  return await user.save();
};

// __tests__/factories/postFactory.ts
import { faker } from '@faker-js/faker';
import Post from '../../models/Post';

export const createPost = (overrides = {}) => {
  const defaultPost = {
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(3),
    author: faker.person.fullName(),
    tags: faker.helpers.arrayElements(['tech', 'ai', 'automation'], 2),
    published: true,
  };

  return { ...defaultPost, ...overrides };
};
```

#### Test Fixtures
```typescript
// __tests__/fixtures/testData.ts
export const testUsers = [
  {
    email: 'admin@example.com',
    name: 'Admin User',
    role: 'admin',
  },
  {
    email: 'user@example.com',
    name: 'Regular User',
    role: 'user',
  },
];

export const testPosts = [
  {
    title: 'Test Post 1',
    content: 'This is test content for post 1',
    author: 'Test Author',
    tags: ['test', 'example'],
  },
  {
    title: 'Test Post 2',
    content: 'This is test content for post 2',
    author: 'Test Author',
    tags: ['test', 'example'],
  },
];
```

## Continuous Integration Testing

### GitHub Actions Workflow
```yaml
# .github/workflows/test.yml
name: Test Suite

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    strategy:
      matrix:
        node-version: [18.x, 20.x]
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run linting
      run: npm run lint
    
    - name: Run type checking
      run: npm run type-check
    
    - name: Run unit tests
      run: npm run test:ci
    
    - name: Run integration tests
      run: npm run test:integration
    
    - name: Upload coverage
      uses: codecov/codecov-action@v3
      with:
        file: ./coverage/lcov.info

  e2e:
    runs-on: ubuntu-latest
    needs: test
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Use Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '20.x'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Install Playwright browsers
      run: npx playwright install --with-deps
    
    - name: Run E2E tests
      run: npm run test:e2e
    
    - name: Upload test results
      uses: actions/upload-artifact@v3
      if: always()
      with:
        name: playwright-report
        path: playwright-report/
        retention-days: 30
```

## Best Practices

### 1. Test Organization
- Group related tests using `describe` blocks
- Use descriptive test names
- Follow AAA pattern (Arrange, Act, Assert)
- Keep tests independent and isolated

### 2. Test Data
- Use factories for test data generation
- Avoid hardcoded test data
- Clean up test data after each test
- Use realistic but minimal test data

### 3. Performance
- Mock external dependencies
- Use `beforeAll` and `afterAll` for expensive setup
- Avoid testing implementation details
- Focus on behavior, not implementation

### 4. Maintenance
- Update tests when changing functionality
- Remove obsolete tests
- Keep test code clean and readable
- Document complex test scenarios

## Troubleshooting

### Common Issues

1. **Tests failing intermittently:**
   - Add proper waiting mechanisms
   - Use `waitFor` for async operations
   - Check for race conditions

2. **Slow test execution:**
   - Mock external API calls
   - Use test database instead of real database
   - Optimize test setup and teardown

3. **Coverage issues:**
   - Check for untested edge cases
   - Ensure all code paths are covered
   - Review coverage thresholds

### Debug Mode

Enable debug mode for detailed test information:

```bash
# Jest debug mode
npm run test -- --verbose

# Playwright debug mode
npx playwright test --debug

# Show test coverage
npm run test -- --coverage
```

## Resources

### Documentation
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

### Tools
- [MSW](https://mswjs.io/) - API mocking
- [Faker.js](https://fakerjs.dev/) - Test data generation
- [Testing Library](https://testing-library.com/) - Testing utilities
- [Jest](https://jestjs.io/) - Testing framework

For additional testing support or questions, please refer to the documentation or contact the development team.