// import type { NextApiRequest, NextApiResponse } from 'next'; // Removed
import { supabase } from '@/integrations/supabase/client';
import { TeamInvite } from '@/types';

// TODO: This API route was written for a Next.js environment.
// This project uses Vite. This logic needs to be refactored,
// potentially into a Supabase Function or a backend handler compatible with Vite.
/*
export default async function handler(
  req: any, // Placeholder
  res: any  // Placeholder
) {
  if (req.method !== 'POST') {
    // res.setHeader('Allow', ['POST']); // Placeholder
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const {
      talentId,
      roleTitle,
      projectBriefId,
      teamRecommendationId
    } = req.body;

    if (!talentId || !roleTitle) {
      return res.status(400).json({ error: 'Missing required fields: talentId and roleTitle are required.' });
    }

    const newInviteData: Partial<TeamInvite> = {
      talent_id: talentId,
      role_title: roleTitle,
      status: 'pending',
    };

    if (projectBriefId) {
      newInviteData.project_brief_id = projectBriefId;
    }
    if (teamRecommendationId) {
      newInviteData.team_recommendation_id = teamRecommendationId;
    }

    const { data, error } = await supabase
      .from('team_invites')
      .insert(newInviteData)
      .select()
      .single();

    if (error) {
      console.error('Error inserting team invite:', error);
      throw error;
    }

    if (!data) {
      return res.status(500).json({ error: 'Failed to create team invite: No data returned.' });
    }

    res.status(201).json(data as TeamInvite);

  } catch (error: any) {
    console.error('Error in /api/team-builder/invite:', error);
    return res.status(500).json({ error: `Failed to create team invite: ${error.message || 'Unknown error'}` });
  }
}
*/

export {}; // Keep it as a module
