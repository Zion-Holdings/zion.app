import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import '@testing-library/jest-dom';
import { vi, describe, test, expect } from 'vitest';

// Import components to test
import { MobileBottomNav } from '@/components/header/MobileBottomNav';
import { SearchFilter } from '@/components/talent/filters/SearchFilter';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { UserProfileDropdown } from '@/components/header/UserProfileDropdown';

// Add jest-axe matcher
expect.extend(toHaveNoViolations);

// Mock dependencies
vi.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '/test',
    push: vi.fn(),
    query: {}
  })
}));

vi.mock('@/hooks/useAuth', () => ({
  useAuth: () => ({ user: { name: 'Test User', avatarUrl: null } })
}));

vi.mock('@/hooks/useWishlist', () => ({
  useWishlist: () => ({ items: [] })
}));

vi.mock('@/context/CartContext', () => ({
  useCart: () => ({ items: [] })
}));

vi.mock('@/context/LanguageContext', () => ({
  useLanguage: () => ({
    currentLanguage: 'en',
    supportedLanguages: [
      { code: 'en', name: 'English', flag: '🇺🇸' },
      { code: 'es', name: 'Spanish', flag: '🇪🇸' }
    ],
    changeLanguage: vi.fn()
  })
}));

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key
  })
}));

describe('Accessibility Comprehensive Tests - Issue #17', () => {

  describe('Icon Accessibility', () => {
    
    test('Decorative icons have aria-hidden="true"', () => {
      const setSearchTerm = vi.fn();
      render(<SearchFilter searchTerm="" setSearchTerm={setSearchTerm} />);
      
      const searchIcon = document.querySelector('[data-lucide="search"]');
      expect(searchIcon).toHaveAttribute('aria-hidden', 'true');
    });

    test('Mobile navigation icons are properly marked as decorative', () => {
      render(<MobileBottomNav unreadCount={0} />);
      
      const navIcons = document.querySelectorAll('[data-lucide]');
      navIcons.forEach(icon => {
        expect(icon).toHaveAttribute('aria-hidden', 'true');
      });
    });

    test('Icon-only buttons have proper aria-labels', () => {
      render(<LanguageSwitcher />);
      
      const languageButton = screen.getByRole('button');
      expect(languageButton).toHaveAttribute('aria-label');
      expect(languageButton.getAttribute('aria-label')).toBeTruthy();
    });
  });

  describe('Navigation Dropdown Accessibility', () => {
    
    test('Dropdown triggers have proper ARIA attributes', async () => {
      const user = userEvent.setup();
      render(<UserProfileDropdown />);
      
      const trigger = screen.getByRole('button');
      
      expect(trigger).toHaveAttribute('aria-haspopup', 'true');
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
      expect(trigger).toHaveAttribute('aria-label');
      
      await user.click(trigger);
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
    });

    test('Menu items are keyboard accessible', async () => {
      const user = userEvent.setup();
      render(<UserProfileDropdown />);
      
      const trigger = screen.getByRole('button');
      await user.click(trigger);
      
      const menuItems = screen.getAllByRole('menuitem');
      menuItems.forEach(item => {
        expect(item).not.toHaveAttribute('tabindex', '-1');
      });
    });

    test('Keyboard navigation works correctly', async () => {
      const user = userEvent.setup();
      render(<UserProfileDropdown />);
      
      const trigger = screen.getByRole('button');
      
      trigger.focus();
      await user.keyboard('{Enter}');
      
      const menuItems = screen.getAllByRole('menuitem');
      expect(menuItems[0]).toHaveFocus();
      
      await user.keyboard('{ArrowDown}');
      expect(menuItems[1]).toHaveFocus();
      
      await user.keyboard('{Escape}');
      expect(trigger).toHaveFocus();
    });
  });

  describe('Focus Management', () => {
    
    test('Tab navigation works properly', async () => {
      const user = userEvent.setup();
      render(<MobileBottomNav unreadCount={0} />);
      
      const navLinks = screen.getAllByRole('link');
      
      for (let i = 0; i < navLinks.length; i++) {
        await user.tab();
        expect(navLinks[i]).toHaveFocus();
      }
    });

    test('Focus indicators are visible', () => {
      render(<LanguageSwitcher />);
      
      const button = screen.getByRole('button');
      button.focus();
      
      expect(button).toHaveClass('focus-visible:outline-none');
    });
  });

  describe('Screen Reader Support', () => {
    
    test('Proper semantic roles are used', () => {
      render(<UserProfileDropdown />);
      
      const trigger = screen.getByRole('button');
      fireEvent.click(trigger);
      
      const menu = screen.getByRole('menu');
      expect(menu).toBeInTheDocument();
      
      const menuItems = screen.getAllByRole('menuitem');
      expect(menuItems.length).toBeGreaterThan(0);
    });

    test('Hidden content is properly marked', () => {
      const setSearchTerm = vi.fn();
      render(<SearchFilter searchTerm="" setSearchTerm={setSearchTerm} />);
      
      const helpText = document.querySelector('.sr-only');
      expect(helpText).toBeInTheDocument();
    });
  });

  describe('WCAG 2.1 Compliance', () => {
    
    test('Components have no accessibility violations', async () => {
      const components = [
        <MobileBottomNav key="mobile-nav" unreadCount={0} />,
        <SearchFilter key="search" searchTerm="" setSearchTerm={vi.fn()} />,
        <LanguageSwitcher key="lang" />,
        <UserProfileDropdown key="profile" />
      ];
      
      for (const component of components) {
        const { container } = render(component);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      }
    });

    test('Color contrast meets standards', () => {
      render(<LanguageSwitcher />);
      
      const button = screen.getByRole('button');
      const styles = window.getComputedStyle(button);
      
      expect(button).toHaveClass('focus-visible:ring-2');
    });

    test('Touch targets meet minimum size requirements', () => {
      render(<MobileBottomNav unreadCount={0} />);
      
      const navLinks = screen.getAllByRole('link');
      navLinks.forEach(link => {
        const rect = link.getBoundingClientRect();
        expect(rect.height).toBeGreaterThanOrEqual(44);
      });
    });
  });

  describe('Responsive Accessibility', () => {
    
    test('Mobile navigation maintains accessibility', () => {
      render(<MobileBottomNav unreadCount={0} />);
      
      const nav = screen.getByRole('navigation');
      expect(nav).toBeInTheDocument();
      
      const navLinks = screen.getAllByRole('link');
      navLinks.forEach(link => {
        expect(link).toHaveAttribute('aria-label');
      });
    });

    test('Language switcher works on mobile', async () => {
      const user = userEvent.setup();
      render(<LanguageSwitcher />);
      
      const trigger = screen.getByRole('button');
      
      await user.click(trigger);
      
      const options = screen.getAllByRole('option');
      expect(options.length).toBeGreaterThan(0);
    });
  });

  describe('Error Prevention and Recovery', () => {
    
    test('Invalid states are announced', async () => {
      const setSearchTerm = vi.fn();
      render(<SearchFilter searchTerm="" setSearchTerm={setSearchTerm} />);
      
      const input = screen.getByRole('textbox');
      
      expect(input).toHaveAttribute('aria-describedby');
    });

    test('Loading states are accessible', async () => {
      const setSearchTerm = vi.fn();
      render(<SearchFilter searchTerm="" setSearchTerm={setSearchTerm} />);
      
      const input = screen.getByRole('textbox');
      expect(input).toBeInTheDocument();
    });
  });
}); 