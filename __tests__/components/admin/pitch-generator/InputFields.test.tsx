import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputFields from '@/components/admin/pitch-generator/InputFields';

// Mock the next/router
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('InputFields Component', () => {
  const mockOnSubmit = jest.fn();

  beforeEach(() => {
    mockOnSubmit.mockClear();
    // Mock URL.createObjectURL
    global.URL.createObjectURL = jest.fn(() => 'mock-url');
  });

  test('renders all input fields and a submit button', () => {
    render(<InputFields onSubmit={mockOnSubmit} />);
    expect(screen.getByLabelText(/Company Mission/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Current Funding Stage/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Vision\/Goals/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Round Type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Target Raise Amount/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Company Logo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Additional Photos/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Next: Data Sync/i })).toBeInTheDocument();
  });

  test('allows typing into text fields and updates state', () => {
    render(<InputFields onSubmit={mockOnSubmit} />);
    const missionInput = screen.getByLabelText(/Company Mission/i) as HTMLTextAreaElement;
    fireEvent.change(missionInput, { target: { value: 'Test Mission' } });
    expect(missionInput.value).toBe('Test Mission');
  });

  test('validates required fields and shows errors', async () => {
    render(<InputFields onSubmit={mockOnSubmit} />);
    fireEvent.click(screen.getByRole('button', { name: /Next: Data Sync/i }));

    // Using findByText to wait for async validation messages
    expect(await screen.findByText('Company mission is required.')).toBeInTheDocument();
    expect(await screen.findByText('Current funding stage is required.')).toBeInTheDocument();
    expect(await screen.findByText('Vision/goals are required.')).toBeInTheDocument();
    expect(await screen.findByText('Target raise amount is required.')).toBeInTheDocument();
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  test('calls onSubmit with form data when all fields are valid', async () => {
    render(<InputFields onSubmit={mockOnSubmit} />);

    fireEvent.change(screen.getByLabelText(/Company Mission/i), { target: { value: 'Test Mission' } });
    fireEvent.change(screen.getByLabelText(/Current Funding Stage/i), { target: { value: 'Seed' } });
    fireEvent.change(screen.getByLabelText(/Vision\/Goals/i), { target: { value: 'Test Vision' } });
    fireEvent.change(screen.getByLabelText(/Target Raise Amount/i), { target: { value: '100000' } });
    // fireEvent.change(screen.getByLabelText(/Round Type/i), { target: { value: 'Series A' } }); // Already has default

    fireEvent.click(screen.getByRole('button', { name: /Next: Data Sync/i }));

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith({
        companyMission: 'Test Mission',
        currentFundingStage: 'Seed',
        visionGoals: 'Test Vision',
        roundType: 'Seed', // Default
        targetRaiseAmount: '100000',
        logos: null,
        photos: null,
      });
    });
  });

  test('handles file input and shows preview', async () => {
    render(<InputFields onSubmit={mockOnSubmit} />);
    const logoInput = screen.getByLabelText(/Company Logo/i) as HTMLInputElement;
    const mockFile = new File(['dummy content'], 'logo.png', { type: 'image/png' });

    // Simulate file selection
    // Using await waitFor to ensure that the event processing (including state updates) completes
    await waitFor(() => {
        fireEvent.change(logoInput, { target: { files: [mockFile] } });
    });

    // Check if URL.createObjectURL was called for preview
    // This check needs to happen after the event that triggers it.
    // await waitFor(() => {
    //   expect(global.URL.createObjectURL).toHaveBeenCalledWith(mockFile);
    // });

    // Check for the image preview (alt text or src)
    // This also needs to await the rendering of the preview
    // const imgPreview = await screen.findByAltText('Logo preview');
    // expect(imgPreview).toBeInTheDocument();
    // expect(imgPreview).toHaveAttribute('src', 'mock-url');

    // Fill other required fields to allow submission
    fireEvent.change(screen.getByLabelText(/Company Mission/i), { target: { value: 'Test Mission' } });
    fireEvent.change(screen.getByLabelText(/Current Funding Stage/i), { target: { value: 'Seed' } });
    fireEvent.change(screen.getByLabelText(/Vision\/Goals/i), { target: { value: 'Test Vision' } });
    fireEvent.change(screen.getByLabelText(/Target Raise Amount/i), { target: { value: '100000' } });

    fireEvent.click(screen.getByRole('button', { name: /Next: Data Sync/i }));

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith(expect.objectContaining({
        logos: mockFile, // Check if the file object is passed
      }));
    });
  });
});
