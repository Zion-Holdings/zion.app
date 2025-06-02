import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Profile from '@/pages/Profile';
import { vi, expect, test, beforeEach, afterEach } from 'vitest'; // Added beforeEach, afterEach

// Define the UserProfile structure based on usage
interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  notifications: {
    email: boolean;
    push: boolean;
  };
  // Add other fields if present in the actual profile
}

// Store the original fetch
const originalFetch = global.fetch;

// Helper to mock fetch
// It should be typed to align with how global.fetch is typed or how it's used.
// global.fetch returns Promise<Response>, Response has a .json() method returning Promise<any>
// So, the mock should resolve to something that has a json method.
const mockFetchImplementation = (responseData: UserProfile | { success: boolean } | Partial<UserProfile>, ok = true, status = 200) => 
  vi.fn().mockResolvedValue({
    ok,
    status,
    json: () => Promise.resolve(responseData),
    text: () => Promise.resolve(JSON.stringify(responseData)), // Add text() method for completeness
  });

describe('Profile Page', () => {
  beforeEach(() => {
    // Reset fetch mock before each test
    global.fetch = vi.fn();
  });

  afterEach(() => {
    // Restore original fetch after all tests in this suite
    global.fetch = originalFetch;
  });

  test('fetches profile on mount', async () => {
    const mockProfileData: UserProfile = { 
      id: '1', 
      name: 'Jane', 
      email: 'jane@example.com', 
      avatarUrl: '', 
      notifications: { email: true, push: false } 
    };
    global.fetch = mockFetchImplementation(mockProfileData);

    render(<Profile />);
    await screen.findByDisplayValue('Jane'); // Wait for the name field to be populated
    expect(global.fetch).toHaveBeenCalledWith('/api/users/me');
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  test('saves updated profile', async () => {
    const initialProfileData: UserProfile = { 
      id: '1', 
      name: 'Jane', 
      email: 'jane@example.com', 
      avatarUrl: '', 
      notifications: { email: true, push: false } 
    };
    const updatedProfileData: UserProfile = { ...initialProfileData, name: 'New Name' };

    // Mock initial fetch
    global.fetch = mockFetchImplementation(initialProfileData);
    
    render(<Profile />);
    await screen.findByDisplayValue('Jane'); // Ensure initial data is loaded

    // Mock the PUT request response
    (global.fetch as vi.Mock).mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: () => Promise.resolve(updatedProfileData), // This is the response for the PUT
    });

    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'New Name' } });
    fireEvent.click(screen.getByText('Save'));

    await waitFor(() => 
      expect(global.fetch).toHaveBeenCalledWith(
        '/api/users/me', 
        expect.objectContaining({
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: 'New Name' }) // Only 'name' should be in the body for this update
        })
      )
    );
    // The fetch for GET (initial) + PUT (save)
    expect(global.fetch).toHaveBeenCalledTimes(2); 
    
    // Verify the input field is updated (optimistic update or re-fetch might occur)
    // If the component re-fetches or updates state from PUT response:
    await screen.findByDisplayValue('New Name'); 
  });
});
