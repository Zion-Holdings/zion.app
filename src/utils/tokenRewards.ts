

import api from '@/lib/api';

export async function rewardOnboarding(userId: string) {
  await api.post('/functions/v1/token-manager/earn', {
    userId,
    amount: 50,
    reason: 'Completed onboarding',
  });
}

export async function rewardReferral(userId: string) {
  await api.post('/functions/v1/token-manager/earn', {
    userId,
    amount: 20,
    reason: 'Referral',
  });
}

export async function rewardFiveStarReview(userId: string) {
  await api.post('/functions/v1/token-manager/earn', {
    userId,
    amount: 10,
    reason: '5-star review',
  });
}
