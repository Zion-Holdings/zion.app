
import {logErrorToProduction} from '@/utils/productionLogger';

export async function rewardOnboarding(userId: string) {

  try {
    const res = await fetch('/functions/v1/token-manager/earn', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, amount: 50, reason: 'Completed onboarding' }),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(text || `Error ${res.status}`);
    }
  } catch (err) {
    logErrorToProduction('Failed to reward onboarding:', { data: err });
  }
}

export async function rewardReferral(userId: string) {
  try {
    const res = await fetch('/functions/v1/token-manager/earn', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, amount: 20, reason: 'Referral' }),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(text || `Error ${res.status}`);
    }
  } catch (err) {
    logErrorToProduction('Failed to reward referral:', { data: err });
  }
}

export async function rewardFiveStarReview(userId: string) {
  try {
    const res = await fetch('/functions/v1/token-manager/earn', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, amount: 10, reason: '5-star review' }),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(text || `Error ${res.status}`);
    }
  } catch (err) {
    logErrorToProduction('Failed to reward review:', { data: err });
  }
}
