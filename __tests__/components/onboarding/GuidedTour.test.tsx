import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { GuidedTour } from '@/components/onboarding/GuidedTour';

// Helper to add target elements to the DOM
function setupTargets() {
  const profile = document.createElement('button');
  profile.id = 'profile-link';
  profile.textContent = 'profile';
  document.body.appendChild(profile);

  const notif = document.createElement('a');
  notif.id = 'notifications-link';
  notif.textContent = 'notifications';
  document.body.appendChild(notif);
}

describe('GuidedTour', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    setupTargets();
    localStorage.clear();
  });

  test('advances through steps for client role', async () => {
    render(<GuidedTour role="client" />);
    expect(await screen.findByText(/Edit your profile/)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /next/i }));
    expect(await screen.findByText(/Join the community/)).toBeInTheDocument();
  });
});
