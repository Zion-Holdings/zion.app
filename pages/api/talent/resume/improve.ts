import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()
  const { field, context } = req.body || {}
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) return res.status(400).json({ error: 'Missing OPENAI_API_KEY' })
  const client = new OpenAI({ apiKey })

  const instruction = `Improve the ${field} section of a resume. Return only the improved text. Be concise, impactful, and use active voice. Avoid fluff and personal pronouns.`

  try {
    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You output only the improved text with no surrounding commentary.' },
        { role: 'user', content: JSON.stringify({ instruction, context }) },
      ],
      temperature: 0.4,
    })
    const text = completion.choices[0]?.message?.content || ''
    res.status(200).json({ text })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}