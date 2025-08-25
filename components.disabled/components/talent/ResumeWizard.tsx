import React, { useMemo, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Stepper from './Stepper'
import TagInput from './TagInput'
import PortfolioCard from './PortfolioCard'
import ResumePreview from './ResumePreview'
import { ResumeDocument, WorkExperience, Education, Certification, PortfolioProject } from '../../utils/types/resume'
import { aiGenerateFromProfile, aiImprove, listResumes, saveResume, publishResume, removeResume } from '../../utils/api/resume'

const steps = ['Summary', 'Experience', 'Skills', 'Education', 'Certifications', 'Projects', 'Preview']

function emptyDoc(): ResumeDocument {
  const now = new Date().toISOString()
  return {
    id: uuidv4(),
    name: 'Untitled Resume',
    personalSummary: '',
    skills: [],
    work: [],
    certifications: [],
    education: [],
    projects: [],
    createdAt: now,
    updatedAt: now,
  }
}

export default function ResumeWizard() {
  const [current, setCurrent] = useState(0)
  const [doc, setDoc] = useState<ResumeDocument>(emptyDoc())
  const [allDocs, setAllDocs] = useState<ResumeDocument[]>([])
  const [saving, setSaving] = useState(false)
  const [loading, setLoading] = useState(false)

  React.useEffect(() => {
    listResumes().then(setAllDocs).catch(() => {})
  }, [])

  const onGenerate = async () => {
    setLoading(true)
    try {
      const ai = await aiGenerateFromProfile()
      setDoc((d) => ({
        ...d,
        personalSummary: ai.personalSummary ?? d.personalSummary,
        skills: ai.skills ?? d.skills,
        work: (ai.work as WorkExperience[]) ?? d.work,
        education: (ai.education as Education[]) ?? d.education,
        certifications: (ai.certifications as Certification[]) ?? d.certifications,
        projects: (ai.projects as PortfolioProject[]) ?? d.projects,
        updatedAt: new Date().toISOString(),
      }))
    } finally {
      setLoading(false)
    }
  }

  const improveField = async (field: 'summary' | 'work' | 'education' | 'certifications' | 'projects') => {
    setLoading(true)
    try {
      const text = await aiImprove(field, doc)
      if (field === 'summary') setDoc((d) => ({ ...d, personalSummary: text }))
    } finally {
      setLoading(false)
    }
  }

  const upsert = async () => {
    setSaving(true)
    try {
      const saved = await saveResume({ ...doc, updatedAt: new Date().toISOString() })
      setDoc(saved)
      const list = await listResumes()
      setAllDocs(list)
    } finally {
      setSaving(false)
    }
  }

  const onNewVersion = () => setDoc(emptyDoc())

  const onDelete = async (id: string) => {
    await removeResume(id)
    const list = await listResumes()
    setAllDocs(list)
  }

  const onPublish = async () => {
    setSaving(true)
    try {
      const published = await publishResume(doc.id)
      setDoc(published)
      alert('Resume added to your public profile.')
    } finally {
      setSaving(false)
    }
  }

  const addExperience = () => setDoc((d) => ({ ...d, work: [...d.work, { id: uuidv4(), jobTitle: '', company: '', description: '' }] }))
  const addEducation = () => setDoc((d) => ({ ...d, education: [...d.education, { id: uuidv4(), school: '' }] as Education[] }))
  const addCertification = () => setDoc((d) => ({ ...d, certifications: [...d.certifications, { id: uuidv4(), name: '' }] }))
  const addProject = () => setDoc((d) => ({ ...d, projects: [...d.projects, { id: uuidv4(), title: '', summary: '', technologies: [] }] }))

  const content = useMemo(() => {
    switch (current) {
      case 0:
        return (
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium">Resume Name</label>
              <input className="mt-1 w-full border rounded px-3 py-2 bg-white dark:bg-black" value={doc.name} onChange={(e) => setDoc({ ...doc, name: e.target.value })} />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium">Personal Summary</label>
                <div className="flex gap-2">
                  <button className="px-2 py-1 text-sm border rounded" onClick={onGenerate} disabled={loading}>Generate with AI</button>
                  <button className="px-2 py-1 text-sm border rounded" onClick={() => improveField('summary')} disabled={loading}>Improve This</button>
                </div>
              </div>
              <textarea className="mt-1 w-full border rounded px-3 py-2 min-h-[160px] bg-white dark:bg-black" value={doc.personalSummary} onChange={(e) => setDoc({ ...doc, personalSummary: e.target.value })} />
            </div>
          </div>
        )
      case 1:
        return (
          <div className="space-y-4">
            {doc.work.map((w, idx) => (
              <div key={w.id} className="border rounded p-3 space-y-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm">Job Title</label>
                    <input className="w-full border rounded px-2 py-1 bg-white dark:bg-black" value={w.jobTitle} onChange={(e) => {
                      const next = [...doc.work]; next[idx] = { ...w, jobTitle: e.target.value }; setDoc({ ...doc, work: next })
                    }} />
                  </div>
                  <div>
                    <label className="block text-sm">Company</label>
                    <input className="w-full border rounded px-2 py-1 bg-white dark:bg-black" value={w.company} onChange={(e) => {
                      const next = [...doc.work]; next[idx] = { ...w, company: e.target.value }; setDoc({ ...doc, work: next })
                    }} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm">Start Date</label>
                    <input type="text" className="w-full border rounded px-2 py-1 bg-white dark:bg-black" value={w.startDate || ''} onChange={(e) => { const next = [...doc.work]; next[idx] = { ...w, startDate: e.target.value }; setDoc({ ...doc, work: next }) }} />
                  </div>
                  <div>
                    <label className="block text-sm">End Date</label>
                    <input type="text" className="w-full border rounded px-2 py-1 bg-white dark:bg-black" value={w.endDate || ''} onChange={(e) => { const next = [...doc.work]; next[idx] = { ...w, endDate: e.target.value }; setDoc({ ...doc, work: next }) }} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label className="block text-sm">Description</label>
                    <button className="px-2 py-1 text-sm border rounded" onClick={() => improveField('work')} disabled={loading}>Improve This</button>
                  </div>
                  <textarea className="w-full border rounded px-2 py-1 min-h-[120px] bg-white dark:bg-black" value={w.description} onChange={(e) => { const next = [...doc.work]; next[idx] = { ...w, description: e.target.value }; setDoc({ ...doc, work: next }) }} />
                </div>
                <div className="flex justify-end">
                  <button className="text-sm text-red-600" onClick={() => setDoc({ ...doc, work: doc.work.filter((x) => x.id !== w.id) })}>Remove</button>
                </div>
              </div>
            ))}
            <button className="px-3 py-2 border rounded" onClick={addExperience}>Add Experience</button>
          </div>
        )
      case 2:
        return (
          <div className="space-y-2">
            <label className="block text-sm font-medium">Skills</label>
            <TagInput value={doc.skills} onChange={(skills) => setDoc({ ...doc, skills })} placeholder="Add a skill and press Enter" />
          </div>
        )
      case 3:
        return (
          <div className="space-y-4">
            {doc.education.map((e, idx) => (
              <div key={e.id} className="border rounded p-3 space-y-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm">School</label>
                    <input className="w-full border rounded px-2 py-1 bg-white dark:bg-black" value={e.school} onChange={(ev) => { const next = [...doc.education]; next[idx] = { ...e, school: ev.target.value }; setDoc({ ...doc, education: next }) }} />
                  </div>
                  <div>
                    <label className="block text-sm">Degree</label>
                    <input className="w-full border rounded px-2 py-1 bg-white dark:bg-black" value={e.degree || ''} onChange={(ev) => { const next = [...doc.education]; next[idx] = { ...e, degree: ev.target.value }; setDoc({ ...doc, education: next }) }} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm">Field</label>
                    <input className="w-full border rounded px-2 py-1 bg-white dark:bg-black" value={e.field || ''} onChange={(ev) => { const next = [...doc.education]; next[idx] = { ...e, field: ev.target.value }; setDoc({ ...doc, education: next }) }} />
                  </div>
                  <div>
                    <label className="block text-sm">Dates</label>
                    <input className="w-full border rounded px-2 py-1 bg-white dark:bg-black" placeholder="e.g., 2018 – 2022" value={`${e.startDate || ''}${e.endDate ? ` – ${e.endDate}` : ''}`} onChange={(ev) => { const next = [...doc.education]; next[idx] = { ...e, startDate: ev.target.value }; setDoc({ ...doc, education: next }) }} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm">Description</label>
                  <textarea className="w-full border rounded px-2 py-1 min-h-[100px] bg-white dark:bg-black" value={e.description || ''} onChange={(ev) => { const next = [...doc.education]; next[idx] = { ...e, description: ev.target.value }; setDoc({ ...doc, education: next }) }} />
                </div>
                <div className="flex justify-end">
                  <button className="text-sm text-red-600" onClick={() => setDoc({ ...doc, education: doc.education.filter((x) => x.id !== e.id) })}>Remove</button>
                </div>
              </div>
            ))}
            <button className="px-3 py-2 border rounded" onClick={addEducation}>Add Education</button>
          </div>
        )
      case 4:
        return (
          <div className="space-y-4">
            {doc.certifications.map((c, idx) => (
              <div key={c.id} className="border rounded p-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm">Name</label>
                  <input className="w-full border rounded px-2 py-1 bg-white dark:bg-black" value={c.name} onChange={(ev) => { const next = [...doc.certifications]; next[idx] = { ...c, name: ev.target.value }; setDoc({ ...doc, certifications: next }) }} />
                </div>
                <div>
                  <label className="block text-sm">Issuer</label>
                  <input className="w-full border rounded px-2 py-1 bg-white dark:bg-black" value={c.issuer || ''} onChange={(ev) => { const next = [...doc.certifications]; next[idx] = { ...c, issuer: ev.target.value }; setDoc({ ...doc, certifications: next }) }} />
                </div>
              </div>
            ))}
            <button className="px-3 py-2 border rounded" onClick={addCertification}>Add Certification</button>
          </div>
        )
      case 5:
        return (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {doc.projects.map((p) => (
                <PortfolioCard key={p.id} project={p} onEdit={(proj) => {
                  const title = window.prompt('Project title', proj.title) || proj.title
                  const summary = window.prompt('Summary', proj.summary) || proj.summary
                  const tech = window.prompt('Technologies (comma separated)', proj.technologies.join(', ')) || proj.technologies.join(', ')
                  const liveDemoUrl = window.prompt('Live demo URL', proj.liveDemoUrl || '') || proj.liveDemoUrl
                  const githubUrl = window.prompt('GitHub URL', proj.githubUrl || '') || proj.githubUrl
                  const screenshotUrl = window.prompt('Screenshot URL', proj.screenshotUrl || '') || proj.screenshotUrl
                  const assetUrl = window.prompt('Asset URL (PDF or file)', proj.assetUrl || '') || proj.assetUrl
                  const next = doc.projects.map((x) => (x.id === proj.id ? { ...proj, title, summary, technologies: tech.split(',').map((s) => s.trim()).filter(Boolean), liveDemoUrl: liveDemoUrl || undefined, githubUrl: githubUrl || undefined, screenshotUrl: screenshotUrl || undefined, assetUrl: assetUrl || undefined } : x))
                  setDoc({ ...doc, projects: next })
                }} onDelete={(id) => setDoc({ ...doc, projects: doc.projects.filter((x) => x.id !== id) })} />
              ))}
            </div>
            <button className="mt-4 px-3 py-2 border rounded" onClick={addProject}>Add Project</button>
          </div>
        )
      case 6:
        return (
          <div className="space-y-4">
            <ResumePreview doc={doc} />
            <div className="flex gap-3">
              <button className="px-3 py-2 border rounded" onClick={() => window.print()}>Export PDF</button>
              <button className="px-3 py-2 border rounded" onClick={onPublish} disabled={saving}>Add to Public Profile</button>
            </div>
          </div>
        )
      default:
        return null
    }
  }, [current, doc, loading, saving])

  return (
    <div className="space-y-4">
      <Stepper steps={steps} current={current} />

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <button className="px-3 py-2 border rounded" onClick={() => setCurrent(Math.max(0, current - 1))} disabled={current === 0}>Back</button>
          <button className="px-3 py-2 border rounded" onClick={() => setCurrent(Math.min(steps.length - 1, current + 1))} disabled={current === steps.length - 1}>Next</button>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-2 border rounded" onClick={onNewVersion}>New Version</button>
          <button className="px-3 py-2 border rounded" onClick={upsert} disabled={saving}>{saving ? 'Saving…' : 'Save Version'}</button>
        </div>
      </div>

      <div>{content}</div>

      <div className="pt-6 border-t mt-6">
        <h3 className="font-semibold mb-2">Your Saved Resumes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {allDocs.map((r) => (
            <div key={r.id} className="border rounded p-3 bg-white/50 dark:bg-gray-900/40">
              <div className="font-medium">{r.name}</div>
              <div className="text-xs text-gray-500">Updated {new Date(r.updatedAt).toLocaleString()}</div>
              <div className="mt-2 flex gap-2 text-sm">
                <button className="px-2 py-1 border rounded" onClick={() => setDoc(r)}>Open</button>
                <button className="px-2 py-1 border rounded" onClick={() => onDelete(r.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}