import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
const isConfigured = supabaseUrl && !supabaseUrl.includes('placeholder') && supabaseAnonKey && !supabaseAnonKey.includes('placeholder')

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()
  const { id } = req.body || {}

  if (!isConfigured) {
    return res.status(200).json({ id })
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey)
  const { error } = await supabase.from('resume_documents').delete().eq('id', id)
  if (error) return res.status(500).json({ error: error.message })
  res.status(200).json({ id })
}