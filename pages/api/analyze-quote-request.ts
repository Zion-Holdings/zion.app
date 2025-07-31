import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { serviceTitle, projectDescription, budgetRange, additionalRequirements } = req.body;

    const prompt = `
Analyze the following IT service quote request and provide insights:

Service: ${serviceTitle}
Project Description: ${projectDescription}
Budget Range: ${budgetRange}
Additional Requirements: ${additionalRequirements || 'None'}

Please provide:
1. A concise summary of the project requirements
2. Relevant tags for categorization (e.g., "web-development", "cloud-migration", "ai-integration")
3. Priority level (low, medium, high) based on complexity and budget
4. Estimated complexity (simple, moderate, complex)

Respond in JSON format with the following structure:
{
  "summary": "Brief project summary",
  "tags": ["tag1", "tag2", "tag3"],
  "priority": "low|medium|high",
  "estimatedComplexity": "simple|moderate|complex"
}
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are an expert IT project analyst. Provide accurate, professional analysis of IT service requests."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.3,
      max_tokens: 500
    });

    const responseText = completion.choices[0]?.message?.content;
    
    if (!responseText) {
      throw new Error('No response from OpenAI');
    }

    // Parse the JSON response
    let analysis;
    try {
      analysis = JSON.parse(responseText);
    } catch (parseError) {
      console.error('Failed to parse OpenAI response:', parseError);
      // Fallback analysis
      analysis = {
        summary: `Project request for ${serviceTitle}: ${projectDescription.substring(0, 100)}...`,
        tags: ['it-services', 'project-request'],
        priority: 'medium',
        estimatedComplexity: 'moderate'
      };
    }

    // Validate and sanitize the response
    const sanitizedAnalysis = {
      summary: analysis.summary || 'Project analysis pending',
      tags: Array.isArray(analysis.tags) ? analysis.tags.slice(0, 5) : ['it-services'],
      priority: ['low', 'medium', 'high'].includes(analysis.priority) ? analysis.priority : 'medium',
      estimatedComplexity: ['simple', 'moderate', 'complex'].includes(analysis.estimatedComplexity) 
        ? analysis.estimatedComplexity : 'moderate'
    };

    return res.status(200).json(sanitizedAnalysis);
  } catch (error) {
    console.error('OpenAI API error:', error);
    
    // Return fallback analysis
    return res.status(200).json({
      summary: 'Project requirements analysis completed',
      tags: ['it-services', 'project-request'],
      priority: 'medium',
      estimatedComplexity: 'moderate'
    });
  }
} 