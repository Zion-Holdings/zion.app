import React from 'react';
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { GuestCheckoutModal } from '@/components/cart/GuestCheckoutModal'; // Adjust path as necessary

// Mock isProdDomain as it's used in the component
jest.mock('@/utils/getStripe', () => ({
  isProdDomain: jest.fn(() => false), // Default to false (not prod) to show test data warning
}));

// Mock alert, since the component uses it for diagnostics
global.alert = jest.fn();

describe('GuestCheckoutModal', () => {
  const mockOnOpenChange = jest.fn();
  const mockOnSubmit = jest.fn();

  const defaultProps = {
    open: true,
    onOpenChange: mockOnOpenChange,
    onSubmit: mockOnSubmit,
  };

  beforeEach(() => {
    // Reset mocks before each test
    mockOnOpenChange.mockClear();
    mockOnSubmit.mockClear();
    (global.alert as jest.Mock).mockClear();
    // Reset the mock for isProdDomain if needed for specific tests
    (jest.requireMock('@/utils/getStripe') as { isProdDomain: jest.Mock }).isProdDomain.mockReturnValue(false);
  });

  test('Basic Rendering Test', () => {
    render(<GuestCheckoutModal {...defaultProps} />);

    expect(screen.getByText('Guest Checkout')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Shipping Address')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Continue to Payment' })).toBeInTheDocument();
    // Test data warning should be visible by default mock
    expect(screen.getByText(/Pay with test data/)).toBeInTheDocument();
  });

  test('Input Styling Test', () => {
    render(<GuestCheckoutModal {...defaultProps} />);

    const emailInput = screen.getByPlaceholderText('Email');
    const addressInput = screen.getByPlaceholderText('Shipping Address');

    expect(emailInput).toHaveClass('guest-checkout-modal-input');
    expect(addressInput).toHaveClass('guest-checkout-modal-input');
  });

  test('Input Value Test', async () => {
    render(<GuestCheckoutModal {...defaultProps} />);

    const emailInput = screen.getByPlaceholderText('Email') as HTMLInputElement;
    const addressInput = screen.getByPlaceholderText('Shipping Address') as HTMLInputElement;

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    });
    expect(emailInput.value).toBe('test@example.com');

    await act(async () => {
      fireEvent.change(addressInput, { target: { value: '123 Main St' } });
    });
    expect(addressInput.value).toBe('123 Main St');
  });

  test('Submit button disabled until form valid', async () => {
    render(<GuestCheckoutModal {...defaultProps} />);

    const emailInput = screen.getByPlaceholderText('Email');
    const addressInput = screen.getByPlaceholderText('Shipping Address');
    const submitButton = screen.getByRole('button', { name: 'Continue to Payment' });

    expect(submitButton).toBeDisabled();

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      fireEvent.change(addressInput, { target: { value: '123 Main St' } });
    });

    expect(submitButton).toBeEnabled();
  });

  test('Submission Test (Happy Path)', async () => {
    render(<GuestCheckoutModal {...defaultProps} />);

    const emailInput = screen.getByPlaceholderText('Email') as HTMLInputElement;
    const addressInput = screen.getByPlaceholderText('Shipping Address') as HTMLInputElement;
    const submitButton = screen.getByRole('button', { name: 'Continue to Payment' });

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      fireEvent.change(addressInput, { target: { value: '123 Main St' } });
    });

    await act(async () => {
      fireEvent.click(submitButton);
    });

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    expect(mockOnSubmit).toHaveBeenCalledWith({
      email: 'test@example.com',
      address: '123 Main St',
    });
  });

  test('Should not show test data warning if isProdDomain is true', () => {
    (jest.requireMock('@/utils/getStripe') as { isProdDomain: jest.Mock }).isProdDomain.mockReturnValue(true);
    render(<GuestCheckoutModal {...defaultProps} />);
    expect(screen.queryByText(/Pay with test data/)).not.toBeInTheDocument();
  });

  test('Email Normalization Test (@@ to @)', async () => { // Already async, no change needed here specifically for this error, but reviewing all act calls.
    render(<GuestCheckoutModal {...defaultProps} />);

    const emailInput = screen.getByPlaceholderText('Email') as HTMLInputElement;
    const addressInput = screen.getByPlaceholderText('Shipping Address') as HTMLInputElement;
    const submitButton = screen.getByRole('button', { name: 'Continue to Payment' });

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: 'test@@example.com' } });
    });
    expect(emailInput.value).toBe('test@example.com'); // Check normalization during typing

    await act(async () => {
      fireEvent.change(addressInput, { target: { value: 'sample address' } });
    });
    await act(async () => {
      fireEvent.click(submitButton);
    });

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    expect(mockOnSubmit).toHaveBeenCalledWith({
      email: 'test@example.com',
      address: 'sample address',
    });
    // Check if alert was called due to original '@@'
    expect(global.alert).toHaveBeenCalledWith(expect.stringContaining("Original email contained '@@'"));
  });

  test('Email Normalization Test (multiple @@@ to @)', async () => { // Already async, reviewing act calls.
    render(<GuestCheckoutModal {...defaultProps} />);

    const emailInput = screen.getByPlaceholderText('Email') as HTMLInputElement;
    const addressInput = screen.getByPlaceholderText('Shipping Address') as HTMLInputElement;
    const submitButton = screen.getByRole('button', { name: 'Continue to Payment' });

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: 'contact@@@domain.com' } });
    });
    expect(emailInput.value).toBe('contact@domain.com'); // Check normalization during typing

    await act(async () => {
      fireEvent.change(addressInput, { target: { value: 'another sample address' } });
    });
    await act(async () => {
      fireEvent.click(submitButton);
    });

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    expect(mockOnSubmit).toHaveBeenCalledWith({
      email: 'contact@domain.com',
      address: 'another sample address',
    });
    // Check if alert was called due to original '@@@'
    expect(global.alert).toHaveBeenCalledWith(expect.stringContaining("Original email contained '@@'"));
  });

  describe('Required Fields Test', () => {
    // Note: These tests simulate the behavior if HTML5 validation prevents submission.
    // If the form submission is allowed and validation is purely backend, these will fail.
    // The component's current structure relies on the `required` prop on `Input` fields.
    // `fireEvent.click` on a submit button for a form with `required` fields that are empty
    // might not trigger the `onSubmit` handler in a testing environment if the browser's
    // default validation behavior is perfectly mimicked. However, JSDOM doesn't implement
    // HTML5 form validation to that extent, so `onSubmit` might still be called.
    // If `onSubmit` is called, the test should check that it's called with empty values
    // or that a custom validation logic (if any) within the component prevents proceeding.
    // For this component, it directly calls `onSubmit` prop.

    let emailInput: HTMLInputElement;
    let addressInput: HTMLInputElement;
    let submitButton: HTMLElement;

    beforeEach(() => {
      render(<GuestCheckoutModal {...defaultProps} />);
      emailInput = screen.getByPlaceholderText('Email') as HTMLInputElement;
      addressInput = screen.getByPlaceholderText('Shipping Address') as HTMLInputElement;
      submitButton = screen.getByRole('button', { name: 'Continue to Payment' });
    });

    test('should not submit if both fields are empty', async () => {
      await act(async () => {
        fireEvent.click(submitButton);
      });
      expect(mockOnSubmit).not.toHaveBeenCalled();
    });

    test('should not submit if address is empty', async () => {
      mockOnSubmit.mockClear();
      await act(async () => {
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      });
      await act(async () => {
        fireEvent.click(submitButton);
      });
      expect(mockOnSubmit).not.toHaveBeenCalled();
    });

    test('should not submit if email is empty', async () => {
      mockOnSubmit.mockClear();
      await act(async () => {
        fireEvent.change(addressInput, { target: { value: '123 Main St' } });
      });
      await act(async () => {
        fireEvent.click(submitButton);
      });
      expect(mockOnSubmit).not.toHaveBeenCalled();
    });
  });

  // Test for dialog close, though onOpenChange is opaque here
  test('Dialog onOpenChange is called (simulating close)', () => {
    render(<GuestCheckoutModal {...defaultProps} open={true} />);
    // This is a placeholder, actual close simulation depends on Dialog internals
  });

  describe('Validation Messages and Behavior', () => {
    test('should display required messages for empty fields on initial render and disable submit', async () => {
      render(<GuestCheckoutModal {...defaultProps} />);

      await waitFor(() => {
        expect(screen.getByText('Email is required')).toBeInTheDocument();
        expect(screen.getByText('Address is required')).toBeInTheDocument();
      });
      expect(screen.getByRole('button', { name: 'Continue to Payment' })).toBeDisabled();
    });

    test('should remove email required message when email is filled, but keep address required', async () => {
      render(<GuestCheckoutModal {...defaultProps} />);
      const emailInput = screen.getByPlaceholderText('Email');

      // Initial errors
      await waitFor(() => {
        expect(screen.getByText('Email is required')).toBeInTheDocument();
        expect(screen.getByText('Address is required')).toBeInTheDocument();
      });

      await act(async () => {
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      });

      // Email error should be gone, address error remains
      expect(screen.queryByText('Email is required')).not.toBeInTheDocument();
      expect(await screen.findByText('Address is required')).toBeInTheDocument(); // Address is still required
      expect(screen.getByRole('button', { name: 'Continue to Payment' })).toBeDisabled();
    });

    test('should display invalid email message for incorrect format', async () => {
      render(<GuestCheckoutModal {...defaultProps} />);
      const emailInput = screen.getByPlaceholderText('Email');

      // Initial "Email is required"
      await waitFor(() => {
        expect(screen.getByText('Email is required')).toBeInTheDocument();
      });

      await act(async () => {
        fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
      });

      // Now it should be "Enter a valid email"
      expect(await screen.findByText('Enter a valid email')).toBeInTheDocument();
      expect(screen.queryByText('Email is required')).not.toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Continue to Payment' })).toBeDisabled();
    });

    test('should re-display required message if field is cleared after input', async () => {
      render(<GuestCheckoutModal {...defaultProps} />);
      const emailInput = screen.getByPlaceholderText('Email');

      // Fill then clear
      await act(async () => {
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      });
      expect(screen.queryByText('Email is required')).not.toBeInTheDocument(); // Valid input, so no "required" message

      await act(async () => {
        fireEvent.change(emailInput, { target: { value: '' } }); // Clear the input
      });
      expect(await screen.findByText('Email is required')).toBeInTheDocument(); // "Required" message should reappear
      expect(screen.getByRole('button', { name: 'Continue to Payment' })).toBeDisabled();
    });

    test('submit button enables only when both fields are valid', async () => {
      render(<GuestCheckoutModal {...defaultProps} />);
      const emailInput = screen.getByPlaceholderText('Email');
      const addressInput = screen.getByPlaceholderText('Shipping Address');
      const submitButton = screen.getByRole('button', { name: 'Continue to Payment' });

      // Initial state
      expect(submitButton).toBeDisabled();
      await waitFor(() => {
        expect(screen.getByText('Email is required')).toBeInTheDocument();
        expect(screen.getByText('Address is required')).toBeInTheDocument();
      });

      // Fill email
      await act(async () => {
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      });
      expect(screen.queryByText('Email is required')).not.toBeInTheDocument();
      expect(submitButton).toBeDisabled(); // Address still missing

      // Fill address
      await act(async () => {
        fireEvent.change(addressInput, { target: { value: '123 Main St' } });
      });
      expect(screen.queryByText('Address is required')).not.toBeInTheDocument();

      // Wait for react-hook-form to update validity state
      // screen.debug(submitButton); // Useful for debugging
      await waitFor(() => expect(submitButton).toBeEnabled());
    });
  });
});
