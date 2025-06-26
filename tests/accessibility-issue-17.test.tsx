import { render, screen, fireEvent } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import React from 'react';
// import { vi } from 'vitest'; // Removed Vitest import

// Components to test for Issue #17 fixes
import UserProfileDropdown from '@/components/header/UserProfileDropdown';
import { ServiceQuoteModal } from '@/components/ServiceQuoteModal';

// Mock the useAuth hook
jest.mock('@/hooks/useAuth', () => ({ // Changed vi.mock to jest.mock
  useAuth: () => ({
    user: {
      name: 'Test User',
      displayName: 'Test User',
      avatarUrl: '/test-avatar.jpg'
    },
    logout: jest.fn(), // Changed vi.fn to jest.fn
  }),
}));

expect.extend(toHaveNoViolations);

describe('Accessibility Fixes for Issue #17', () => {
  
  test('UserProfileDropdown: Menu items are Tab-focusable', async () => {
    const user = userEvent.setup();
    render(<UserProfileDropdown />);
    
    // Open the dropdown
    const triggerButton = screen.getByRole('button', { name: /user profile/i });
    await user.click(triggerButton);
    
    // Check that menu items are present and focusable
    const profileLink = screen.getByRole('menuitem', { name: /profile/i });
    const ordersLink = screen.getByRole('menuitem', { name: /orders/i });
    const settingsLink = screen.getByRole('menuitem', { name: /settings/i });
    const logoutButton = screen.getByRole('menuitem', { name: /logout/i });
    
    // Verify menu items don't have tabIndex={-1}
    expect(profileLink).not.toHaveAttribute('tabindex', '-1');
    expect(ordersLink).not.toHaveAttribute('tabindex', '-1');
    expect(settingsLink).not.toHaveAttribute('tabindex', '-1');
    expect(logoutButton).not.toHaveAttribute('tabindex', '-1');
    
    // Test keyboard navigation
    await user.keyboard('{ArrowDown}');
    expect(profileLink).toHaveFocus();
    
    await user.keyboard('{ArrowDown}');
    expect(ordersLink).toHaveFocus();
    
    await user.keyboard('{Escape}');
    expect(triggerButton).toHaveFocus();
  });
  
  test('UserProfileDropdown: Proper ARIA attributes', async () => {
    const user = userEvent.setup();
    render(<UserProfileDropdown />);
    
    const triggerButton = screen.getByRole('button', { name: /user profile/i });
    
    // Check initial ARIA states
    expect(triggerButton).toHaveAttribute('aria-haspopup', 'true');
    expect(triggerButton).toHaveAttribute('aria-expanded', 'false');
    expect(triggerButton).toHaveAttribute('aria-label', 'User profile');
    
    // Open dropdown and check expanded state
    await user.click(triggerButton);
    expect(triggerButton).toHaveAttribute('aria-expanded', 'true');
    
    // Check menu has proper role
    const menu = screen.getByRole('menu');
    expect(menu).toBeInTheDocument();
  });
  
  test('ServiceQuoteModal: Calendar icons have aria-hidden', () => {
    const mockService = {
      id: '1',
      title: 'Test Service',
      category: 'Test Category'
    };
    
    render(
      <ServiceQuoteModal 
        open={true} 
        onOpenChange={() => {}} 
        service={mockService}
      />
    );
    
    // Find calendar icons and verify they have aria-hidden="true"
    const calendarIcons = document.querySelectorAll('svg[data-lucide="calendar"]');
    calendarIcons.forEach(icon => {
      expect(icon).toHaveAttribute('aria-hidden', 'true');
    });
  });
  
  test('Navigation components have no accessibility violations', async () => {
    const { container } = render(<UserProfileDropdown />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  
  test('Modal components have no accessibility violations', async () => {
    const mockService = {
      id: '1',
      title: 'Test Service',
      category: 'Test Category'
    };
    
    const { container } = render(
      <ServiceQuoteModal 
        open={true} 
        onOpenChange={() => {}} 
        service={mockService}
      />
    );
    
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  
  test('Focus management works correctly', async () => {
    const user = userEvent.setup();
    render(<UserProfileDropdown />);
    
    const triggerButton = screen.getByRole('button', { name: /user profile/i });
    
    // Open dropdown with Enter key
    triggerButton.focus();
    await user.keyboard('{Enter}');
    
    // First menu item should be focused
    const profileLink = screen.getByRole('menuitem', { name: /profile/i });
    expect(profileLink).toHaveFocus();
    
    // Close with Escape and focus should return to trigger
    await user.keyboard('{Escape}');
    expect(triggerButton).toHaveFocus();
  });
  
  test('Keyboard navigation follows accessibility standards', async () => {
    const user = userEvent.setup();
    render(<UserProfileDropdown />);
    
    const triggerButton = screen.getByRole('button', { name: /user profile/i });
    await user.click(triggerButton);
    
    const menuItems = screen.getAllByRole('menuitem');
    
    // Test Arrow Down navigation
    await user.keyboard('{ArrowDown}');
    expect(menuItems[0]).toHaveFocus();
    
    await user.keyboard('{ArrowDown}');
    expect(menuItems[1]).toHaveFocus();
    
    // Test Arrow Up navigation
    await user.keyboard('{ArrowUp}');
    expect(menuItems[0]).toHaveFocus();
    
    // Test wrapping (from first to last)
    await user.keyboard('{ArrowUp}');
    expect(menuItems[menuItems.length - 1]).toHaveFocus();
  });
});

// Additional validation for common icon accessibility patterns
describe('Icon Accessibility Patterns', () => {
  
  test('Decorative icons in buttons have aria-hidden', () => {
    const TestComponent = () => (
      <button>
        <svg className="h-4 w-4" aria-hidden="true">
          <path d="..." />
        </svg>
        Button Text
      </button>
    );
    
    render(<TestComponent />);
    const icon = document.querySelector('svg');
    expect(icon).toHaveAttribute('aria-hidden', 'true');
  });
  
  test('Meaningful standalone icons have aria-label', () => {
    const TestComponent = () => (
      <button aria-label="Search">
        <svg className="h-4 w-4">
          <path d="..." />
        </svg>
      </button>
    );
    
    render(<TestComponent />);
    const button = screen.getByRole('button', { name: /search/i });
    expect(button).toHaveAttribute('aria-label', 'Search');
  });
}); 