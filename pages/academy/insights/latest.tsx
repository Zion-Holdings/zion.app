import insights from '../../../data/reports/academy-insights.json';

export default function AcademyInsights() {
  const t = insights as any;
  return (
    <div className="py-10 space-y-6">
      <h1 className="text-2xl font-semibold">Academy Insights</h1>
      <div className="text-sm text-gray-500">Updated: {new Date(t.generatedAt).toLocaleString()}</div>
      <section>
        <h2 className="text-lg font-medium mb-2">Trending Topics</h2>
        <ul className="list-disc pl-5 space-y-1">
          {t.trendingTopics?.map((x: any, i: number) => (
            <li key={i}><a className="text-blue-600 underline" href={x.url} target="_blank" rel="noreferrer">{x.title}</a></li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-lg font-medium mb-2">Featured Courses</h2>
        <ul className="space-y-1">
          {t.featuredCourses?.map((x: any, i: number) => (
            <li key={i} className="flex items-center justify-between">
              <span className="truncate">{x.slug}</span>
              <span className="text-xs text-gray-500">{x.reason}</span>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-lg font-medium mb-2">Recommendations</h2>
        <ul className="list-disc pl-5 space-y-1">
          {t.recommendations?.map((x: any, i: number) => (
            <li key={i}>{x.title} <span className="text-xs text-gray-500">({x.course})</span></li>
          ))}
        </ul>
      </section>
    </div>
  );
}
