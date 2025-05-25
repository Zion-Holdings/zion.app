import { format } from 'date-fns';

/**
 * Formats a date for display in the referral system
 * @param date Date or string to format
 * @returns Formatted date string
 */
export function formatDate(date: Date | string | undefined): string {
  if (!date) return '-';
  try {
    if (typeof date === 'string') {
      return format(new Date(date), 'MMM d, yyyy');
    }
    return format(date, 'MMM d, yyyy');
  } catch (e) {
    console.error('Error formatting date:', e);
    return '-';
  }
}

/**
 * Stores referral code in localStorage when detected in URL
 */
export function checkUrlForReferralCode(): string | null {
  if (typeof window === 'undefined') return null;
  
  const url = new URL(window.location.href);
  const refCode = url.searchParams.get('ref');
  
  if (refCode) {
    localStorage.setItem('referral_code', refCode);
    // Remove it from URL to keep it clean
    url.searchParams.delete('ref');
    window.history.replaceState({}, document.title, url.toString());
    return refCode;
  }
  
  return localStorage.getItem('referral_code');
}

/**
 * Track referral when a user signs up
 */
import api from '@/lib/api';

export async function trackReferral(userId: string, email: string) {
  try {
    const refCode = localStorage.getItem('referral_code');
    if (!refCode) return;
    
    // Call API to record the referral
    const response = await api.post('/api/track-referral', {
      refCode,
      userId,
      email,
      ipAddress: '', // This will be captured by the server
    });

    if (response.status >= 200 && response.status < 300) {
      // Clear the stored referral code
      localStorage.removeItem('referral_code');
    }
  } catch (error) {
    console.error('Error tracking referral:', error);
  }
}
