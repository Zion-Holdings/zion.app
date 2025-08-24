import { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import { v4 as uuidv4 } from "uuid";
import type {
  EducationItem,
  Project,
  TalentPortfolio,
  WorkExperience,
  ResumeVersion,
} from "../../../utils/types/portfolio";
import { loadPortfolio, savePortfolio } from "../../../utils/api/portfolio";
import { TALENT_PROFILES } from "../../../data/talent";

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white/70 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-700 rounded-xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 ${props.className ?? ""}`}
    />
  );
}

function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 ${props.className ?? ""}`}
    />
  );
}

function Button({ children, variant = "primary", ...rest }: any) {
  const base = "inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium";
  const styles =
    variant === "primary"
      ? "bg-indigo-600 text-white hover:bg-indigo-700"
      : variant === "ghost"
      ? "bg-transparent text-indigo-600 hover:bg-indigo-50"
      : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-700";
  return (
    <button {...rest} className={`${base} ${styles} disabled:opacity-50`}>
      {children}
    </button>
  );
}

async function aiAssist(action: "improve-summary" | "format-description" | "suggest-bullets", text?: string, context?: any) {
  const res = await fetch("/api/ai/portfolio-assist", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action, text, context }),
  });
  return (await res.json()) as { ok: boolean; result?: string | string[]; error?: string };
}

function WizardProgress({ step, total }: { step: number; total: number }) {
  const pct = Math.round(((step + 1) / total) * 100);
  return (
    <div className="w-full">
      <div className="flex justify-between text-xs mb-1"><span>Progress</span><span>{pct}%</span></div>
      <div className="h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full">
        <div className="h-2 bg-indigo-600 rounded-full" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function ResumePreview({ version }: { version: ResumeVersion }) {
  return (
    <div className="bg-white shadow print:shadow-none p-6 rounded-xl border border-zinc-200 text-zinc-900 print:bg-white">
      <div className="mb-2">
        <h1 className="text-2xl font-bold">{version.name}</h1>
      </div>
      <p className="text-sm whitespace-pre-line mb-4">{version.personalSummary}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-2">Skills</h3>
          <div className="flex flex-wrap gap-1 mb-4">
            {version.skills.map((s) => (
              <span key={s} className="text-xs bg-zinc-100 px-2 py-1 rounded-md border border-zinc-200">
                {s}
              </span>
            ))}
          </div>
          <h3 className="font-semibold mb-2">Technologies</h3>
          <div className="flex flex-wrap gap-1 mb-4">
            {version.technologies.map((t) => (
              <span key={t} className="text-xs bg-zinc-100 px-2 py-1 rounded-md border border-zinc-200">
                {t}
              </span>
            ))}
          </div>
          {version.certifications.length > 0 && (
            <>
              <h3 className="font-semibold mb-2">Certifications</h3>
              <ul className="list-disc list-inside text-sm mb-4">
                {version.certifications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </>
          )}
        </div>
        <div>
          <h3 className="font-semibold mb-2">Work Experience</h3>
          <div className="space-y-3">
            {version.workHistory.map((w) => (
              <div key={w.id} className="border border-zinc-200 rounded-md p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{w.role} • {w.company}</div>
                    <div className="text-xs text-zinc-600">{w.startDate} – {w.endDate}</div>
                  </div>
                </div>
                <p className="text-sm mt-2 whitespace-pre-line">{w.description}</p>
                {w.bulletPoints?.length > 0 && (
                  <ul className="list-disc list-inside text-sm mt-2">
                    {w.bulletPoints.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {version.education.length > 0 && (
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Education</h3>
          <div className="space-y-2">
            {version.education.map((e) => (
              <div key={e.id} className="border border-zinc-200 rounded-md p-3">
                <div className="font-medium">{e.degree} • {e.school}</div>
                <div className="text-xs text-zinc-600">{e.startDate} – {e.endDate}</div>
                {e.details && <p className="text-sm mt-2 whitespace-pre-line">{e.details}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {version.projects.length > 0 && (
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {version.projects.map((p) => (
              <div key={p.id} className="border border-zinc-200 rounded-md p-3">
                <div className="font-medium">{p.title}</div>
                <p className="text-sm mt-1 whitespace-pre-line">{p.description}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {p.technologies.map((t) => (
                    <span key={t} className="text-xs bg-zinc-100 px-2 py-1 rounded-md border border-zinc-200">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="text-xs text-indigo-700 mt-2 space-x-3">
                  {p.media.githubUrl && (
                    <a className="underline" href={p.media.githubUrl} target="_blank" rel="noreferrer">GitHub</a>
                  )}
                  {p.media.demoUrl && (
                    <a className="underline" href={p.media.demoUrl} target="_blank" rel="noreferrer">Demo</a>
                  )}
                  {p.media.pdfUrl && (
                    <a className="underline" href={p.media.pdfUrl} target="_blank" rel="noreferrer">PDF</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function TalentPortfolioBuilder() {
  const [loading, setLoading] = useState(true);
  const [step, setStep] = useState(0);
  const steps = ["Personal Summary", "Work History", "Education", "Skills & Technologies", "Certifications", "Projects", "Preview"];
  const [portfolio, setPortfolio] = useState<TalentPortfolio>({ versions: [], activeVersionId: undefined });
  const activeVersion = useMemo(() => portfolio.versions.find(v => v.id === portfolio.activeVersionId) ?? null, [portfolio]);
  const [autoGenerate, setAutoGenerate] = useState(false);

  useEffect(() => {
    (async () => {
      const existing = await loadPortfolio();
      if (existing) {
        setPortfolio(existing);
      } else {
        const initialVersion: ResumeVersion = {
          id: uuidv4(),
          name: "General",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          personalSummary: "",
          skills: [],
          technologies: [],
          certifications: [],
          workHistory: [],
          education: [],
          projects: [],
        };
        setPortfolio({ versions: [initialVersion], activeVersionId: initialVersion.id });
      }
      setLoading(false);
    })();
  }, []);

  const updateActive = (updater: (v: ResumeVersion) => ResumeVersion) => {
    setPortfolio((prev) => {
      const versions = prev.versions.map((v) => (v.id === prev.activeVersionId ? updater({ ...v }) : v));
      const next = { ...prev, versions };
      savePortfolio(next);
      return next;
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const importFromTalentProfile = () => {
    const profile = TALENT_PROFILES[0];
    if (!profile || !activeVersion) return;
    updateActive((v) => ({
      ...v,
      personalSummary: profile.bio,
      skills: Array.from(new Set([...(v.skills ?? []), ...profile.skills])),
      technologies: Array.from(new Set([...(v.technologies ?? []), ...profile.skills])),
      updatedAt: new Date().toISOString(),
    }));
  };

  if (loading || !activeVersion) return (
    <div className="p-6"><div className="text-sm text-zinc-500">Loading...</div></div>
  );

  return (
    <div className="min-h-screen p-4 md:p-8 bg-gradient-to-b from-indigo-50 to-white dark:from-zinc-950 dark:to-zinc-900">
      <Head>
        <title>Zion | Talent Portfolio</title>
      </Head>

      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold">Talent Portfolio & Resume Builder</h1>
              <p className="text-sm text-zinc-600">Create AI-assisted resumes and showcase projects.</p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span>Version:</span>
              <select
                className="border border-zinc-300 dark:border-zinc-700 rounded-md px-2 py-1 bg-white dark:bg-zinc-800"
                value={portfolio.activeVersionId}
                onChange={(e) => setPortfolio((prev) => {
                  const next = { ...prev, activeVersionId: e.target.value };
                  savePortfolio(next);
                  return next;
                })}
              >
                {portfolio.versions.map((v) => (
                  <option key={v.id} value={v.id}>{v.name}</option>
                ))}
              </select>
              <Button variant="secondary" onClick={() => {
                const newVersion: ResumeVersion = {
                  id: uuidv4(),
                  name: `New Version ${portfolio.versions.length + 1}`,
                  createdAt: new Date().toISOString(),
                  updatedAt: new Date().toISOString(),
                  personalSummary: "",
                  skills: [],
                  technologies: [],
                  certifications: [],
                  workHistory: [],
                  education: [],
                  projects: [],
                };
                setPortfolio((prev) => {
                  const next = { ...prev, versions: [...prev.versions, newVersion], activeVersionId: newVersion.id };
                  savePortfolio(next);
                  return next;
                });
              }}>New</Button>
            </div>
          </div>
          <div className="w-64"><WizardProgress step={step} total={steps.length} /></div>
        </div>

        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={autoGenerate} onChange={(e) => setAutoGenerate(e.target.checked)} />
            Auto-generate from Talent Profile
          </label>
          {autoGenerate && (
            <Button onClick={importFromTalentProfile} variant="secondary">Import Now</Button>
          )}
        </div>

        {/* Wizard Sections */}
        {step === 0 && (
          <SectionCard title="Personal Summary">
            <div className="space-y-2">
              <TextArea
                rows={6}
                placeholder="Write a concise, compelling summary..."
                value={activeVersion.personalSummary}
                onChange={(e) => updateActive((v) => ({ ...v, personalSummary: e.target.value }))}
              />
              <div className="flex gap-2">
                <Button onClick={async () => {
                  const res = await aiAssist("improve-summary", activeVersion.personalSummary);
                  if (res.ok && typeof res.result === "string") updateActive((v) => ({ ...v, personalSummary: res.result as string }));
                }}>AI Improve</Button>
                <div className="flex-1" />
                <Button variant="ghost" onClick={() => setStep(1)}>Next</Button>
              </div>
            </div>
          </SectionCard>
        )}

        {step === 1 && (
          <SectionCard title="Work History">
            <div className="space-y-4">
              {activeVersion.workHistory.map((w) => (
                <div key={w.id} className="border border-zinc-200 dark:border-zinc-700 rounded-md p-3 space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                    <TextInput placeholder="Company" value={w.company} onChange={(e) => updateActive((v) => ({
                      ...v,
                      workHistory: v.workHistory.map((x) => x.id === w.id ? { ...x, company: e.target.value } : x)
                    }))} />
                    <TextInput placeholder="Role" value={w.role} onChange={(e) => updateActive((v) => ({
                      ...v,
                      workHistory: v.workHistory.map((x) => x.id === w.id ? { ...x, role: e.target.value } : x)
                    }))} />
                    <TextInput placeholder="Start (YYYY-MM)" value={w.startDate} onChange={(e) => updateActive((v) => ({
                      ...v,
                      workHistory: v.workHistory.map((x) => x.id === w.id ? { ...x, startDate: e.target.value } : x)
                    }))} />
                    <TextInput placeholder="End (YYYY-MM or Present)" value={w.endDate} onChange={(e) => updateActive((v) => ({
                      ...v,
                      workHistory: v.workHistory.map((x) => x.id === w.id ? { ...x, endDate: e.target.value } : x)
                    }))} />
                  </div>
                  <TextArea rows={4} placeholder="Description"
                    value={w.description}
                    onChange={(e) => updateActive((v) => ({
                      ...v,
                      workHistory: v.workHistory.map((x) => x.id === w.id ? { ...x, description: e.target.value } : x)
                    }))}
                  />
                  <div className="flex gap-2">
                    <Button onClick={async () => {
                      const res = await aiAssist("format-description", w.description);
                      if (res.ok && typeof res.result === "string") updateActive((v) => ({
                        ...v,
                        workHistory: v.workHistory.map((x) => x.id === w.id ? { ...x, description: res.result as string } : x)
                      }));
                    }}>AI Format</Button>
                    <Button onClick={async () => {
                      const res = await aiAssist("suggest-bullets", w.description, { company: w.company, role: w.role });
                      if (res.ok) {
                        const bullets = Array.isArray(res.result) ? res.result as string[] : String(res.result || "").split("\n").filter(Boolean);
                        updateActive((v) => ({
                          ...v,
                          workHistory: v.workHistory.map((x) => x.id === w.id ? { ...x, bulletPoints: bullets } : x)
                        }));
                      }
                    }}>AI Bullets</Button>
                    <div className="flex-1" />
                    <Button variant="ghost" onClick={() => updateActive((v) => ({ ...v, workHistory: v.workHistory.filter((x) => x.id !== w.id) }))}>Remove</Button>
                  </div>
                </div>
              ))}
              <Button onClick={() => updateActive((v) => ({
                ...v,
                workHistory: [
                  ...v.workHistory,
                  { id: uuidv4(), company: "", role: "", startDate: "", endDate: "", description: "", bulletPoints: [] } as WorkExperience,
                ]
              }))}>Add Role</Button>
              <div className="flex justify-end">
                <Button variant="ghost" onClick={() => setStep(2)}>Next</Button>
              </div>
            </div>
          </SectionCard>
        )}

        {step === 2 && (
          <SectionCard title="Education">
            <div className="space-y-4">
              {activeVersion.education.map((e) => (
                <div key={e.id} className="border border-zinc-200 dark:border-zinc-700 rounded-md p-3 space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <TextInput placeholder="School" value={e.school} onChange={(ev) => updateActive((v) => ({
                      ...v,
                      education: v.education.map((x) => x.id === e.id ? { ...x, school: ev.target.value } : x)
                    }))} />
                    <TextInput placeholder="Degree" value={e.degree} onChange={(ev) => updateActive((v) => ({
                      ...v,
                      education: v.education.map((x) => x.id === e.id ? { ...x, degree: ev.target.value } : x)
                    }))} />
                    <TextInput placeholder="Start (YYYY-MM)" value={e.startDate} onChange={(ev) => updateActive((v) => ({
                      ...v,
                      education: v.education.map((x) => x.id === e.id ? { ...x, startDate: ev.target.value } : x)
                    }))} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <TextInput placeholder="End (YYYY-MM)" value={e.endDate} onChange={(ev) => updateActive((v) => ({
                      ...v,
                      education: v.education.map((x) => x.id === e.id ? { ...x, endDate: ev.target.value } : x)
                    }))} />
                    <TextInput placeholder="Details" value={e.details ?? ""} onChange={(ev) => updateActive((v) => ({
                      ...v,
                      education: v.education.map((x) => x.id === e.id ? { ...x, details: ev.target.value } : x)
                    }))} />
                  </div>
                  <div className="flex justify-end">
                    <Button variant="ghost" onClick={() => updateActive((v) => ({ ...v, education: v.education.filter((x) => x.id !== e.id) }))}>Remove</Button>
                  </div>
                </div>
              ))}
              <Button onClick={() => updateActive((v) => ({
                ...v,
                education: [
                  ...v.education,
                  { id: uuidv4(), school: "", degree: "", startDate: "", endDate: "", details: "" } as EducationItem,
                ]
              }))}>Add Education</Button>
              <div className="flex justify-end">
                <Button variant="ghost" onClick={() => setStep(3)}>Next</Button>
              </div>
            </div>
          </SectionCard>
        )}

        {step === 3 && (
          <SectionCard title="Skills & Technologies">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm">Skills (comma-separated)</label>
                <TextInput value={activeVersion.skills.join(", ")} onChange={(e) => updateActive((v) => ({
                  ...v,
                  skills: e.target.value.split(",").map((s) => s.trim()).filter(Boolean)
                }))} />
              </div>
              <div>
                <label className="text-sm">Technologies (comma-separated)</label>
                <TextInput value={activeVersion.technologies.join(", ")} onChange={(e) => updateActive((v) => ({
                  ...v,
                  technologies: e.target.value.split(",").map((s) => s.trim()).filter(Boolean)
                }))} />
              </div>
            </div>
            <div className="flex justify-end mt-3">
              <Button variant="ghost" onClick={() => setStep(4)}>Next</Button>
            </div>
          </SectionCard>
        )}

        {step === 4 && (
          <SectionCard title="Certifications">
            <div className="space-y-2">
              <TextArea rows={3} placeholder="Comma-separated certifications"
                value={activeVersion.certifications.join(", ")}
                onChange={(e) => updateActive((v) => ({ ...v, certifications: e.target.value.split(",").map(s => s.trim()).filter(Boolean) }))}
              />
              <div className="flex justify-end">
                <Button variant="ghost" onClick={() => setStep(5)}>Next</Button>
              </div>
            </div>
          </SectionCard>
        )}

        {step === 5 && (
          <SectionCard title="Projects">
            <div className="space-y-4">
              {activeVersion.projects.map((p) => (
                <div key={p.id} className="border border-zinc-200 dark:border-zinc-700 rounded-md p-3 space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <TextInput placeholder="Title" value={p.title} onChange={(e) => updateActive((v) => ({
                      ...v,
                      projects: v.projects.map((x) => x.id === p.id ? { ...x, title: e.target.value } : x)
                    }))} />
                    <TextInput placeholder="Technologies (comma-separated)" value={p.technologies.join(", ")} onChange={(e) => updateActive((v) => ({
                      ...v,
                      projects: v.projects.map((x) => x.id === p.id ? { ...x, technologies: e.target.value.split(",").map(s=>s.trim()).filter(Boolean) } : x)
                    }))} />
                  </div>
                  <TextArea rows={4} placeholder="Description" value={p.description}
                    onChange={(e) => updateActive((v) => ({
                      ...v,
                      projects: v.projects.map((x) => x.id === p.id ? { ...x, description: e.target.value } : x)
                    }))}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                    <TextInput placeholder="Image URL" value={p.media.imageUrl ?? ""} onChange={(e) => updateActive((v) => ({
                      ...v,
                      projects: v.projects.map((x) => x.id === p.id ? { ...x, media: { ...x.media, imageUrl: e.target.value } } : x)
                    }))} />
                    <TextInput placeholder="PDF URL" value={p.media.pdfUrl ?? ""} onChange={(e) => updateActive((v) => ({
                      ...v,
                      projects: v.projects.map((x) => x.id === p.id ? { ...x, media: { ...x.media, pdfUrl: e.target.value } } : x)
                    }))} />
                    <TextInput placeholder="GitHub URL" value={p.media.githubUrl ?? ""} onChange={(e) => updateActive((v) => ({
                      ...v,
                      projects: v.projects.map((x) => x.id === p.id ? { ...x, media: { ...x.media, githubUrl: e.target.value } } : x)
                    }))} />
                    <TextInput placeholder="Demo URL" value={p.media.demoUrl ?? ""} onChange={(e) => updateActive((v) => ({
                      ...v,
                      projects: v.projects.map((x) => x.id === p.id ? { ...x, media: { ...x.media, demoUrl: e.target.value } } : x)
                    }))} />
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button onClick={async () => {
                      const res = await aiAssist("format-description", p.description);
                      if (res.ok && typeof res.result === "string") updateActive((v) => ({
                        ...v,
                        projects: v.projects.map((x) => x.id === p.id ? { ...x, description: res.result as string } : x)
                      }));
                    }}>AI Improve</Button>
                    <Button variant="ghost" onClick={() => updateActive((v) => ({ ...v, projects: v.projects.filter((x) => x.id !== p.id) }))}>Remove</Button>
                  </div>
                </div>
              ))}
              <Button onClick={() => updateActive((v) => ({
                ...v,
                projects: [
                  ...v.projects,
                  { id: uuidv4(), title: "", description: "", technologies: [], media: {} } as Project,
                ]
              }))}>Add Project</Button>
              <div className="flex justify-end">
                <Button variant="ghost" onClick={() => setStep(6)}>Next</Button>
              </div>
            </div>
          </SectionCard>
        )}

        {step === 6 && (
          <SectionCard title="Preview & Export">
            <div className="flex items-center gap-2 mb-3">
              <Button onClick={handlePrint}>Download PDF / Print</Button>
              <Button variant="secondary" onClick={() => window.open(`/talent/${TALENT_PROFILES[0]?.slug ?? "public"}`, "_blank")}>View Public Profile</Button>
              <div className="flex-1" />
              <TextInput placeholder="Version name (e.g., AI Engineer)" value={activeVersion.name} onChange={(e) => updateActive((v) => ({ ...v, name: e.target.value }))} />
            </div>
            <ResumePreview version={activeVersion} />
          </SectionCard>
        )}

        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Button variant="secondary" onClick={() => {
              const newVersion: ResumeVersion = {
                ...activeVersion,
                id: uuidv4(),
                name: `${activeVersion.name} Copy`,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
              };
              setPortfolio((prev) => {
                const next = { ...prev, versions: [...prev.versions, newVersion], activeVersionId: newVersion.id };
                savePortfolio(next);
                return next;
              });
            }}>Save as New Version</Button>
            <div className="text-xs text-zinc-500 self-center">Multiple versions for different roles</div>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" disabled={step === 0} onClick={() => setStep((s) => Math.max(0, s - 1))}>Back</Button>
            <Button variant="primary" disabled={step === steps.length - 1} onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}>Continue</Button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media print {
          body { background: white !important; }
          nav, header, footer, .no-print { display: none !important; }
        }
      `}</style>
    </div>
  );
}