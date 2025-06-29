import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { AnalyticsConsentBanner } from '../AnalyticsConsentBanner';
import { safeStorage } from '@/utils/safeStorage';
import * as analytics from '@/lib/analytics';
import * as posthog from '@/lib/posthog';
import * as cookies from '@/utils/cookies';
import { vi } from 'vitest';

vi.mock('@/utils/safeStorage');
vi.mock('@/lib/analytics');
vi.mock('@/lib/posthog');
vi.mock('@/utils/cookies');

const mockSafeStorage = safeStorage as unknown as {
  isAvailable: boolean;
  getItem: vi.Mock<[string], string | null>;
  setItem: vi.Mock<[string, string], void>;
};
const mockAnalytics = analytics as unknown as {
  initGA: vi.Mock<[], void>;
};
const mockPosthog = posthog as unknown as {
  initPostHog: vi.Mock<[], void>;
};
const mockCookies = cookies as unknown as {
  getCookie: vi.Mock<[string], string | null>;
  setCookie: vi.Mock<[string, string, number?], void>;
};


describe('AnalyticsConsentBanner', () => {
  let isAvailableSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    vi.clearAllMocks();
    // Default to localStorage being available
    isAvailableSpy = vi.spyOn(mockSafeStorage, 'isAvailable', 'get').mockReturnValue(true);
    mockSafeStorage.getItem.mockReturnValue(null);
    mockSafeStorage.setItem.mockClear(); // Ensure setItem mock is clean
    mockCookies.getCookie.mockReturnValue(null);
    mockCookies.setCookie.mockClear(); // Ensure setCookie mock is clean
    mockAnalytics.initGA.mockClear();
    mockPosthog.initPostHog.mockClear();
  });

  afterEach(() => {
    isAvailableSpy.mockRestore();
  });

  // --- localStorage Available Tests ---
  describe('when localStorage is available', () => {
    // isAvailableSpy is already true by default from the outer beforeEach

    it('shows banner if no consent is stored in localStorage', () => {
      render(<AnalyticsConsentBanner />);
      expect(screen.getByText(/We use analytics cookies to improve the site/)).toBeInTheDocument();
    });

    it('does not show banner if consent is "granted" in localStorage', () => {
      mockSafeStorage.getItem.mockReturnValue('granted');
      render(<AnalyticsConsentBanner />);
      expect(screen.queryByText(/We use analytics cookies to improve the site/)).not.toBeInTheDocument();
      expect(mockAnalytics.initGA).toHaveBeenCalledTimes(1);
      expect(mockPosthog.initPostHog).toHaveBeenCalledTimes(1);
    });

    it('does not show banner if consent is "denied" in localStorage', () => {
      mockSafeStorage.getItem.mockReturnValue('denied');
      render(<AnalyticsConsentBanner />);
      expect(screen.queryByText(/We use analytics cookies to improve the site/)).not.toBeInTheDocument();
      expect(mockAnalytics.initGA).not.toHaveBeenCalled();
      expect(mockPosthog.initPostHog).not.toHaveBeenCalled();
    });

    it('stores "granted" in localStorage and initializes analytics on Accept', () => {
      render(<AnalyticsConsentBanner />);
      fireEvent.click(screen.getByText('Accept'));
      expect(mockSafeStorage.setItem).toHaveBeenCalledWith('analyticsConsent', 'granted');
      expect(mockCookies.setCookie).not.toHaveBeenCalled();
      expect(mockAnalytics.initGA).toHaveBeenCalledTimes(1);
      expect(mockPosthog.initPostHog).toHaveBeenCalledTimes(1);
      expect(screen.queryByText(/We use analytics cookies to improve the site/)).not.toBeInTheDocument();
    });

    it('stores "denied" in localStorage on Decline', () => {
      render(<AnalyticsConsentBanner />);
      fireEvent.click(screen.getByText('Decline'));
      expect(mockSafeStorage.setItem).toHaveBeenCalledWith('analyticsConsent', 'denied');
      expect(mockCookies.setCookie).not.toHaveBeenCalled();
      expect(mockAnalytics.initGA).not.toHaveBeenCalled();
      expect(mockPosthog.initPostHog).not.toHaveBeenCalled();
      expect(screen.queryByText(/We use analytics cookies to improve the site/)).not.toBeInTheDocument();
    });
  });

  // --- localStorage Not Available Tests ---
  describe('when localStorage is NOT available', () => {
    beforeEach(() => {
      isAvailableSpy.mockReturnValue(false); // Corrected: use spy to set getter value
    });

    it('shows banner if no consent cookie exists', () => {
      render(<AnalyticsConsentBanner />);
      expect(screen.getByText(/We use analytics cookies to improve the site/)).toBeInTheDocument();
    });

    it('does not show banner if consent cookie is "granted"', () => {
      mockCookies.getCookie.mockReturnValue('granted');
      render(<AnalyticsConsentBanner />);
      expect(screen.queryByText(/We use analytics cookies to improve the site/)).not.toBeInTheDocument();
      expect(mockAnalytics.initGA).toHaveBeenCalledTimes(1);
      expect(mockPosthog.initPostHog).toHaveBeenCalledTimes(1);
    });

    it('does not show banner if consent cookie is "denied"', () => {
      mockCookies.getCookie.mockReturnValue('denied');
      render(<AnalyticsConsentBanner />);
      expect(screen.queryByText(/We use analytics cookies to improve the site/)).not.toBeInTheDocument();
      expect(mockAnalytics.initGA).not.toHaveBeenCalled();
      expect(mockPosthog.initPostHog).not.toHaveBeenCalled();
    });

    it('sets "granted" cookie and initializes analytics on Accept', () => {
      render(<AnalyticsConsentBanner />);
      fireEvent.click(screen.getByText('Accept'));
      expect(mockCookies.setCookie).toHaveBeenCalledWith('analyticsConsent', 'granted', 365);
      expect(mockSafeStorage.setItem).not.toHaveBeenCalled();
      expect(mockAnalytics.initGA).toHaveBeenCalledTimes(1);
      expect(mockPosthog.initPostHog).toHaveBeenCalledTimes(1);
      expect(screen.queryByText(/We use analytics cookies to improve the site/)).not.toBeInTheDocument();
    });

    it('sets "denied" cookie on Decline', () => {
      render(<AnalyticsConsentBanner />);
      fireEvent.click(screen.getByText('Decline'));
      expect(mockCookies.setCookie).toHaveBeenCalledWith('analyticsConsent', 'denied', 365);
      expect(mockSafeStorage.setItem).not.toHaveBeenCalled();
      expect(mockAnalytics.initGA).not.toHaveBeenCalled();
      expect(mockPosthog.initPostHog).not.toHaveBeenCalled();
      expect(screen.queryByText(/We use analytics cookies to improve the site/)).not.toBeInTheDocument();
    });
  });
});
