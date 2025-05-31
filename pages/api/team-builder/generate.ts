import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/integrations/supabase/client'; // Assuming supabase client is exported from here
import { ProjectBrief, TeamRecommendation } from '@/types'; // Assuming types are exported from the barrel file

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TeamRecommendation | { error: string }>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const projectBrief = req.body as ProjectBrief;

    // Validate projectBrief (basic validation for now)
    if (!projectBrief || !projectBrief.projectName || !projectBrief.goals || !projectBrief.timeline || !projectBrief.budget) {
      return res.status(400).json({ error: 'Missing required fields in project brief.' });
    }

    // Call the Supabase Edge Function 'team-generator'
    // The function name will be 'team-generator' as per our plan
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

    // Assuming the Supabase function returns data compatible with TeamRecommendation
    res.status(200).json(data as TeamRecommendation);

  } catch (error: any) {
    console.error('Error in /api/team-builder/generate:', error);
    // Check if the error is from Supabase function invocation
    if (error.context && error.context.errorMessage) {
        return res.status(500).json({ error: `Failed to generate team recommendation: ${error.context.errorMessage}` });
    }
    return res.status(500).json({ error: `Failed to generate team recommendation: ${error.message || 'Unknown error'}` });
  }
}
