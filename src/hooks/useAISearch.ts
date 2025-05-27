
import { useState } from "react";
import { TALENT_PROFILES } from "@/data/talentData";
import { JOB_POSTS } from "@/data/jobsData";
import { PROJECTS } from "@/data/projectsData";

export interface SearchResult {
  id: string;
  type: "talent" | "job" | "project";
  title: string;
  description: string;
}

interface SearchFilters {
  type?: string | null;
  skills?: string[] | null;
  location?: string | null;
  budget?: { min: number; max: number } | null;
  availability?: string | null;
}

export function useAISearch() {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  const search = async (query: string) => {
    setLoading(true);
    const response = await fetch(
      "https://ziontechgroup.functions.supabase.co/functions/v1/ai-search",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      }
    );
    const data = await response.json();
      const filters: SearchFilters = data.filters || {};

      const items: SearchResult[] = [];
      const matchSkill = (skills: string[] | undefined) => {
        if (!filters.skills || filters.skills.length === 0) return true;
        return skills?.some((s) =>
          filters.skills!.some((f) => s.toLowerCase().includes(f.toLowerCase()))
        );
      };

      if (!filters.type || filters.type === "talent" || filters.type === "all") {
        TALENT_PROFILES.forEach((t) => {
          if (filters.location && !t.location?.toLowerCase().includes(filters.location.toLowerCase())) return;
          if (!matchSkill(t.skills)) return;
          items.push({ id: t.id, type: "talent", title: t.full_name, description: t.professional_title });
        });
      }

      if (!filters.type || filters.type === "job" || filters.type === "all") {
        JOB_POSTS.forEach((j) => {
          if (!matchSkill(j.skills)) return;
          items.push({ id: j.id, type: "job", title: j.title, description: j.description });
        });
      }

      if (!filters.type || filters.type === "project" || filters.type === "all") {
        PROJECTS.forEach((p) => {
          items.push({ id: p.id, type: "project", title: p.job?.title || "Project", description: p.scope_summary });
        });
      }

    setResults(items);
    setLoading(false);
  };

  return { results, loading, search };
}
