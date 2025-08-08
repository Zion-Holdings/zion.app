import { FormEvent, useState } from 'react'
import { useToast } from '../../components/ui/ToastProvider'
import Link from 'next/link'

export default function PostJobPage() {
  const { addToast } = useToast()
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    await new Promise(r => setTimeout(r, 800))
    setSubmitting(false)
    const id = Math.random().toString(36).slice(2)
    addToast({ title: 'Job posted', description: 'We created your job and will suggest matches shortly.', variant: 'success', actionLabel: 'View job', onAction: () => window.location.href = `/jobs/${id}` })
    setTitle('')
    setDesc('')
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Post a Job</h2>
      <form onSubmit={onSubmit} className="space-y-3 max-w-2xl">
        <input value={title} onChange={e => setTitle(e.target.value)} required className="w-full rounded-md border px-3 py-2 bg-transparent" placeholder="Job title" />
        <textarea value={desc} onChange={e => setDesc(e.target.value)} required className="w-full rounded-md border px-3 py-2 bg-transparent min-h-[160px]" placeholder="Describe the role, responsibilities, and skills" />
        <div className="text-sm opacity-70">Or <Link href="/"><a className="underline underline-offset-2">import a brief</a></Link></div>
        <button disabled={submitting} className="px-4 py-2 rounded-md border disabled:opacity-50">{submitting ? 'Posting...' : 'Post job'}</button>
      </form>
    </div>
  )
}