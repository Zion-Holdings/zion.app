import React, { useMemo } from "react";
import TalentCard from "./TalentCard";
import type { CandidateStatus, JobApplication } from "../../utils/types/hiring";

type BoardColumn = {
  key: CandidateStatus;
  title: string;
};

const DEFAULT_COLUMNS: BoardColumn[] = [
  { key: "applied", title: "Applied" },
  { key: "shortlisted", title: "Shortlisted" },
  { key: "interview", title: "Interview" },
  { key: "offer", title: "Offer" },
  { key: "hired", title: "Hired" },
];

type Props = {
  applications: JobApplication[];
  onMove: (applicationId: string, newStatus: CandidateStatus) => void;
  columns?: BoardColumn[];
};

export default function HiringBoard({ applications, onMove, columns = DEFAULT_COLUMNS }: Props) {
  const appsByStatus = useMemo(() => {
    const map: Record<CandidateStatus, JobApplication[]> = {
      applied: [],
      shortlisted: [],
      interview: [],
      offer: [],
      hired: [],
      rejected: [],
    } as any;
    for (const app of applications) {
      if (!map[app.status]) map[app.status as CandidateStatus] = [] as any;
      map[app.status as CandidateStatus].push(app);
    }
    return map;
  }, [applications]);

  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    for (const col of columns) {
      c[col.key] = appsByStatus[col.key]?.length || 0;
    }
    return c;
  }, [columns, appsByStatus]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {columns.map((col) => (
        <div key={col.key} className="flex flex-col rounded-xl bg-gray-50/60 dark:bg-gray-800/40 border border-gray-200 overflow-hidden">
          <div className="flex items-center justify-between px-3 py-2 bg-gray-100 dark:bg-gray-800">
            <h3 className="text-sm font-semibold">{col.title}</h3>
            <span className="text-xs text-gray-500">{counts[col.key] || 0}</span>
          </div>
          <div
            className="flex-1 p-3 min-h-[200px] space-y-3"
            onDragOver={(e) => {
              e.preventDefault();
              e.dataTransfer.dropEffect = "move";
            }}
            onDrop={(e) => {
              e.preventDefault();
              const id = e.dataTransfer.getData("text/application-id");
              if (id) onMove(id, col.key);
            }}
          >
            {(appsByStatus[col.key] || []).map((app) => (
              <TalentCard key={app.id} application={app} draggable onStatusChange={(id, status) => onMove(id, status)} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}