import React from 'react';

export type ResumeModalProps = {
  open: boolean;
  onClose: () => void;
  talentName: string;
  resumeUrl?: string;
  resumeVersionLabel?: string;
  summaryFallback?: string;
  skillsFallback?: string[];
};

const Backdrop: React.FC<{ open: boolean; onClick: () => void }> = ({ open, onClick }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/50 z-40" onClick={onClick} />
  );
};

export const ResumeModal: React.FC<ResumeModalProps> = ({ open, onClose, talentName, resumeUrl, resumeVersionLabel, summaryFallback, skillsFallback }) => {
  if (!open) return null;

  const handleDownload = () => {
    if (resumeUrl) {
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = `${talentName}-resume.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      const content = JSON.stringify({ talentName, summary: summaryFallback, skills: skillsFallback }, null, 2);
      const blob = new Blob([content], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${talentName}-resume.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  };

  return (
    <>
      <Backdrop open={open} onClick={onClose} />
      <div className="fixed inset-y-0 right-0 w-full max-w-3xl bg-white dark:bg-neutral-900 shadow-xl z-50 flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center gap-3">
            <div className="text-lg font-semibold">{talentName}</div>
            {resumeVersionLabel ? (
              <span className="text-xs px-2 py-1 rounded bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200">
                {resumeVersionLabel}
              </span>
            ) : null}
          </div>
          <div className="flex items-center gap-2">
            <button onClick={handleDownload} className="px-3 py-1.5 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-500">
              Download Resume
            </button>
            <button onClick={onClose} className="px-3 py-1.5 text-sm rounded border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800">
              Close
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-auto p-0">
          {resumeUrl ? (
            <iframe title="Resume Preview" src={resumeUrl} className="w-full h-full min-h-[70vh]" />
          ) : (
            <div className="p-6">
              <div className="text-sm text-neutral-500 mb-2">No PDF attached. Showing structured summary.</div>
              <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 space-y-3">
                {summaryFallback ? <p className="text-neutral-800 dark:text-neutral-100">{summaryFallback}</p> : null}
                {skillsFallback && skillsFallback.length > 0 ? (
                  <div>
                    <div className="text-sm font-medium mb-1">Skills</div>
                    <div className="flex flex-wrap gap-1.5">
                      {skillsFallback.map((s) => (
                        <span key={s} className="text-xs px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-800">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ResumeModal;