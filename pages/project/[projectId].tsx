import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ProjectPage() {
  const router = useRouter();
  const { projectId } = router.query as { projectId?: string };
  const [project, setProject] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [note, setNote] = useState("");

  const headers = {
    "x-demo-user-role": "client",
    "x-demo-user-id": "client-1",
    // For talent view demo, swap role and provide slug
    // "x-demo-user-role": "talent",
    // "x-demo-talent-slug": "ava-chen",
  } as Record<string, string>;

  useEffect(() => {
    async function load() {
      if (!projectId) return;
      try {
        setLoading(true);
        const res = await fetch(`/api/marketplace/projects?id=${projectId}`, { headers });
        const json = await res.json();
        if (!json.ok) throw new Error(json.error || "Failed to load project");
        setProject(json.project);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [projectId]);

  async function addNote() {
    const res = await fetch(`/api/marketplace/projects`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", ...headers },
      body: JSON.stringify({ id: projectId, action: "add_note", content: note }),
    });
    const json = await res.json();
    if (json.ok) {
      setProject(json.project);
      setNote("");
    }
  }

  async function markCompleted() {
    const res = await fetch(`/api/marketplace/projects`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", ...headers },
      body: JSON.stringify({ id: projectId, action: "mark_completed" }),
    });
    const json = await res.json();
    if (json.ok) setProject(json.project);
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {loading && <div>Loading…</div>}
      {error && <div className="text-red-600">{error}</div>}
      {project && (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold">Project Kickoff</h1>
            <span className={`px-2 py-0.5 rounded text-xs ${project.status === "ACTIVE" ? "bg-emerald-100 text-emerald-700" : "bg-gray-200"}`}>
              {project.status}
            </span>
          </div>

          <section className="rounded border p-4">
            <h2 className="font-medium mb-2">Project Summary</h2>
            <div className="text-sm">
              <div><b>Client</b>: {project.clientId}</div>
              <div><b>Talent</b>: {project.talentSlug}</div>
              <div><b>Start</b>: {new Date(project.startDateIso).toLocaleDateString()}</div>
              <div className="mt-2">{project.summary}</div>
            </div>
          </section>

          <section className="rounded border p-4">
            <h2 className="font-medium mb-2">Timeline</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              {project.timeline?.length ? (
                project.timeline.map((m: any) => (
                  <li key={m.id}>
                    <span className="font-medium">{m.title}</span>
                    {m.dueDateIso && <span> • due {new Date(m.dueDateIso).toLocaleDateString()}</span>}
                    {m.amountUsd && <span> • ${m.amountUsd}</span>}
                    {m.status && <span> • {m.status}</span>}
                  </li>
                ))
              ) : (
                <li>No timeline defined</li>
              )}
            </ul>
          </section>

          <section className="rounded border p-4">
            <h2 className="font-medium mb-2">Documents</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              {project.documents?.length ? (
                project.documents.map((d: any) => (
                  <li key={d.id}>
                    {d.url ? (
                      <a href={d.url} className="text-indigo-600 underline" target="_blank" rel="noreferrer">{d.name}</a>
                    ) : (
                      <span>{d.name}</span>
                    )}
                    <span className="text-gray-500"> • uploaded {new Date(d.uploadedAtIso).toLocaleString()}</span>
                  </li>
                ))
              ) : (
                <li>No documents</li>
              )}
            </ul>
          </section>

          <section className="rounded border p-4 space-y-3">
            <h2 className="font-medium">Shared notes/messages</h2>
            <div className="space-y-2">
              {project.notes?.length ? (
                project.notes.map((n: any) => (
                  <div key={n.id} className="text-sm">
                    <span className="font-medium">{n.authorRole}</span>: {n.content}
                    <span className="text-gray-500"> • {new Date(n.createdAtIso).toLocaleString()}</span>
                  </div>
                ))
              ) : (
                <div className="text-sm text-gray-600">No notes yet.</div>
              )}
            </div>
            <div className="flex gap-2">
              <input value={note} onChange={(e) => setNote(e.target.value)} placeholder="Add a note" className="flex-1 border rounded px-3 py-2" />
              <button onClick={addNote} className="px-3 py-2 rounded bg-gray-900 text-white">Add</button>
            </div>
          </section>

          <div className="flex justify-end">
            {project.status !== "COMPLETED" && (
              <button onClick={markCompleted} className="px-4 py-2 rounded bg-emerald-600 text-white">Mark as Completed</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}