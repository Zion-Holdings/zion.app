import React from 'react';

export type Resume = {
  id: string;
  name: string;
  summary: string;
  skills: string[];
  createdAt: string;
};

type ResumeCardProps = {
  resume: Pick<Resume, 'name' | 'summary' | 'skills'>;
  onDownload?: () => void;
  className?: string;
};

export const ResumeCard: React.FC<ResumeCardProps> = ({ resume, onDownload, className }) => {
  return (
    <div className={[
      'rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm',
      'p-4 sm:p-6 relative overflow-hidden',
      'transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md',
      className || '',
    ].join(' ')}>
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-500" />
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{resume.name}</h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300 line-clamp-3">{resume.summary}</p>
          </div>
          {onDownload && (
            <button
              type="button"
              onClick={onDownload}
              aria-label="Download resume"
              className="shrink-0 inline-flex items-center justify-center rounded-md border border-zinc-200 dark:border-zinc-700 bg-white/60 dark:bg-zinc-800/60 backdrop-blur px-2.5 py-2 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition"
            >
              Download
            </button>
          )}
        </div>
        {resume.skills?.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {resume.skills.slice(0, 8).map((skill) => (
              <span
                key={skill}
                className="text-xs px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700"
              >
                {skill}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ResumeCard;