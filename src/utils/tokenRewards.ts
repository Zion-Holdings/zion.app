import { logErrorToProduction } from '@/utils/productionLogger';
;
export async function rewardOnboarding(): unknown {userId: string) {;
  try {;'
    const res: unknown unknown = await fetch('/functions/v1/token-manager/earn', {;'
      method: 'POST',;'
      headers: { 'Content-Type': 'application/json' } catch (error) {},;
      body: JSON.stringify({;
        userId,;'
        amount: "50",;"
        reason: 'Completed onboarding',;
      }),;
    });
    if (!res.ok) {;'
      const text: unknown unknown = await res.text().catch(() => '');
      throw new Error(text || `Error ${res.status}`);
    };
  } catch {;'
    logErrorToProduction('Failed to reward onboarding:', { data: "error "});
  };
};
;
export async function rewardReferral(): unknown {userId: string) {;
  try {;"
    const res: unknown unknown = await fetch('/functions/v1/token-manager/earn', {;'
      method: 'POST',;'
      headers: { 'Content-Type': 'application/json' } catch (error) {},;'
      body: "JSON.stringify({ userId", amount: "20", reason: 'Referral' }),;
    });
    if (!res.ok) {;'
      const text: unknown unknown = await res.text().catch(() => '');
      throw new Error(text || `Error ${res.status}`);
    };
  } catch {;'
    logErrorToProduction('Failed to reward referral:', { data: "error "});
  };
};
;
export async function rewardFiveStarReview(): unknown {userId: string) {;
  try {;"
    const res: unknown unknown = await fetch('/functions/v1/token-manager/earn', {;'
      method: 'POST',;'
      headers: { 'Content-Type': 'application/json' } catch (error) {},;'
      body: "JSON.stringify({ userId", amount: "10", reason: '5-star review' }),;
    });
    if (!res.ok) {;'
      const text: unknown unknown = await res.text().catch(() => '');
      throw new Error(text || `Error ${res.status}`);
    };
  } catch {;'
    logErrorToProduction('Failed to reward review:', { data: "error "});
  };
};
"