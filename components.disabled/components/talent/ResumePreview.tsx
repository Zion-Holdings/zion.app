import React from 'react'
import { ResumeDocument } from '../../utils/types/resume'

export default function ResumePreview({ doc }: { doc: ResumeDocument }) {
  return (
    <div className="bg-white text-black p-6 rounded shadow print:shadow-none print:p-0 print:bg-white">
      <h1 className="text-2xl font-bold">{doc.name}</h1>
      <p className="mt-2 whitespace-pre-wrap">{doc.personalSummary}</p>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Skills</h2>
        <div className="mt-2 flex flex-wrap gap-2">
          {doc.skills.map((s) => (
            <span key={s} className="text-xs bg-gray-200 px-2 py-1 rounded">{s}</span>
          ))}
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Work Experience</h2>
        <div className="mt-2 space-y-3">
          {doc.work.map((w) => (
            <div key={w.id}>
              <div className="font-medium">{w.jobTitle} — {w.company}</div>
              <div className="text-xs text-gray-600">{[w.startDate, w.endDate].filter(Boolean).join(' – ')}</div>
              <p className="text-sm mt-1 whitespace-pre-wrap">{w.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Education</h2>
        <div className="mt-2 space-y-3">
          {doc.education.map((e) => (
            <div key={e.id}>
              <div className="font-medium">{e.school} {e.degree ? `— ${e.degree}` : ''}</div>
              <div className="text-xs text-gray-600">{[e.startDate, e.endDate].filter(Boolean).join(' – ')}</div>
              {e.description && <p className="text-sm mt-1 whitespace-pre-wrap">{e.description}</p>}
            </div>
          ))}
        </div>
      </section>

      {doc.certifications.length > 0 && (
        <section className="mt-6">
          <h2 className="text-xl font-semibold">Certifications</h2>
          <ul className="list-disc list-inside mt-2 text-sm">
            {doc.certifications.map((c) => (
              <li key={c.id}>{c.name}{c.issuer ? ` — ${c.issuer}` : ''}{c.date ? ` (${c.date})` : ''}</li>
            ))}
          </ul>
        </section>
      )}

      {doc.projects.length > 0 && (
        <section className="mt-6">
          <h2 className="text-xl font-semibold">Projects</h2>
          <ul className="mt-2 space-y-2">
            {doc.projects.map((p) => (
              <li key={p.id}>
                <div className="font-medium">{p.title}</div>
                <div className="text-sm">{p.summary}</div>
                {p.technologies.length > 0 && (
                  <div className="text-xs text-gray-600">Tech: {p.technologies.join(', ')}</div>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}