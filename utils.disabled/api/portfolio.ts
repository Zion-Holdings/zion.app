import { supabase } from "../supabase/client";
import type { TalentPortfolio } from "../types/portfolio";

const STORAGE_KEY = "zion.talent.portfolio";

export async function loadPortfolio(talentSlug?: string): Promise<TalentPortfolio | null> {
  try {
    if (talentSlug) {
      const { data, error } = await supabase
        .from("talent_portfolios")
        .select("data")
        .eq("talent_slug", talentSlug)
        .single();
      if (!error && data?.data) return data.data as TalentPortfolio;
    }
  } catch (_) {}

  try {
    const raw = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    if (raw) return JSON.parse(raw) as TalentPortfolio;
  } catch (_) {}
  return null;
}

export async function savePortfolio(portfolio: TalentPortfolio): Promise<void> {
  try {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(portfolio));
    }
  } catch (_) {}

  // attempt Supabase save (best-effort)
  try {
    const { error } = await supabase.from("talent_portfolios").upsert(
      {
        talent_slug: portfolio.talentSlug ?? null,
        data: portfolio,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "talent_slug" }
    );
    if (error) {
      // ignore for now; localStorage is fallback
    }
  } catch (_) {}
}