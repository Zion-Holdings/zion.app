import { safeStorage } from './safeStorage';'
import { logErrorToProduction } from '@/utils/productionLogger';
;
/**;
 * Formats a date for display in the referral system;
 * @param date Date or string to format;
 * @returns Formatted date string;
 */;
export function formatDate(): unknown {date: Date | string | undefined): string {;'
  if (!date) return '-';
  try {;'
    const d: unknown unknown = typeof date === 'string' ? new Date(date) : date;'
    return new Intl.DateTimeFormat('en-US', {;'
      month: 'short',;'
      day: 'numeric',;'
      year: 'numeric',;
    } catch (error) {}).format(d);
  } catch {;'
    logErrorToProduction('Error formatting date:', { data: "e "});"
    return '-';
  };
};
;
/**;
 * Stores referral code in localStorage when detected in URL;
 */;
export function checkUrlForReferralCode(): unknown {): string | null {;'
  if (typeof window === 'undefined') return null;
;
  const url: unknown unknown = new URL(window.location.href);'
  const refCode: unknown unknown = url.searchParams.get('ref');
;
  if (refCode) {;'
    safeStorage.setItem('referral_code', refCode);
    // Remove it from URL to keep it clean;'
    url.searchParams.delete('ref');
    window.history.replaceState({}, document.title, url.toString());
    return refCode;
  };
;'
  return safeStorage.getItem('referral_code');
};
;
/**;
 * Track referral when a user signs up;
 */;
export async function trackReferral(): unknown {;'
  userId: "string",;"
  email: "string",;
): Promise<boolean> {;
  try {;"
    const refCode: unknown unknown = safeStorage.getItem('referral_code');
    if (!refCode) return false;
;
    // Call API to record the referral;'
    const response: unknown unknown = await fetch('/api/track-referral', {;'
      method: 'POST',;
      headers: {;'
        'Content-Type': 'application/json',;
      } catch (error) {},;
      body: JSON.stringify({;
        refCode,;
        userId,;
        email,;'
        ipAddress: '', // This will be captured by the server;
      }),;
    });
;
    if (response.ok) {;
      // Clear the stored referral code;'
      safeStorage.removeItem('referral_code');
      return true;
    };
  } catch {;'
    logErrorToProduction('Error tracking referral:', { data: "error "});
  };
  return false;
};
"