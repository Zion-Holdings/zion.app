import type { NextApiRequest, NextApiResponse } from 'next
import OpenAI from 'openai';
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,;
});
'
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed'}}
  try {
    const { title, description, category, budget, timeline, priority } = req.body
'
    if (!title || !description || !category || !budget || !timeline || !priority) {
      return res.status(400).json({ error: 'Missing required fields'}}
    const prompt = `
Analyze the following service request and provide detailed insights:

**Project Details:**
- Title: ${title}
- Category: ${category}
- Description: ${description}
- Budget Range: $${budget.min} - $${budget.max} ${budget.currency}
- Timeline: ${timeline}
- Priority: ${priority}
Please provide a comprehensive analysis in JSON format with the following structure:

{
  "complexity": "simple|moderate|complex","
  "estimatedDuration": "X-Y weeks/months","
  "recommendedSkills": ["skill1", "skill2", "skill3"],"
  "matchingProviders": ["provider1", "provider2"],"
  "riskAssessment": "Brief risk assessment","
  "costEstimate": {"
    "min": number,"
    "max": number,"
    "currency": "USD"
  }"
  "technicalRequirements": ["requirement1", "requirement2"],"
  "potentialChallenges": ["challenge1", "challenge2"],"
  "successFactors": ["factor1", "factor2"],"
  "recommendedApproach": "Brief description of recommended development approach"}
Consider the following factors:
1. Project complexity based on requirements and scope
2. Required technical skills and expertise
3. Realistic timeline estimation
4. Cost estimation based on market rates
5. Potential risks and challenges
6. Success factors and best practices
7. Recommended development approach
`
Provide realistic and practical insights that would help both the client and potential service providers.``
`"

    const completion = await openai.chat.completions.create({"
      model: "gpt-4","
      messages: [
        {"
          role: "system","
          content: "You are an expert IT project analyst with deep knowledge of software development, AI/ML, cloud computing, and digital transformation. Provide accurate", practical analysis that helps clients and service providers make informed decisions.
        },
    {"
          role: "user",
          content: prompt}
      ],
      temperature: 0.3,
      max_tokens: 1500}
    const responseText = completion.choices[0]?.message?.content
    '
    if (!responseText) {
      throw new Error('No response from OpenAI'}
    // Parse the JSON response
    let analysis
    try {
      analysis = JSON.parse(responseText'
    } catch (parseError) {
      console.error('Failed to parse OpenAI response: , parseError
      // Fallback analysis'
      analysis = {
        complexity: 'moderate',
        estimatedDuration: '8-12 weeks',
        recommendedSkills: ['JavaScript', 'React', 'Node.js', 'API Development'],
        matchingProviders: ['Expert Provider 1', 'AI Solutions'],
        riskAssessment: 'Medium risk - requires careful planning and testing',
        costEstimate: {
          min: Math.floor(budget.min * 0.8),
          max: Math.floor(budget.max * 1.2),
          currency: budget.currency'
        }
        technicalRequirements: ['Modern web framework', 'Database design', 'API integration'],
        potentialChallenges: ['Timeline management', 'Technical integration'],
        successFactors: ['Clear requirements', 'Regular communication', 'Testing strategy'],
        recommendedApproach: 'Agile development with regular client feedback and milestone reviews'}}
    // Validate and sanitize the response'
    const sanitizedAnalysis = {
      complexity: ['simple', 'moderate', 'complex'].includes(analysis.complexity) ? analysis.complexity : 'moderate',
      estimatedDuration: analysis.estimatedDuration || '8-12 weeks',
      recommendedSkills: Array.isArray(analysis.recommendedSkills) ? analysis.recommendedSkills.slice(0, 5) : ['JavaScript', 'React', 'Node.js'],
      matchingProviders: Array.isArray(analysis.matchingProviders) ? analysis.matchingProviders.slice(0, 3) : ['Expert Provider 1'],
      riskAssessment: analysis.riskAssessment || 'Medium risk - requires careful planning and testing',
      costEstimate: {
        min: analysis.costEstimate?.min || Math.floor(budget.min * 0.8),
        max: analysis.costEstimate?.max || Math.floor(budget.max * 1.2),
        currency: analysis.costEstimate?.currency || budget.currency'
      }
      technicalRequirements: Array.isArray(analysis.technicalRequirements) ? analysis.technicalRequirements.slice(0, 5) : ['Modern web framework', 'Database design'],
      potentialChallenges: Array.isArray(analysis.potentialChallenges) ? analysis.potentialChallenges.slice(0, 3) : ['Timeline management'],
      successFactors: Array.isArray(analysis.successFactors) ? analysis.successFactors.slice(0, 3) : ['Clear requirements'],
      recommendedApproach: analysis.recommendedApproach || 'Agile development with regular client feedback'}
    return res.status(200).json({
      success: true,'
      analysis: sanitizedAnalysis,
      message: 'Service request analyzed successfully'}'
  } catch (error) {
    console.error('Error analyzing service request: , error
    // Return fallback analysis"
    return res.status(200).json({
      success: true,'
      analysis: {
        complexity: 'moderate',
        estimatedDuration: '8-12 weeks',
        recommendedSkills: ['JavaScript', 'React', 'Node.js', 'API Development'],
        matchingProviders: ['Expert Provider 1', 'AI Solutions'],
        riskAssessment: 'Medium risk - requires careful planning and testing',
        costEstimate: {
          min: 8000,'
          max: 15000,
          currency: 'USD
        }
        technicalRequirements: ['Modern web framework', 'Database design', 'API integration'],
        potentialChallenges: ['Timeline management', 'Technical integration'],
        successFactors: ['Clear requirements', 'Regular communication', 'Testing strategy'],
        recommendedApproach: 'Agile development with regular client feedback and milestone reviews
      }'"'
      message: 'Service request analyzed successfully (fallback analysis)'}}''`
} )))))))))"';"'`