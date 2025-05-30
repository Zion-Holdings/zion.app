import { serve } from 'https://deno.land/std@0.190.0/http/server.ts';
import { createClient, SupabaseClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { corsHeaders } from '../_shared/cors.ts'; // Assuming shared CORS headers
import { ProjectBrief, TeamRecommendation, RecommendedRole, TalentProfile } from '../../../src/types/index.ts'; // Adjust path as needed

// Initialize Supabase client (admin role for querying talent_profiles)
const supabaseAdmin = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

async function getTeamRecommendationFromGPT(projectBrief: ProjectBrief, openAIApiKey: string): Promise<Omit<TeamRecommendation, 'roles'> & { roles: Omit<RecommendedRole, 'matchedTalent'>[] }> {
  let optimizationInstructions = "";
  if (projectBrief.lockTimeline && projectBrief.lockBudget) {
    optimizationInstructions = "The project timeline and budget are strictly fixed. Please propose a team structure that adheres to both constraints, potentially by adjusting role seniority, scope, or weekly hours. Clearly state if trade-offs are necessary.";
  } else if (projectBrief.lockTimeline) {
    optimizationInstructions = "The project timeline is strictly fixed. Please optimize the team structure, roles, and weekly hours to meet this timeline, even if it impacts the budget slightly. Highlight any potential budget impacts.";
  } else if (projectBrief.lockBudget) {
    optimizationInstructions = "The project budget is strictly fixed. Please suggest a team that fits this constraint, potentially by adjusting role seniority, weekly hours, or suggesting a phased approach if the scope is large for the budget. Highlight any potential timeline impacts.";
  }

  const prompt = `
    Based on the following project brief, generate an ideal tech team structure.
    Project Name: ${projectBrief.projectName}
    Goals/Scope: ${projectBrief.goals}
    Timeline: ${projectBrief.timeline}
    Budget: ${projectBrief.budget}
    Tech Stack/Areas: ${projectBrief.techStack?.join(', ') || 'Not specified'}
    ${optimizationInstructions ? `
Important Constraints: ${optimizationInstructions}
` : ''}
    Return the team structure in a structured JSON format.
    The JSON should have a top-level object with two keys: "recommendationSummary" (a string summarizing the team, e.g., "1 Product Manager, 2 Fullstack Engineers") and "roles".
    The "roles" key should be an array of objects, where each object represents a role and includes:
    - "role": (string) The title of the role (e.g., "Senior Frontend Developer").
    - "description": (string) A brief description of what this role will do on the project.
    - "hourlyRateRange": (object) An object with "min" and "max" keys, representing the estimated hourly rate in USD.
    - "weeklyHours": (number) The estimated number of weekly hours for this role.

    Example of a role object:
    {
      "role": "Fullstack Engineer",
      "description": "Develops both frontend and backend components of the application.",
      "hourlyRateRange": { "min": 70, "max": 100 },
      "weeklyHours": 40
    }

    Ensure the entire output is a single valid JSON object. Do not include any text before or after the JSON.
  `;

  // Using OpenAI API directly, similar to zion-gpt function for more control
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${openAIApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo-1106', // This model is good for JSON mode
      messages: [{ role: 'user', content: prompt }],
      response_format: { type: 'json_object' }, // Enable JSON mode
      temperature: 0.5, // Lower temperature for more deterministic output
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error('OpenAI API error:', errorData);
    throw new Error(`OpenAI API error: ${errorData.error?.message || JSON.stringify(errorData)}`);
  }

  const gptResponse = await response.json();
  const content = gptResponse.choices[0].message.content;

  try {
    // The model gpt-3.5-turbo-1106 with response_format: { type: 'json_object' } should return a valid JSON string.
    return JSON.parse(content);
  } catch (e) {
    console.error('Failed to parse GPT JSON response:', content);
    throw new Error('Failed to parse team structure from AI response. The response was not valid JSON.');
  }
}

async function findMatchingTalent(
  role: Omit<RecommendedRole, 'matchedTalent'>,
  projectBrief: ProjectBrief, // Pass the whole brief for filters
  supabaseClient: SupabaseClient
): Promise<TalentProfile[]> {
  // Basic matching logic:
  // 1. Try to extract keywords from role.role (e.g., "Frontend Developer" -> "Frontend", "Developer")
  //    and role.description.
  // 2. Query talent_profiles table for skills matching these keywords.
  // This is a simplified version. Real-world implementation would need more sophisticated skill extraction and matching.

  const skillsToSearch: string[] = [];
  if (role.role) {
    skillsToSearch.push(...role.role.toLowerCase().split(' ').filter(s => s.length > 2));
  }
  // Add more sophisticated skill extraction from role.description if needed.
  // For now, we primarily use the role title.

  // Example: if role.techStack is available on ProjectBrief, could use that too.
  // For now, let's assume skills are stored in a text array column named 'skills' in talent_profiles.
  // And professional_title might also be relevant.

  if (skillsToSearch.length === 0 && !projectBrief.talentFilters) {
    return []; // No skills or filters to search for
  }

  let query = supabaseClient
    .from('talent_profiles')
    .select('*');

  // Apply skill-based search (simplified)
  if (skillsToSearch.length > 0) {
    // Assuming 'skills' is an array of text and 'professional_title' is a string.
    // This part might need more sophisticated full-text search or skill mapping.
    const skillConditions = skillsToSearch.map(skill => `(professional_title.ilike.%${skill}%,skills.ilike.%${skill}%)`).join(',');
    query = query.or(skillConditions);
  }

  query = query.eq('is_published', true);


  // Apply Talent Filters
  if (projectBrief.talentFilters) {
    if (projectBrief.talentFilters.verifiedOnly) {
      query = query.eq('is_verified', true); // Assuming 'is_verified' column exists
    }
    if (projectBrief.talentFilters.regions && projectBrief.talentFilters.regions.length > 0) {
      // Assuming 'location' or 'region' column exists and can be matched.
      // If 'regions' is an array in DB: query = query.overlaps('regions_column', projectBrief.talentFilters.regions);
      // If 'location' is a string:
      const regionConditions = projectBrief.talentFilters.regions.map(region => `location.ilike.%${region}%`).join(',');
      // To combine with AND logic if skills are present, this needs careful construction.
      // If skillConditions is not empty, we might want to wrap this in an AND block.
      // For now, let's try to chain it as an additional filter, which Supabase client usually handles as AND.
      // However, .or() within .or() can be tricky. A better way for complex AND/OR is:
      // query = query.and(`or(skill.ilike.%${s1}%,skill.ilike.%${s2}%),or(region.ilike.%${r1}%,region.ilike.%${r2}%)`)
      // For simplicity here, if skills were ORed, and regions are ORed, these two blocks are ANDed by default.
      query = query.or(regionConditions);
    }
  }

  query = query.limit(10); // Fetch a bit more before client-side limit, to allow diverse results if many match a broad skill

  try {
    const { data, error } = await query;
    if (error) {
      console.error('Error fetching matching talent with filters:', error);
      throw error;
    }
    // Deduplicate if multiple skill/region searches bring same talent (though less likely with current query structure)
    const talentMap = new Map<string, TalentProfile>();
    if (data) {
        data.forEach(talent => talentMap.set(talent.id, talent as TalentProfile));
    }
    return Array.from(talentMap.values()).slice(0, 3); // Final limit after deduplication

  } catch (error) {
    console.error('Error in findMatchingTalent:', error);
    return [];
  }
}

serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const projectBrief = await req.json() as ProjectBrief;
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

    if (!openAIApiKey) {
      throw new Error('OPENAI_API_KEY is not set in environment variables.');
    }
    if (!projectBrief) {
      throw new Error('Project brief not provided in the request body.');
    }

    // 1. Get team structure from GPT
    const gptTeamStructure = await getTeamRecommendationFromGPT(projectBrief, openAIApiKey);

    // 2. For each role, find matching talent
    const recommendedRolesWithTalent: RecommendedRole[] = [];
    for (const role of gptTeamStructure.roles) {
      // const matchedTalent = await findMatchingTalent(role, supabaseAdmin); // Old
      const matchedTalent = await findMatchingTalent(role, projectBrief, supabaseAdmin); // New: pass projectBrief
      recommendedRolesWithTalent.push({ ...role, matchedTalent });
    }

    // 3. Calculate total estimates (simplified)
    let minTotalRate = 0;
    let maxTotalRate = 0;
    recommendedRolesWithTalent.forEach(role => {
      minTotalRate += (role.hourlyRateRange.min || 0) * (role.weeklyHours || 0);
      maxTotalRate += (role.hourlyRateRange.max || 0) * (role.weeklyHours || 0);
    });

    // Placeholder for total project estimate - requires parsing timeline
    // e.g. "3 months" -> 12 weeks.  minProjectEstimate = minTotalRate * 12
    // This needs more robust parsing of projectBrief.timeline
    const estimateTimelineInWeeks = parseInt(projectBrief.timeline) * 4 || 12; // very naive

    const finalRecommendation: TeamRecommendation = {
      projectBriefId: projectBrief.id,
      recommendationSummary: gptTeamStructure.recommendationSummary,
      roles: recommendedRolesWithTalent,
      totalEstimatedRate: { min: minTotalRate, max: maxTotalRate }, // This is actually weekly burn
      totalWeeklyBurn: { min: minTotalRate, max: maxTotalRate },
      totalProjectEstimate: {
        min: minTotalRate * estimateTimelineInWeeks,
        max: maxTotalRate * estimateTimelineInWeeks
      },
      createdAt: new Date().toISOString(),
    };

    return new Response(
      JSON.stringify(finalRecommendation),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in team-generator Supabase function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
