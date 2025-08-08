import React, { useEffect, useState } from "react";
import { computeProgress, UserRole } from "../../utils/onboarding/milestones";

type Row = { milestone: string; status: "pending" | "complete" };

export function OnboardingProgress({ role }: { role: UserRole }) {
  const [rows, setRows] = useState<Row[]>([]);
  const [banner, setBanner] = useState<string | undefined>();

  useEffect(() => {
    async function load() {
      try {
        const token = localStorage.getItem("supabase_token");
        const res = await fetch(`/api/onboarding/progress?role=${role}`, {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });
        const data = await res.json();
        setRows(data.rows || []);

        const nudgeRes = await fetch(`/api/onboarding/nudge`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          body: JSON.stringify({ role }),
        });
        const nudge = await nudgeRes.json();
        setBanner(nudge.banner);
      } catch (e) {
        console.error(e);
      }
    }
    load();
  }, [role]);

  const statusMap = rows.reduce((acc, r) => {
    acc[r.milestone] = r.status;
    return acc;
  }, {} as Record<string, "pending" | "complete">);

  const { percent } = computeProgress(role, statusMap);

  return (
    <div className="space-y-3">
      {banner && (
        <div className="rounded-md bg-yellow-50 border border-yellow-200 p-3 text-yellow-800">
          {banner}
        </div>
      )}
      <div>
        <div className="h-2 bg-gray-200 rounded">
          <div
            className="h-2 bg-green-500 rounded"
            style={{ width: `${percent}%` }}
          />
        </div>
        <div className="text-xs text-gray-600 mt-1">{percent}% complete</div>
      </div>
      <ul className="space-y-1 text-sm text-gray-800">
        {rows.map((r) => (
          <li key={r.milestone} className="flex items-center gap-2">
            <span
              className={`inline-block w-2 h-2 rounded-full ${
                r.status === "complete" ? "bg-green-500" : "bg-gray-300"
              }`}
            />
            <span>{r.milestone.replaceAll("_", " ")}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}