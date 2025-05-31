// supabase/functions/team-generator/index.ts

import { serve } from 'https://deno.land/std@0.190.0/http/server.ts';
import { createClient, SupabaseClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { corsHeaders } from '../_shared/cors.ts';
// Ensure ProjectBrief includes userId, and TeamRecommendation types are fully available
import { ProjectBrief, TeamRecommendation, RecommendedRole, TalentProfile } from '../../../src/types/index.ts';

const supabaseAdmin = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

// getTeamRecommendationFromGPT function (remains the same as before)
async function getTeamRecommendationFromGPT(projectBrief: ProjectBrief, openAIApiKey: string): Promise<Omit<TeamRecommendation, 'roles' | 'id' | 'projectBriefId' | 'createdAt' | 'totalEstimatedRate' | 'totalWeeklyBurn' | 'totalProjectEstimate' | 'user_id' | 'generated_at'> & { roles: Omit<RecommendedRole, 'matchedTalent'>[] }> {
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
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${openAIApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo-1106',
      messages: [{ role: 'user', content: prompt }],
      response_format: { type: 'json_object' },
      temperature: 0.5,
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
    return JSON.parse(content);
  } catch (e) {
    console.error('Failed to parse GPT JSON response:', content);
    throw new Error('Failed to parse team structure from AI response. The response was not valid JSON.');
  }
}


// findMatchingTalent function (remains the same as before)
async function findMatchingTalent(
  role: Omit<RecommendedRole, 'matchedTalent'>,
  projectBrief: ProjectBrief,
  supabaseClient: SupabaseClient
): Promise<TalentProfile[]> {
  const skillsToSearch: string[] = [];
  if (role.role) {
    skillsToSearch.push(...role.role.toLowerCase().split(' ').filter(s => s.length > 2));
  }

  if (skillsToSearch.length === 0 && !projectBrief.talentFilters) {
    return [];
  }

  let query = supabaseClient
    .from('talent_profiles')
    .select('*');

  if (skillsToSearch.length > 0) {
    const skillConditions = skillsToSearch.map(skill => `(professional_title.ilike.%${skill}%,skills.ilike.%${skill}%)`).join(',');
    query = query.or(skillConditions);
  }

  query = query.eq('is_published', true);

  if (projectBrief.talentFilters) {
    if (projectBrief.talentFilters.verifiedOnly) {
      query = query.eq('is_verified', true);
    }
    if (projectBrief.talentFilters.regions && projectBrief.talentFilters.regions.length > 0) {
      const regionConditions = projectBrief.talentFilters.regions.map(region => `location.ilike.%${region}%`).join(',');
      query = query.or(regionConditions);
    }
  }

  query = query.limit(10);

  try {
    const { data, error } = await query;
    if (error) {
      console.error('Error fetching matching talent with filters:', error);
      throw error;
    }
    const talentMap = new Map<string, TalentProfile>();
    if (data) {
        data.forEach(talent => talentMap.set(talent.id, talent as TalentProfile));
    }
    return Array.from(talentMap.values()).slice(0, 3);

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
    // Data from client, does not include id, userId, createdAt, updatedAt
    const projectBriefClientData = await req.json() as Omit<ProjectBrief, 'id' | 'userId' | 'createdAt' | 'updatedAt'>;
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

    if (!openAIApiKey) throw new Error('OPENAI_API_KEY is not set.');
    if (!projectBriefClientData) throw new Error('Project brief not provided.');

    // Get user ID from JWT
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) throw new Error('Missing Authorization header.'); // Should be handled by API gateway or middleware usually
    const jwt = authHeader.replace('Bearer ', '');
    const { data: { user }, error: userError } = await supabaseAdmin.auth.getUser(jwt);

    if (userError) {
        console.error('Error getting user from JWT:', userError.message);
        throw new Error('Authentication error: Failed to get user from token.');
    }
    if (!user) throw new Error('Authentication error: Invalid user token.');
    const userId = user.id;

    // 1. Save ProjectBrief to DB
    // Ensure field names match DB schema (snake_case)
    const briefToSaveForDB = {
      project_name: projectBriefClientData.projectName,
      goals: projectBriefClientData.goals,
      timeline: projectBriefClientData.timeline,
      budget: projectBriefClientData.budget,
      tech_stack: projectBriefClientData.techStack,
      lock_timeline: projectBriefClientData.lockTimeline,
      lock_budget: projectBriefClientData.lockBudget,
      talent_filters: projectBriefClientData.talentFilters, // This should be a JSONB object
      user_id: userId,
    };

    const { data: savedBrief, error: briefError } = await supabaseAdmin
      .from('project_briefs')
      .insert(briefToSaveForDB)
      .select()
      .single();

    if (briefError) {
      console.error('Error saving project brief:', briefError);
      throw new Error(`Failed to save project brief: ${briefError.message}`);
    }
    if (!savedBrief) throw new Error('Failed to save project brief: No data returned.');

    // Cast to ProjectBrief to include all fields, including those auto-generated by DB
    const currentProjectBrief = savedBrief as ProjectBrief;

    // 2. Get team structure from GPT
    const gptTeamStructure = await getTeamRecommendationFromGPT(currentProjectBrief, openAIApiKey);

    // 3. For each role, find matching talent
    const recommendedRolesWithTalent: RecommendedRole[] = [];
    for (const role of gptTeamStructure.roles) {
      const matchedTalent = await findMatchingTalent(role, currentProjectBrief, supabaseAdmin);
      recommendedRolesWithTalent.push({ ...role, matchedTalent });
    }

    // 4. Calculate total estimates
    let minTotalRate = 0;
    let maxTotalRate = 0;
    recommendedRolesWithTalent.forEach(role => {
      minTotalRate += (role.hourlyRateRange.min || 0) * (role.weeklyHours || 0);
      maxTotalRate += (role.hourlyRateRange.max || 0) * (role.weeklyHours || 0);
    });
    const estimateTimelineInWeeks = parseInt(currentProjectBrief.timeline) * 4 || 12;

    // Ensure field names match DB schema for team_recommendations
    const recommendationToSaveForDB = {
      project_brief_id: currentProjectBrief.id,
      user_id: userId,
      recommendation_summary: gptTeamStructure.recommendationSummary,
      roles: recommendedRolesWithTalent, // This is JSONB
      total_estimated_rate: { min: minTotalRate, max: maxTotalRate }, // JSONB
      total_weekly_burn: { min: minTotalRate, max: maxTotalRate }, // JSONB
      total_project_estimate: {
        min: minTotalRate * estimateTimelineInWeeks,
        max: maxTotalRate * estimateTimelineInWeeks
      }, // JSONB
      generated_at: new Date().toISOString(),
    };

    // 5. Save TeamRecommendation to DB
    const { data: savedRecommendation, error: recommendationError } = await supabaseAdmin
      .from('team_recommendations')
      .insert(recommendationToSaveForDB)
      .select()
      .single();

    if (recommendationError) {
      console.error('Error saving team recommendation:', recommendationError);
      throw new Error(`Failed to save team recommendation: ${recommendationError.message}`);
    }
    if (!savedRecommendation) throw new Error('Failed to save team recommendation: No data returned.');

    return new Response(
      JSON.stringify(savedRecommendation),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in team-generator Supabase function:', error.message, error.stack);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
