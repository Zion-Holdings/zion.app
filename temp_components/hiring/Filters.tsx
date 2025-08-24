import React from "react";
import type { ApplicationFilters, CandidateStatus } from "../../utils/types/hiring";

type Props = {
  filters: ApplicationFilters;
  onChange: (next: ApplicationFilters) => void;
};

const STATUSES: (CandidateStatus | "all")[] = [
  "all",
  "applied",
  "shortlisted",
  "interview",
  "offer",
  "hired",
  "rejected",
];

export default function Filters({ filters, onChange }: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-3 items-end">
      <div>
        <label className="text-xs text-gray-500">Status</label>
        <select
          className="mt-1 w-full rounded-md border-gray-300 bg-white dark:bg-gray-800 text-sm"
          value={filters.status ?? "all"}
          onChange={(e) => onChange({ ...filters, status: e.target.value as any })}
        >
          {STATUSES.map((s) => (
            <option key={s} value={s}>
              {typeof s === "string" ? s.charAt(0).toUpperCase() + s.slice(1) : s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-xs text-gray-500">Min Score</label>
        <input
          type="number"
          placeholder="e.g. 70"
          className="mt-1 w-28 rounded-md border-gray-300 bg-white dark:bg-gray-800 text-sm px-2 py-1"
          value={typeof filters.minScore === "number" ? filters.minScore : ""}
          onChange={(e) =>
            onChange({
              ...filters,
              minScore: e.target.value === "" ? undefined : Number(e.target.value),
            })
          }
        />
      </div>

      <div className="flex items-end gap-2">
        <div>
          <label className="text-xs text-gray-500">From</label>
          <input
            type="date"
            className="mt-1 w-40 rounded-md border-gray-300 bg-white dark:bg-gray-800 text-sm px-2 py-1"
            value={filters.fromDate ? new Date(filters.fromDate).toISOString().substring(0, 10) : ""}
            onChange={(e) =>
              onChange({ ...filters, fromDate: e.target.value ? new Date(e.target.value) : null })
            }
          />
        </div>
        <div>
          <label className="text-xs text-gray-500">To</label>
          <input
            type="date"
            className="mt-1 w-40 rounded-md border-gray-300 bg-white dark:bg-gray-800 text-sm px-2 py-1"
            value={filters.toDate ? new Date(filters.toDate).toISOString().substring(0, 10) : ""}
            onChange={(e) =>
              onChange({ ...filters, toDate: e.target.value ? new Date(e.target.value) : null })
            }
          />
        </div>
      </div>
    </div>
  );
}