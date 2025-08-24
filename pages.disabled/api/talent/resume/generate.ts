import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) return res.status(400).json({ error: 'Missing OPENAI_API_KEY' })
  const client = new OpenAI({ apiKey })

  const prompt = `You are assisting a talent user on the Zion AI Marketplace. Based on a typical software engineer profile, propose a concise personal summary, a skill list (10-16 items), 2-3 work experience entries with strong bullet points, 1 education, 1-2 certifications, and 1-2 portfolio projects. Return JSON with keys: personalSummary (string), skills (string[]), work (array of {jobTitle, company, description}), education (array), certifications (array), projects (array of {title, summary, technologies}). Keep it neutral and professional.`

  try {
    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You output only strict JSON.' },
        { role: 'user', content: prompt },
      ],
      temperature: 0.4,
    })
    const text = completion.choices[0]?.message?.content || '{}'
    const parsed = JSON.parse(text)
    res.status(200).json(parsed)
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}