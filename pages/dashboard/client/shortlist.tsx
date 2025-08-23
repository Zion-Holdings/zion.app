import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../../utils/supabase/client";
import HiringBoard from "../../../components/hiring/HiringBoard";
import TalentCard from "../../../components/hiring/TalentCard";
import Filters from "../../../components/hiring/Filters";
import type { ApplicationFilters, CandidateStatus, JobApplication } from "../../../utils/types/hiring";
import {
  fetchJobApplications,
  updateApplicationNotes,
  updateApplicationStatus,
} from "../../../utils/api/hiring";

function useToast() {
  const [message, setMessage] = useState<string | null>(null);
  const [type, setType] = useState<"success" | "error" | "info">("info");
  const show = (msg: string, t: "success" | "error" | "info" = "info") => {
    setMessage(msg);
    setType(t);
    setTimeout(() => setMessage(null), 2500);
  };
  const node = message ? (
    <div
      className={`fixed top-4 right-4 z-50 rounded-md px-4 py-2 shadow-lg text-white ${
        type === "success" ? "bg-emerald-600" : type === "error" ? "bg-rose-600" : "bg-gray-800"
      }`}
    >
      {message}
    </div>
  ) : null;
  return { show, node } as const;
}

export default function ClientShortlistPage() {
  const router = useRouter();
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const [jobId, setJobId] = useState<string>("");
  const [filters, setFilters] = useState<ApplicationFilters>({ status: "all" });
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState<"board" | "list">("board");
  const { show, node } = useToast();

  useEffect(() => {
    supabase.auth.getSession().then((res) => {
      if (!res.data.session) {
        router.replace("/auth/login");
        return;
      }
      setIsAuthChecked(true);
    });
  }, [router]);

  useEffect(() => {
    if (!isAuthChecked) return;
    setLoading(true);
    fetchJobApplications(jobId || undefined, filters)
      .then((data) => setApplications(data))
      .finally(() => setLoading(false));
  }, [isAuthChecked, jobId, filters]);

  const shortlistedOnly = useMemo(
    () => applications.filter((a) => a.status === "shortlisted"),
    [applications]
  );

  const analytics = useMemo(() => {
    const total = applications.length;
    const hired = applications.filter((a) => a.status === "hired");
    const hiredCount = hired.length;
    const avgTimeToHireDays = hired.length
      ? Math.round(
          hired.reduce((acc, a) => {
            const start = a.createdAt ? new Date(a.createdAt).getTime() : Date.now();
            const end = a.updatedAt ? new Date(a.updatedAt).getTime() : Date.now();
            return acc + (end - start);
          }, 0) /
            hired.length /
            (1000 * 60 * 60 * 24)
        )
      : 0;
    const ratio = total ? Math.round((hiredCount / total) * 100) : 0;

    const stageCounts: Record<CandidateStatus, number> = {
      applied: applications.filter((a) => a.status === "applied").length,
      shortlisted: applications.filter((a) => a.status === "shortlisted").length,
      interview: applications.filter((a) => a.status === "interview").length,
      offer: applications.filter((a) => a.status === "offer").length,
      hired: applications.filter((a) => a.status === "hired").length,
      rejected: applications.filter((a) => a.status === "rejected").length,
    } as any;

    return { total, hiredCount, avgTimeToHireDays, ratio, stageCounts };
  }, [applications]);

  const handleMove = async (id: string, status: CandidateStatus) => {
    if (await updateApplicationStatus(id, status)) {
      setApplications((prev) => prev.map((a) => (a.id === id ? { ...a, status } : a)));
      show(`Talent moved to ${status.charAt(0).toUpperCase() + status.slice(1)} stage`, "success");
    } else {
      show("Failed to update status", "error");
    }
  };

  const handleNotes = async (id: string, notes: string) => {
    const ok = await updateApplicationNotes(id, notes);
    if (ok) {
      setApplications((prev) => prev.map((a) => (a.id === id ? { ...a, notes } : a)));
      show("Notes saved", "success");
    } else {
      show("Failed to save notes", "error");
    }
  };

  const filteredList = useMemo(() => {
    let list = shortlistedOnly;
    if (filters.status && filters.status !== "all") {
      list = list.filter((a) => a.status === filters.status);
    }
    if (typeof filters.minScore === "number") {
      list = list.filter((a) => typeof a.score === "number" && (a.score as number) >= (filters.minScore as number));
    }
    if (filters.fromDate) {
      list = list.filter((a) => a.createdAt && new Date(a.createdAt) >= (filters.fromDate as Date));
    }
    if (filters.toDate) {
      list = list.filter((a) => a.createdAt && new Date(a.createdAt) <= (filters.toDate as Date));
    }
    return list;
  }, [shortlistedOnly, filters]);

  if (!isAuthChecked) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      {node}
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Shortlist & Hiring Tracker</h1>
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">Job ID</label>
            <input
              className="w-56 rounded-md border border-gray-300 bg-white dark:bg-gray-800 px-2 py-1 text-sm"
              placeholder="Optional: filter by job id"
              value={jobId}
              onChange={(e) => setJobId(e.target.value)}
            />
            <div className="ml-2 inline-flex rounded-md border border-gray-300 p-1">
              <button
                className={`px-3 py-1 text-sm rounded ${view === "board" ? "bg-gray-200 dark:bg-gray-700" : ""}`}
                onClick={() => setView("board")}
              >
                Board
              </button>
              <button
                className={`px-3 py-1 text-sm rounded ${view === "list" ? "bg-gray-200 dark:bg-gray-700" : ""}`}
                onClick={() => setView("list")}
              >
                List
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-3">
            <div className="rounded-xl border border-gray-200 bg-white/70 dark:bg-gray-900/60 p-4">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold">Hiring {view === "board" ? "Board" : "Shortlist"}</h2>
                <Filters filters={filters} onChange={setFilters} />
              </div>

              <div className="mt-4">
                {loading ? (
                  <div className="py-10 text-center text-sm text-gray-500">Loading...</div>
                ) : view === "board" ? (
                  <HiringBoard applications={applications} onMove={handleMove} />
                ) : filteredList.length ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredList.map((app) => (
                      <TalentCard
                        key={app.id}
                        application={app}
                        onStatusChange={handleMove}
                        onNotesChange={handleNotes}
                        onMessage={(talentId) => router.push(`/chat-content?to=${encodeURIComponent(talentId)}`)}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="py-10 text-center text-sm text-gray-500">
                    No one shortlisted yet — <a href="/talent" className="text-indigo-600 underline">explore top matches</a>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="rounded-xl border border-gray-200 bg-white/70 dark:bg-gray-900/60 p-4">
              <h3 className="font-semibold">Analytics</h3>
              <div className="mt-3 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Time to Hire</span>
                  <span className="font-medium">{analytics.avgTimeToHireDays} days</span>
                </div>
                <div className="flex justify-between">
                  <span>Application → Hire</span>
                  <span className="font-medium">{analytics.ratio}%</span>
                </div>
                <div className="mt-3">
                  <p className="text-xs text-gray-500">Funnel</p>
                  <div className="mt-1 space-y-1">
                    {(["applied", "shortlisted", "interview", "offer", "hired"] as CandidateStatus[]).map((s) => (
                      <div key={s} className="flex items-center justify-between">
                        <span className="capitalize">{s}</span>
                        <span className="font-medium">{analytics.stageCounts[s]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-gray-200 bg-white/70 dark:bg-gray-900/60 p-4">
              <h3 className="font-semibold">Tips</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-gray-600 dark:text-gray-300">
                <li>Drag candidates across stages to update status</li>
                <li>Use filters to focus by score and date</li>
                <li>Notes are private to your team</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}