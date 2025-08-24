import { ResumeDocument } from '../types/resume'

const isSupabaseConfigured = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
  return url && !url.includes('placeholder') && key && !key.includes('placeholder')
}

const LOCAL_KEY = 'zion.resume.documents.v1'

function readLocal(): ResumeDocument[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(LOCAL_KEY)
    return raw ? (JSON.parse(raw) as ResumeDocument[]) : []
  } catch {
    return []
  }
}

function writeLocal(items: ResumeDocument[]) {
  if (typeof window === 'undefined') return
  localStorage.setItem(LOCAL_KEY, JSON.stringify(items))
}

export async function listResumes(): Promise<ResumeDocument[]> {
  if (!isSupabaseConfigured()) {
    return readLocal()
  }
  const res = await fetch('/api/talent/resume/list')
  if (!res.ok) throw new Error('Failed to list resumes')
  return res.json()
}

export async function saveResume(doc: ResumeDocument): Promise<ResumeDocument> {
  if (!isSupabaseConfigured()) {
    const all = readLocal()
    const idx = all.findIndex((d) => d.id === doc.id)
    if (idx >= 0) {
      all[idx] = doc
    } else {
      all.push(doc)
    }
    writeLocal(all)
    return doc
  }
  const res = await fetch('/api/talent/resume/save', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(doc),
  })
  if (!res.ok) throw new Error('Failed to save resume')
  return res.json()
}

export async function removeResume(id: string): Promise<{ id: string }> {
  if (!isSupabaseConfigured()) {
    const all = readLocal().filter((d) => d.id !== id)
    writeLocal(all)
    return { id }
  }
  const res = await fetch('/api/talent/resume/delete', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  })
  if (!res.ok) throw new Error('Failed to delete resume')
  return res.json()
}

export async function publishResume(id: string): Promise<ResumeDocument> {
  const res = await fetch('/api/talent/resume/publish', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  })
  if (!res.ok) throw new Error('Failed to publish resume')
  return res.json()
}

export async function aiGenerateFromProfile(): Promise<Partial<ResumeDocument>> {
  const res = await fetch('/api/talent/resume/generate', { method: 'POST' })
  if (!res.ok) throw new Error('Failed to generate from AI')
  return res.json()
}

export async function aiImprove(field: string, context: any): Promise<string> {
  const res = await fetch('/api/talent/resume/improve', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ field, context }),
  })
  if (!res.ok) throw new Error('Failed to improve with AI')
  const data = await res.json()
  return data.text as string
}