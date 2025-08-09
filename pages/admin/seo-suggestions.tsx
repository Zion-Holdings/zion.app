import data from '../../data/reports/seo-suggestions.json';

export default function SEOSuggestions(){
  const d = data as any;
  return (
    <div className="py-10 space-y-4">
      <h1 className="text-2xl font-semibold">SEO Suggestions</h1>
      <div className="text-sm text-gray-500">Updated: {new Date(d.generatedAt).toLocaleString()}</div>
      <div className="overflow-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left"><th className="p-2">Page</th><th className="p-2">Current</th><th className="p-2">Suggested</th></tr>
          </thead>
          <tbody>
            {d.suggestions?.map((s: any, i: number) => (
              <tr key={i} className="border-t border-gray-200 dark:border-gray-800">
                <td className="p-2">{s.page}</td>
                <td className="p-2">{s.currentTitle || '—'}</td>
                <td className="p-2">{s.suggestedTitle}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
