import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/integrations/supabase/client'; // Ensure this is the admin client or a client with insert rights
import { TeamInvite } from '@/types'; // From src/types/team-builder.ts

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TeamInvite | { error: string }>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const {
      talentId,
      roleTitle,
      projectBriefId, // Optional, depends if we save the brief and get an ID
      teamRecommendationId // Optional, if we save the recommendation
    } = req.body;

    if (!talentId || !roleTitle) {
      return res.status(400).json({ error: 'Missing required fields: talentId and roleTitle are required.' });
    }

    // Construct the data for insertion, ensuring snake_case for DB columns
    const newInviteData: {
      talent_id: string;
      role_title: string;
      status: string;
      project_brief_id?: string;
      team_recommendation_id?: string;
    } = {
      talent_id: talentId,
      role_title: roleTitle,
      status: 'pending', // Default status
    };

    if (projectBriefId) {
      newInviteData.project_brief_id = projectBriefId;
    }
    if (teamRecommendationId) {
      newInviteData.team_recommendation_id = teamRecommendationId;
    }

    // Use the Supabase client to insert data.
    // Ensure RLS is configured appropriately on the 'team_invites' table,
    // or use the service_role client if necessary for bypassing RLS (not generally recommended from client-facing APIs).
    // The migration script includes example RLS policies that would need the user to be authenticated.
    const { data, error } = await supabase
      .from('team_invites')
      .insert(newInviteData)
      .select() // Return the created record
      .single(); // Expect a single record

    if (error) {
      console.error('Error inserting team invite:', error);
      // Check for specific error types, e.g., RLS violation, FK constraint
      if (error.code === '42501') { // RLS violation
        return res.status(403).json({ error: 'Forbidden: You do not have permission to create this invite.' });
      }
      return res.status(500).json({ error: `Database error: ${error.message}` });
    }

    if (!data) {
      return res.status(500).json({ error: 'Failed to create team invite: No data returned.' });
    }

    // TODO: Optionally, trigger a notification to the invited talent here
    // (e.g., using Supabase Edge Functions or a direct notification service call).

    res.status(201).json(data as TeamInvite);

  } catch (error: any) {
    console.error('Error in /api/team-builder/invite:', error);
    // Ensure a generic message for unknown errors if details are sensitive
    return res.status(500).json({ error: `Failed to create team invite: ${error.message || 'Unknown server error'}` });
  }
}
