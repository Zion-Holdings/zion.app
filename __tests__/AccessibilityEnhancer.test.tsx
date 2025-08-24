import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';

describe('AccessibilityEnhancer', () => {
  it('renders children correctly', () => {
    render(
      <AccessibilityEnhancer>
        <div data-testid="test-child">Test Content</div>
      </AccessibilityEnhancer>
    );

    expect(screen.getByTestId('test-child')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies accessibility props correctly', () => {
    render(
      <AccessibilityEnhancer
        role="button"
        aria-label="Test Button"
        tabIndex={0}
      >
        <span>Button Text</span>
      </AccessibilityEnhancer>
    );

    const element = screen.getByRole('button');
    expect(element).toHaveAttribute('aria-label', 'Test Button');
    expect(element).toHaveAttribute('tabindex', '0');
  });

  it('handles keyboard events correctly', () => {
    const mockOnKeyDown = jest.fn();
    
    render(
      <AccessibilityEnhancer
        role="button"
        onKeyDown={mockOnKeyDown}
      >
        <span>Button Text</span>
      </AccessibilityEnhancer>
    );

    const button = screen.getByRole('button');
    fireEvent.keyDown(button, { key: 'Enter' });
    
    expect(mockOnKeyDown).toHaveBeenCalled();
  });

  it('applies focus styles when focusable', () => {
    render(
      <AccessibilityEnhancer focusable={true}>
        <span>Content</span>
      </AccessibilityEnhancer>
    );

    const element = screen.getByText('Content').parentElement;
    expect(element).toHaveClass('focus:outline-none', 'focus:ring-2', 'focus:ring-blue-500');
  });

  it('disables focus when not focusable', () => {
    render(
      <AccessibilityEnhancer focusable={false}>
        <span>Content</span>
      </AccessibilityEnhancer>
    );

    const element = screen.getByText('Content').parentElement;
    expect(element).toHaveAttribute('tabindex', '-1');
  });
});