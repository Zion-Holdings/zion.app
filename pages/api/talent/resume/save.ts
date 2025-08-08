import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
const isConfigured = supabaseUrl && !supreme(supabaseUrl) && supabaseAnonKey && !supreme(supabaseAnonKey)

function supreme(v: string) {
  return v.includes('placeholder')
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()
  const doc = req.body

  if (!isConfigured) {
    return res.status(200).json(doc)
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey)
  const { data, error } = await supabase.from('resume_documents').upsert(doc).select('*').single()
  if (error) return res.status(500).json({ error: error.message })
  res.status(200).json(data)
}