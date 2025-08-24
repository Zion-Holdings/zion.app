import React, { useMemo, useState } from "react";
import type { CandidateStatus, JobApplication } from "../../utils/types/hiring";

type Props = {
  application: JobApplication;
  onStatusChange?: (id: string, status: CandidateStatus) => void;
  onNotesChange?: (id: string, notes: string) => void;
  onMessage?: (talentId: string) => void;
  statuses?: CandidateStatus[];
  stalledAfterDays?: number;
  draggable?: boolean;
};

const DEFAULT_STATUSES: CandidateStatus[] = [
  "applied",
  "shortlisted",
  "interview",
  "offer",
  "hired",
  "rejected",
];

export function TalentCard({
  application,
  onStatusChange,
  onNotesChange,
  onMessage,
  statuses = DEFAULT_STATUSES,
  stalledAfterDays = 7,
  draggable = false,
}: Props) {
  const [notes, setNotes] = useState(application.notes ?? "");

  const isStalled = useMemo(() => {
    const ref = application.lastActivityAt ?? application.updatedAt ?? application.createdAt;
    if (!ref) return false;
    const days = (Date.now() - new Date(ref).getTime()) / (1000 * 60 * 60 * 24);
    return days >= stalledAfterDays;
  }, [application.createdAt, application.updatedAt, application.lastActivityAt, stalledAfterDays]);

  const handleSaveNotes = () => {
    if (onNotesChange) onNotesChange(application.id, notes);
  };

  return (
    <div
      className={`rounded-xl border border-gray-200 bg-white/70 dark:bg-gray-900/60 shadow-sm p-4 backdrop-blur-sm ${
        isStalled ? "ring-2 ring-amber-400" : ""
      }`}
      draggable={draggable}
      onDragStart={(e) => {
        if (!draggable) return;
        e.dataTransfer.setData("text/application-id", application.id);
        e.dataTransfer.effectAllowed = "move";
      }}
    >
      <div className="flex items-center gap-3">
        <img
          src={application.talent?.photoUrl || "/avatar-placeholder.png"}
          alt={application.talent?.name || "Talent"}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <p className="font-semibold truncate">
              {application.talent?.name || "Talent"}
            </p>
            {typeof application.score === "number" && (
              <span className="ml-2 inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700">
                Score {application.score}
              </span>
            )}
          </div>
          <p className="text-sm text-gray-500 truncate">
            {application.talent?.title || "Candidate"}
          </p>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs text-gray-500">Status</label>
          <select
            className="mt-1 w-full rounded-md border-gray-300 bg-white dark:bg-gray-800 text-sm"
            value={application.status}
            onChange={(e) => onStatusChange?.(application.id, e.target.value as CandidateStatus)}
          >
            {statuses.map((s) => (
              <option key={s} value={s}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-end gap-2">
          {application.resumeUrl ? (
            <a
              href={application.resumeUrl}
              className="inline-flex items-center justify-center rounded-md border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          ) : (
            <span className="text-xs text-gray-400">No resume</span>
          )}
          <button
            className="ml-auto inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700"
            onClick={() => onMessage?.(application.talentId)}
          >
            Message
          </button>
        </div>
      </div>

      <div className="mt-3">
        <label className="text-xs text-gray-500">Notes</label>
        <textarea
          className="mt-1 w-full rounded-md border border-gray-300 bg-white dark:bg-gray-800 p-2 text-sm"
          rows={3}
          placeholder="Add private notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          onBlur={handleSaveNotes}
        />
      </div>
    </div>
  );
}

export default TalentCard;