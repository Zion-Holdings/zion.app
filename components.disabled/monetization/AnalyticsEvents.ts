export type TeamBuilderEvent =
  | { type: 'team_generated'; weeklyBurnUsd: number; budget?: number; roles: { role: string; quantity: number }[] }
  | { type: 'role_added'; role: string }
  | { type: 'role_removed'; role: string }
  | { type: 'invite_sent'; role: string; talentSlug: string }
  | { type: 'high_budget_flagged'; weeklyBurnUsd: number; totalEstimateUsd: number; budget?: number };

export function logTeamBuilderEvent(event: TeamBuilderEvent) {
  // For now, just log to console. In production, send to analytics endpoint or Supabase.
  // eslint-disable-next-line no-console
  console.log('[TeamBuilderEvent]', event);
}