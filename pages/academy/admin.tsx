import { useEffect, useState } from 'react';

export default function AcademyAdmin() {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    fetch('/api/academy/analytics').then((r) => r.json()).then(setData).catch(() => setData({}));
  }, []);

  return (
    <div className="py-10 space-y-6">
      <h1 className="text-2xl font-semibold">Academy Analytics</h1>
      {!data && <div>Loading...</div>}
      {data && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="rounded border border-gray-200 dark:border-gray-800 p-4">
            <div className="font-medium mb-2">Lesson Drop-offs</div>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              {data.lessonDropoffs?.map((d: any) => (
                <li key={d.lessonId}>{d.lessonId}: {(d.rate * 100).toFixed(1)}%</li>
              ))}
            </ul>
          </div>
          <div className="rounded border border-gray-200 dark:border-gray-800 p-4">
            <div className="font-medium mb-2">Pass Rates</div>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              {data.passRates?.map((d: any) => (
                <li key={d.course}>{d.course}: {(d.passRate * 100).toFixed(0)}%</li>
              ))}
            </ul>
          </div>
          <div className="rounded border border-gray-200 dark:border-gray-800 p-4">
            <div className="font-medium mb-2">Most Rewatched</div>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              {data.mostRewatched?.map((d: any) => (
                <li key={d.lessonId}>{d.lessonId}: {d.count}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}