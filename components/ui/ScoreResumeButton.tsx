import React, { useState } from "react";

export type ScoreResponse = {
  applicationId: string | null;
  score: number;
  summary: string;
  suggestedAction: "Shortlist" | "Needs Review" | "Low Match";
  breakdown: any;
  useEmbeddings: boolean;
};

export function ScoreResumeButton(props: {
  applicationId?: string;
  jobId?: string;
  resumeText?: string;
  jobDescription?: string;
  skillTags?: string[];
  useEmbeddings?: boolean;
  bearerToken?: string; // pass session token when needed
  onScored?: (result: ScoreResponse) => void;
  className?: string;
  label?: string;
}) {
  const {
    applicationId,
    jobId,
    resumeText,
    jobDescription,
    skillTags,
    useEmbeddings,
    bearerToken,
    onScored,
    className,
    label = "Score Resume",
  } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const resp = await fetch("/api/score-resume", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(bearerToken ? { Authorization: `Bearer ${bearerToken}` } : {}),
        },
        body: JSON.stringify({
          applicationId,
          jobId,
          resumeText,
          jobDescription,
          skillTags,
          useEmbeddings,
        }),
      });
      const json = await resp.json();
      if (!resp.ok) throw new Error(json?.error || "Failed to score");
      onScored?.(json as ScoreResponse);
    } catch (e: any) {
      setError(e?.message || "Failed to score");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={className}>
      <button
        onClick={handleClick}
        disabled={isLoading}
        className="px-3 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400"
      >
        {isLoading ? "Scoring..." : label}
      </button>
      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}