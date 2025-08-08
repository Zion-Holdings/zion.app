import React, { useEffect, useState } from 'react';

export default function Countdown({ startTimeIso }: { startTimeIso: string }) {
  const [remaining, setRemaining] = useState<number>(() => Math.max(0, new Date(startTimeIso).getTime() - Date.now()));

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining(Math.max(0, new Date(startTimeIso).getTime() - Date.now()));
    }, 1000);
    return () => clearInterval(id);
  }, [startTimeIso]);

  if (remaining <= 0) return <span className="text-green-600">Starting now</span>;

  const totalSeconds = Math.floor(remaining / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return (
    <span>{hours > 0 ? `${hours}h ` : ''}{minutes}m {seconds}s</span>
  );
}