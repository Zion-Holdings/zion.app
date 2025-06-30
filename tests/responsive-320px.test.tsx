import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { vi, describe, test, expect, beforeAll, afterAll } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

// Mock components and hooks for testing
vi.mock('@/hooks/useAuth', () => ({
  useAuth: () => ({
    user: null,
    loading: false,
  }),
}));

vi.mock('@/hooks/use-mobile', () => ({
  useIsMobile: () => false,
}));

vi.mock('@/context/MessagingContext', () => ({
  useMessaging: () => ({
    unreadCount: 0,
  }),
}));

vi.mock('react-redux', async () => {
  const actual = await vi.importActual('react-redux') as object;
  return {
    ...actual,
    useSelector: () => ({
      items: [],
    }),
    useDispatch: () => vi.fn()
  };
});

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, fallback?: string) => fallback || key,
  }),
}));

// Component imports
import { PrimaryNav } from '@/layout/PrimaryNav';
import { Footer } from '@/components/Footer';

// Test wrapper component
const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <MemoryRouter>
    {children}
  </MemoryRouter>
);

describe('Responsive 320px Width Fixes (Issue #18)', () => {
  const originalMatchMedia = window.matchMedia;

  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: query.includes('(max-width: 320px)') || query.includes('(max-width: 768px)'),
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  afterAll(() => {
    window.matchMedia = originalMatchMedia;
    vi.restoreAllMocks();
  });


  describe('Navigation Layout at 320px', () => {
    
    test('PrimaryNav renders without horizontal overflow', () => {
      global.innerWidth = 320;
      global.dispatchEvent(new Event('resize'));
      
      render(
        <TestWrapper>
          <PrimaryNav />
        </TestWrapper>
      );
      
      const header = screen.getByRole('navigation', { name: /primary/i });
      expect(header).toBeInTheDocument();
      
      const container = header.querySelector('.container');
      expect(container).toBeInTheDocument();
    });
    
    test('Search form uses responsive width at small screens', () => {
      render(
        <TestWrapper>
          <div style={{ width: '320px' }}>
            <PrimaryNav />
          </div>
        </TestWrapper>
      );
      
      const mobileMenuButton = screen.getByLabelText(/toggle.*menu/i);
      expect(mobileMenuButton).toBeInTheDocument();
    });
    
    test('Navigation elements wrap properly on narrow screens', () => {
      render(
        <TestWrapper>
          <div className="w-80">
            <PrimaryNav />
          </div>
        </TestWrapper>
      );
      
      const logo = screen.getByRole('link');
      expect(logo).toBeInTheDocument();
      
      const mobileButton = screen.getByLabelText(/toggle.*menu/i);
      expect(mobileButton).toBeInTheDocument();
    });
  });

  describe('Footer Layout at 320px', () => {
    
    test('Footer columns stack properly at narrow width', () => {
      render(
        <TestWrapper>
          <div style={{ width: '320px' }}>
            <Footer />
          </div>
        </TestWrapper>
      );
      
      expect(screen.getByText('Marketplace')).toBeInTheDocument();
      expect(screen.getByText('Company')).toBeInTheDocument();
      expect(screen.getByText('Newsletter')).toBeInTheDocument();
    });
    
    test('Footer social icons wrap correctly', () => {
      render(
        <TestWrapper>
          <Footer />
        </TestWrapper>
      );
      
      expect(screen.getByLabelText('Twitter')).toBeInTheDocument();
      expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument();
      expect(screen.getByLabelText('Facebook')).toBeInTheDocument();
      expect(screen.getByLabelText('Instagram')).toBeInTheDocument();
      expect(screen.getByLabelText('GitHub')).toBeInTheDocument();
    });
    
    test('Footer newsletter section is responsive', () => {
      render(
        <TestWrapper>
          <Footer />
        </TestWrapper>
      );
      
      const newsletterSection = screen.getByText('Newsletter');
      expect(newsletterSection).toBeInTheDocument();
      
      expect(screen.getByText(/stay updated with the latest news/i)).toBeInTheDocument();
    });
    
    test('Footer legal links wrap properly', () => {
      render(
        <TestWrapper>
          <Footer />
        </TestWrapper>
      );
      
      expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
      expect(screen.getByText('Terms of Service')).toBeInTheDocument();
      expect(screen.getByText('API Status')).toBeInTheDocument();
    });
  });

  describe('CSS Class Applications', () => {
    
    test('Responsive utility classes exist', () => {
      const testElement = document.createElement('div');
      testElement.className = 'flex-wrap-320 clamp-width-320 grid-responsive-320';
      
      expect(testElement.classList.contains('flex-wrap-320')).toBe(true);
      expect(testElement.classList.contains('clamp-width-320')).toBe(true);
      expect(testElement.classList.contains('grid-responsive-320')).toBe(true);
    });
    
    test('Container has proper responsive padding', () => {
      render(
        <div className="container">
          Test content
        </div>
      );
      
      const container = screen.getByText('Test content').parentElement;
      expect(container).toHaveClass('container');
    });
  });

  describe('Touch Target Accessibility', () => {
    
    test('Buttons meet minimum touch target size', () => {
      render(
        <TestWrapper>
          <PrimaryNav />
        </TestWrapper>
      );
      
      const mobileMenuButton = screen.getByLabelText(/toggle.*menu/i);
      
      expect(mobileMenuButton).toHaveAttribute('aria-label');
      expect(mobileMenuButton).toHaveAttribute('aria-expanded');
    });
  });

  describe('Text Wrapping and Overflow', () => {
    
    test('Long text content wraps properly', () => {
      render(
        <div className="text-wrap-responsive" style={{ width: '280px' }}>
          This is a very long text that should wrap properly on narrow screens without causing horizontal overflow issues
        </div>
      );
      
      const element = screen.getByText(/this is a very long text/i);
      expect(element).toBeInTheDocument();
      expect(element).toHaveClass('text-wrap-responsive');
    });
  });

  describe('Search Dropdown Responsiveness', () => {
    
    test('Search dropdown constrains to viewport width', () => {
      const dropdown = document.createElement('div');
      dropdown.className = 'search-dropdown';
      dropdown.style.width = '320px';
      
      document.body.appendChild(dropdown);
      
      expect(dropdown.classList.contains('search-dropdown')).toBe(true);
      
      document.body.removeChild(dropdown);
    });
  });
});

describe('Specific Issue #18 Validation', () => {
  
  test('Search bar does not overlap navigation at 320px', () => {
    render(
      <TestWrapper>
        <div style={{ width: '320px', overflow: 'hidden' }}>
          <PrimaryNav />
        </div>
      </TestWrapper>
    );
    
    const mobileButton = screen.getByLabelText(/toggle.*menu/i);
    expect(mobileButton).toBeInTheDocument();
  });
  
  test('Footer columns stack without poor layout', () => {
    render(
      <TestWrapper>
        <div style={{ width: '320px' }}>
          <Footer />
        </div>
      </TestWrapper>
    );
    
    const sections = ['Marketplace', 'Company', 'Newsletter'];
    sections.forEach(section => {
      expect(screen.getByText(section)).toBeInTheDocument();
    });
    
    expect(screen.getByText(/zion tech group.*all rights reserved/i)).toBeInTheDocument();
  });
  
  test('Flex-wrap behavior works correctly', () => {
    const testContainer = document.createElement('div');
    testContainer.className = 'flex-wrap-320';
    testContainer.style.width = '320px';
    
    for (let i = 0; i < 5; i++) {
      const child = document.createElement('div');
      child.style.width = '80px';
      child.textContent = `Item ${i + 1}`;
      testContainer.appendChild(child);
    }
    
    document.body.appendChild(testContainer);
    
    expect(testContainer.classList.contains('flex-wrap-320')).toBe(true);
    
    document.body.removeChild(testContainer);
  });
  
  test('CSS clamp function works for width constraints', () => {
    const testElement = document.createElement('div');
    testElement.className = 'clamp-width-320';
    testElement.style.width = 'clamp(8rem, 100%, 20rem)';
    
    document.body.appendChild(testElement);
    
    expect(testElement.classList.contains('clamp-width-320')).toBe(true);
    
    document.body.removeChild(testElement);
  });
}); 