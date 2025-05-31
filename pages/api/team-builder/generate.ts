// import type { NextApiRequest, NextApiResponse } from 'next'; // Removed
import { supabase } from '@/integrations/supabase/client';
import { ProjectBrief, TeamRecommendation } from '@/types';

// TODO: This API route was written for a Next.js environment.
// This project uses Vite. This logic needs to be refactored,
// potentially into a Supabase Function or a backend handler compatible with Vite.
/*
export default async function handler(
  req: any, // Placeholder for actual request type in this environment
  res: any  // Placeholder for actual response type in this environment
) {
  if (req.method !== 'POST') {
    // res.setHeader('Allow', ['POST']); // Placeholder
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const projectBrief = req.body as ProjectBrief;

    if (!projectBrief || !projectBrief.projectName || !projectBrief.goals || !projectBrief.timeline || !projectBrief.budget) {
      return res.status(400).json({ error: 'Missing required fields in project brief.' });
    }

    const { data, error } = await supabase.functions.invoke('team-generator', {
      body: projectBrief,
    });

    if (error) {
      console.error('Error invoking Supabase function team-generator:', error);
      throw error;
    }

    if (!data) {
      console.error('No data returned from Supabase function team-generator');
      return res.status(500).json({ error: 'Failed to generate team recommendation: No data returned.' });
    }

    res.status(200).json(data as TeamRecommendation);

  } catch (error: any) {
    console.error('Error in /api/team-builder/generate:', error);
    if (error.context && error.context.errorMessage) {
        return res.status(500).json({ error: `Failed to generate team recommendation: ${error.context.errorMessage}` });
    }
    return res.status(500).json({ error: `Failed to generate team recommendation: ${error.message || 'Unknown error'}` });
  }
}
*/

export {}; // Keep it as a module
