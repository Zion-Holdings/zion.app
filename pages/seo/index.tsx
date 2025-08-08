import React from 'react';

export default function SEOIndex() {
  const [slugs, setSlugs] = React.useState<string[]>([]);

  React.useEffect(() => {
    // In a real app, list from API or build-time; here we rely on directory hint not available at runtime.
    setSlugs([]);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">SEO Landing Pages</h1>
      {slugs.length === 0 ? (
        <div className="text-sm text-gray-500">Generated pages will appear once deployed.</div>
      ) : (
        <ul className="list-disc ml-5">
          {slugs.map((s) => (
            <li key={s}><a className="text-cyan-600" href={`/seo/${s}`}>{s}</a></li>
          ))}
        </ul>
      )}
    </div>
  );
}