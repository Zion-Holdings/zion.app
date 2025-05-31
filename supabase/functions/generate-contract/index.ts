
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface Milestone {
  title: string;
  description: string;
  dueDate: string;
  estimatedHours: number; // Keep this as it's useful detail
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get the OpenAI API key from environment variables
    const apiKey = Deno.env.get('OPENAI_API_KEY');
    if (!apiKey) {
      throw new Error('OPENAI_API_KEY is not set');
    }

    // Parse request body
    const {
      projectTitle,
      clientName,
      talentName,
      deliverables,
      milestones, // Array: { title, description, dueDate, estimatedHours }
      paymentStructure,
      jurisdiction, // Added for new prompt
      additionalClauses, // Optional: ['nda', 'ip', 'termination', 'revisions']
    } = await req.json();

    // Create the contract prompt for OpenAI
    // --- NEW PROMPT CONSTRUCTION AS PER SUBTASK ---
    let prompt = `Please generate a professional contractual agreement between ${clientName} (Client) and ${talentName} (Talent) for the following project:

Project Title: ${projectTitle}
Deliverables: ${deliverables}
Payment Structure: ${paymentStructure}

The contract must include (but is not limited to) the following sections:
- Clear identification of Client and Talent
- Detailed description of Deliverables
- Project Milestones (if provided)
- Payment Structure and Schedule (linked to milestones if applicable)
- Intellectual Property (IP) rights transfer to the client upon full payment
- Clear Termination Clause outlining conditions and process for ending the contract by either party
- Governing Law and Jurisdiction (e.g., "This agreement shall be governed by and construed in accordance with the laws of ${jurisdiction}.")
`; // Note: Jurisdiction is directly embedded here.

    if (milestones && milestones.length > 0) {
      prompt += `\nProject Milestones:\n`;
      milestones.forEach((milestone: Milestone, index: number) => {
        prompt += `
  Milestone ${index + 1}: ${milestone.title}
  - Description: ${milestone.description}
  - Due Date: ${new Date(milestone.dueDate).toLocaleDateString()}
  - Estimated Hours: ${milestone.estimatedHours}\n`; // Added estimatedHours
      });
    } else {
      prompt += `\nNo specific project milestones defined.\n`;
    }

    if (additionalClauses && additionalClauses.length > 0) {
      prompt += `\nPlease also incorporate the following specific clauses if not already covered or if they provide more detail:\n`;
      if (additionalClauses.includes('nda')) {
        prompt += `- Non-Disclosure Agreement (NDA)\n`;
      }
      // IP and Termination are already requested in the main prompt,
      // but can be listed here if more specific versions are expected from 'additionalClauses'
      if (additionalClauses.includes('ip')) {
        prompt += `- Detailed Intellectual Property rights (if more specific than standard client transfer)\n`;
      }
      if (additionalClauses.includes('termination')) {
        prompt += `- Specific Termination conditions (if more detailed than standard clause)\n`;
      }
      if (additionalClauses.includes('revisions')) {
        prompt += `- Revision and amendment procedures\n`;
      }
    }

    prompt += `
Ensure the contract is well-structured, comprehensive, uses clear language, and is formatted in markdown.
`;
    // --- END OF NEW PROMPT CONSTRUCTION ---

    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: 'Generate a professional, legally safe service contract for a freelance project between a client and a developer. Include deliverables, payment terms, IP transfer, termination clause, and jurisdiction.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to generate contract');
    }

    const contract = data.choices[0].message.content.trim();
    
    return new Response(JSON.stringify({ 
      success: true, 
      contract 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error generating contract:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || 'Failed to generate contract' 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
