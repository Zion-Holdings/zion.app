// Supabase Edge Function: ai-profile
// Handles profile submissions: generates AI summary + normalized skills, caches results, updates DB, and optionally sends email

// deno-lint-ignore-file no-explicit-any

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

interface ProfileInput {
  talentId: string;
  fullName?: string;
  bio?: string;
  skillsRaw?: string; // free text or comma-separated
  roles?: string; // previous roles or experience
  industry?: string; // industry focus or niche
  email?: string;
  notify?: boolean; // whether to send email
}

interface SkillCategories {
  programming: string[];
  devops: string[];
  platforms: string[];
  soft_skills: string[];
}

interface AiResult {
  summary: string;
  skills: SkillCategories;
  incomplete_profile?: boolean;
  missing_fields?: string[];
}

function textToWords(text: string): string[] {
  return text
    .replace(/\n+/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

function truncateWords(text: string, maxWords: number): string {
  const words = textToWords(text);
  if (words.length <= maxWords) return text.trim();
  return words.slice(0, maxWords).join(" ").trim();
}

function titleCaseSkill(skill: string): string {
  const lower = skill.trim().toLowerCase();
  // Common lowercase acronyms or brands should stay uppercase or as-is
  const known = new Map<string, string>([
    ["aws", "AWS"],
    ["gcp", "GCP"],
    ["ci/cd", "CI/CD"],
    ["ui/ux", "UI/UX"],
    ["sql", "SQL"],
    ["nosql", "NoSQL"],
    ["graphql", "GraphQL"],
    ["rest", "REST"],
    ["http", "HTTP"],
    ["tcp/ip", "TCP/IP"],
    ["ai", "AI"],
    ["ml", "ML"],
    ["nlp", "NLP"],
    ["devops", "DevOps"],
    ["ci", "CI"],
    ["cd", "CD"],
    ["kubernetes", "Kubernetes"],
    ["docker", "Docker"],
    ["typescript", "TypeScript"],
    ["javascript", "JavaScript"],
    ["python", "Python"],
    ["java", "Java"],
    ["c++", "C++"],
    ["c#", "C#"],
    ["aws lambda", "AWS Lambda"],
    ["azure", "Azure"],
  ]);
  if (known.has(lower)) return known.get(lower)!;
  return lower
    .split(/\s|\//)
    .map((p) => (p ? p[0].toUpperCase() + p.slice(1) : p))
    .join(" ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function normalizeSkillsInput(skillsRaw?: string): string[] {
  if (!skillsRaw) return [];
  // Split on commas, semicolons, slashes, or newlines
  const parts = skillsRaw
    .split(/[;,\n\/]+/)
    .map((s) => s.trim())
    .filter(Boolean);
  const normalized = parts.map(titleCaseSkill);
  // Deduplicate case-insensitively
  const seen = new Set<string>();
  const result: string[] = [];
  for (const s of normalized) {
    const key = s.toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      result.push(s);
    }
  }
  return result;
}

async function sha256Hex(input: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  const hash = await crypto.subtle.digest("SHA-256", data);
  const bytes = new Uint8Array(hash);
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function clampSkillsToEight(skills: SkillCategories): SkillCategories {
  // Keep up to 8 total across categories, in priority order
  const order: (keyof SkillCategories)[] = [
    "programming",
    "devops",
    "platforms",
    "soft_skills",
  ];
  const flat: [keyof SkillCategories, string][] = [];
  for (const k of order) {
    for (const s of skills[k] || []) flat.push([k, s]);
  }
  const seen = new Set<string>();
  const picked: [keyof SkillCategories, string][] = [];
  for (const [k, s] of flat) {
    const key = s.toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      picked.push([k, s]);
      if (picked.length >= 8) break;
    }
  }
  const result: SkillCategories = {
    programming: [],
    devops: [],
    platforms: [],
    soft_skills: [],
  };
  for (const [k, s] of picked) result[k].push(s);
  return result;
}

function ensureSkillBuckets(obj: any): SkillCategories {
  const buckets: SkillCategories = {
    programming: Array.isArray(obj?.programming) ? obj.programming : [],
    devops: Array.isArray(obj?.devops) ? obj.devops : [],
    platforms: Array.isArray(obj?.platforms) ? obj.platforms : [],
    soft_skills: Array.isArray(obj?.soft_skills) ? obj.soft_skills : [],
  };
  // Normalize casing
  for (const key of Object.keys(buckets) as (keyof SkillCategories)[]) {
    buckets[key] = buckets[key].map(titleCaseSkill);
  }
  return buckets;
}

async function callOpenAI(payload: {
  fullName?: string;
  bio?: string;
  roles?: string;
  industry?: string;
  skillsFreeText?: string;
}): Promise<AiResult> {
  const openAiKey = Deno.env.get("OPENAI_API_KEY");
  if (!openAiKey) {
    throw new Error("OPENAI_API_KEY not configured");
  }
  const model = Deno.env.get("OPENAI_MODEL") ?? "gpt-4o-mini";

  const system =
    "You are an expert HR assistant. Based on the user's bio and experience, write a professional and engaging 100–150 word summary for their profile. Then extract up to 8 clear, categorized skill tags for better filtering.";

  const user = `Input Data:\n- Full name: ${payload.fullName ?? ""}\n- Bio/Work history: ${payload.bio ?? ""}\n- Previous roles/experience: ${payload.roles ?? ""}\n- Industry focus/niche: ${payload.industry ?? ""}\n- Skills (free text): ${payload.skillsFreeText ?? ""}\n\nTask:\n1) Write a concise professional summary (100–150 words).\n2) Extract up to 8 normalized skill tags divided into these categories: programming, devops, platforms, soft_skills.\n3) If important inputs are missing, set incomplete_profile=true and list missing_fields.\n\nRespond ONLY as strict JSON matching this TypeScript interface:\n{\n  \"summary\": string,\n  \"skills\": {\n    \"programming\": string[],\n    \"devops\": string[],\n    \"platforms\": string[],\n    \"soft_skills\": string[]\n  },\n  \"incomplete_profile\"?: boolean,\n  \"missing_fields\"?: string[]\n}`;

  const body = {
    model,
    messages: [
      { role: "system", content: system },
      { role: "user", content: user },
    ],
    temperature: 0.4,
    response_format: { type: "json_object" },
  } as const;

  const resp = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${openAiKey}`,
    },
    body: JSON.stringify(body),
  });

  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(`OpenAI error: ${resp.status} ${text}`);
  }

  const data = await resp.json();
  const content = data?.choices?.[0]?.message?.content;
  if (typeof content !== "string") {
    throw new Error("Invalid OpenAI response content");
  }

  let parsed: any;
  try {
    parsed = JSON.parse(content);
  } catch (e) {
    // Attempt to extract JSON substring
    const match = content.match(/\{[\s\S]*\}/);
    if (!match) throw new Error("Failed to parse OpenAI JSON output");
    parsed = JSON.parse(match[0]);
  }

  const summaryRaw = typeof parsed.summary === "string" ? parsed.summary : "";
  const skillsBuckets = ensureSkillBuckets(parsed.skills);
  const clampedSkills = clampSkillsToEight(skillsBuckets);

  const summary = truncateWords(summaryRaw, 150);

  const incomplete = Boolean(parsed.incomplete_profile);
  const missing = Array.isArray(parsed.missing_fields)
    ? parsed.missing_fields.map((s: any) => String(s))
    : [];

  return {
    summary,
    skills: clampedSkills,
    incomplete_profile: incomplete,
    missing_fields: missing,
  };
}

Deno.serve(async (req) => {
  try {
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
        status: 405,
        headers: { "Content-Type": "application/json" },
      });
    }

    const { talentId, fullName, bio, skillsRaw, roles, industry, email, notify } =
      (await req.json()) as ProfileInput;

    if (!talentId) {
      return new Response(JSON.stringify({ error: "Missing talentId" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY");
    if (!supabaseUrl || !anonKey) {
      return new Response(JSON.stringify({ error: "Supabase env not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(supabaseUrl, anonKey, {
      global: { headers: { Authorization: req.headers.get("Authorization") ?? "" } },
    });

    // Build a canonical string for caching
    const skillsList = normalizeSkillsInput(skillsRaw);
    const canonical = [
      `name:${fullName ?? ""}`,
      `bio:${bio ?? ""}`,
      `roles:${roles ?? ""}`,
      `industry:${industry ?? ""}`,
      `skills:${skillsList.join(",")}`,
    ].join("\n");

    const cacheKey = await sha256Hex(canonical);

    // Try cache table first
    const { data: cached, error: cacheErr } = await supabase
      .from("ai_skill_cache")
      .select("summary, skills")
      .eq("cache_key", cacheKey)
      .maybeSingle();

    let result: AiResult | null = null;

    if (!cacheErr && cached) {
      result = {
        summary: truncateWords(String(cached.summary ?? ""), 150),
        skills: clampSkillsToEight(ensureSkillBuckets(cached.skills)),
      };
    }

    if (!result) {
      result = await callOpenAI({
        fullName,
        bio,
        roles,
        industry,
        skillsFreeText: skillsList.join(", "),
      });

      // Store in cache (best-effort)
      const { error: upsertCacheErr } = await supabase
        .from("ai_skill_cache")
        .upsert({
          cache_key: cacheKey,
          summary: result.summary,
          skills: result.skills,
        })
        .select();
      if (upsertCacheErr) {
        // Non-fatal
        console.warn("Cache upsert error", upsertCacheErr);
      }
    }

    // Compute incomplete if data truly missing
    const missingFields: string[] = [];
    if (!fullName || fullName.trim().length < 2) missingFields.push("fullName");
    if (!bio || bio.trim().length < 20) missingFields.push("bio");
    // roles and industry are optional, but can be required by business logic; flag if empty
    if (!roles || roles.trim().length < 2) missingFields.push("roles");
    if (!industry || industry.trim().length < 2) missingFields.push("industry");

    const profileIncomplete =
      (result.incomplete_profile ?? false) || missingFields.length > 0;

    // Update the talent row (RLS-enforced via user's JWT)
    const { error: updateErr } = await supabase
      .from("talents")
      .update({
        summary: result.summary,
        skills: result.skills,
        profile_incomplete: profileIncomplete,
        updated_at: new Date().toISOString(),
      })
      .eq("id", talentId);

    if (updateErr) {
      return new Response(
        JSON.stringify({ error: "Failed to update profile", details: updateErr.message }),
        { status: 403, headers: { "Content-Type": "application/json" } },
      );
    }

    // Optional: send notification email
    if (email && (notify ?? true) && Deno.env.get("RESEND_API_KEY")) {
      try {
        const from = Deno.env.get("FROM_EMAIL") ?? "Zion AI <no-reply@zion.ai>";
        const payload = {
          from,
          to: email,
          subject: "Your Zion AI profile is live",
          html:
            "<p>Your profile has been enhanced with AI. You’re now more discoverable to recruiters and companies!</p>",
        };
        const emailResp = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
          },
          body: JSON.stringify(payload),
        });
        if (!emailResp.ok) {
          console.warn("Email failed", await emailResp.text());
        }
      } catch (e) {
        console.warn("Notification error", e);
      }
    }

    return new Response(
      JSON.stringify({
        talentId,
        summary: result.summary,
        skills: result.skills,
        profile_incomplete: profileIncomplete,
        missing_fields: missingFields,
        cache_key: cacheKey,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: "Internal Error", details: String(err?.message ?? err) }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
});