import React from 'react';
import { X } from 'lucide-react';

export type SmartNudgeBannerProps = {
  role: 'talent' | 'client';
  userId?: string | null;
  message: string;
};

export default function SmartNudgeBanner({ role, userId, message }: SmartNudgeBannerProps) {
  const storageKey = React.useMemo(() => `zion-nudge-${role}-${userId ?? 'anon'}`, [role, userId]);
  const [hidden, setHidden] = React.useState<boolean>(false);

  React.useEffect(() => {
    try {
      const v = typeof window !== 'undefined' ? localStorage.getItem(storageKey) : null;
      setHidden(v === 'dismissed');
    } catch {}
  }, [storageKey]);

  const dismiss = React.useCallback(() => {
    setHidden(true);
    try {
      if (typeof window !== 'undefined') localStorage.setItem(storageKey, 'dismissed');
    } catch {}
  }, [storageKey]);

  if (hidden) return null;

  return (
    <div className="relative rounded-xl border border-cyan-300/40 dark:border-cyan-400/30 bg-cyan-50/60 dark:bg-cyan-900/20 p-4">
      <button onClick={dismiss} aria-label="Dismiss" className="absolute top-2 right-2 p-1 rounded hover:bg-black/5 dark:hover:bg-white/10">
        <X size={16} />
      </button>
      <div className="text-sm">
        {message}
      </div>
    </div>
  );
}