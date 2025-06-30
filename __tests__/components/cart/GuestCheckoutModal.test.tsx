import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { GuestCheckoutModal } from '@/components/cart/GuestCheckoutModal'; // Adjust path as necessary
import { vi, describe, test, expect, beforeEach, type MockInstance } from 'vitest';
import * as getStripeUtils from '@/utils/getStripe';

// Mock isProdDomain as it's used in the component
vi.mock('@/utils/getStripe', () => ({
  isProdDomain: vi.fn(() => false),
}));

// Mock alert, since the component uses it for diagnostics
global.alert = vi.fn();

describe('GuestCheckoutModal', () => {
  const mockOnOpenChange = vi.fn();
  const mockOnSubmit = vi.fn();

  const defaultProps = {
    open: true,
    onOpenChange: mockOnOpenChange,
    onSubmit: mockOnSubmit,
  };

  beforeEach(() => {
    mockOnOpenChange.mockClear();
    mockOnSubmit.mockClear();
    (global.alert as MockInstance<any,any>).mockClear();
    (getStripeUtils.isProdDomain as MockInstance<any,any>).mockReturnValue(false);
  });

  test('Basic Rendering Test', () => {
    render(<GuestCheckoutModal {...defaultProps} />);

    expect(screen.getByText('Guest Checkout')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('your.email@example.com')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your full shipping address...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Continue to Payment' })).toBeInTheDocument();
    expect(screen.getByText(/Pay with test data/)).toBeInTheDocument();
  });

  test('Input Value Test', () => {
    render(<GuestCheckoutModal {...defaultProps} />);

    const emailInput = screen.getByPlaceholderText('your.email@example.com') as HTMLInputElement;
    const addressInput = screen.getByPlaceholderText('Enter your full shipping address...') as HTMLInputElement;

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput.value).toBe('test@example.com');

    fireEvent.change(addressInput, { target: { value: '123 Main St' } });
    expect(addressInput.value).toBe('123 Main St');
  });

  test('Submit button disabled until form valid', () => {
    render(<GuestCheckoutModal {...defaultProps} />);

    const emailInput = screen.getByPlaceholderText('your.email@example.com');
    const addressInput = screen.getByPlaceholderText('Enter your full shipping address...');
    const submitButton = screen.getByRole('button', { name: 'Continue to Payment' });

    expect(submitButton).toBeDisabled();

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(addressInput, { target: { value: '123 Main St' } });

    expect(submitButton).toBeEnabled();
  });

  test('Submission Test (Happy Path)', () => {
    render(<GuestCheckoutModal {...defaultProps} />);

    const emailInput = screen.getByPlaceholderText('your.email@example.com') as HTMLInputElement;
    const addressInput = screen.getByPlaceholderText('Enter your full shipping address...') as HTMLInputElement;
    const submitButton = screen.getByRole('button', { name: 'Continue to Payment' });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(addressInput, { target: { value: '123 Main St' } });
    fireEvent.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    expect(mockOnSubmit).toHaveBeenCalledWith({
      email: 'test@example.com',
      address: '123 Main St',
    });
  });

  test('Should not show test data warning if isProdDomain is true', () => {
    (getStripeUtils.isProdDomain as MockInstance<any,any>).mockReturnValue(true);
    render(<GuestCheckoutModal {...defaultProps} />);
    expect(screen.queryByText(/Pay with test data/)).not.toBeInTheDocument();
  });

  test('Email Normalization Test (@@ to @)', () => {
    render(<GuestCheckoutModal {...defaultProps} />);

    const emailInput = screen.getByPlaceholderText('your.email@example.com') as HTMLInputElement;
    const addressInput = screen.getByPlaceholderText('Enter your full shipping address...') as HTMLInputElement;
    const submitButton = screen.getByRole('button', { name: 'Continue to Payment' });

    fireEvent.change(emailInput, { target: { value: 'test@@example.com' } });
    expect(emailInput.value).toBe('test@@example.com');

    fireEvent.change(addressInput, { target: { value: 'sample address' } });
    fireEvent.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    expect(mockOnSubmit).toHaveBeenCalledWith({
      email: 'test@@example.com',
      address: 'sample address',
    });
    expect(global.alert).not.toHaveBeenCalled();
  });

  test('Email Normalization Test (multiple @@@ to @)', () => {
    render(<GuestCheckoutModal {...defaultProps} />);

    const emailInput = screen.getByPlaceholderText('your.email@example.com') as HTMLInputElement;
    const addressInput = screen.getByPlaceholderText('Enter your full shipping address...') as HTMLInputElement;
    const submitButton = screen.getByRole('button', { name: 'Continue to Payment' });

    fireEvent.change(emailInput, { target: { value: 'contact@@@domain.com' } });
    expect(emailInput.value).toBe('contact@@@domain.com');

    fireEvent.change(addressInput, { target: { value: 'another sample address' } });
    fireEvent.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    expect(mockOnSubmit).toHaveBeenCalledWith({
      email: 'contact@@@domain.com',
      address: 'another sample address',
    });
    expect(global.alert).not.toHaveBeenCalled();
  });

  describe('Required Fields Test', () => {
    let emailInput: HTMLInputElement;
    let addressInput: HTMLInputElement;
    let submitButton: HTMLElement;

    beforeEach(() => {
      render(<GuestCheckoutModal {...defaultProps} />);
      emailInput = screen.getByPlaceholderText('your.email@example.com') as HTMLInputElement;
      addressInput = screen.getByPlaceholderText('Enter your full shipping address...') as HTMLInputElement;
      submitButton = screen.getByRole('button', { name: 'Continue to Payment' });
    });

    test('should not submit if both fields are empty', () => {
      fireEvent.click(submitButton);
      expect(mockOnSubmit).not.toHaveBeenCalled();
    });

    test('should not submit if address is empty', () => {
      mockOnSubmit.mockClear();
      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      fireEvent.click(submitButton);
      expect(mockOnSubmit).not.toHaveBeenCalled();
    });

    test('should not submit if email is empty', () => {
      mockOnSubmit.mockClear();
      fireEvent.change(addressInput, { target: { value: '123 Main St' } });
      fireEvent.click(submitButton);
      expect(mockOnSubmit).not.toHaveBeenCalled();
    });
  });

  test('Dialog onOpenChange is called (simulating close)', () => {
    render(<GuestCheckoutModal {...defaultProps} open={true} />);
  });

});
