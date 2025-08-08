export default function FeatureGrid() {
  const features = [
    {
      title: 'In‑App Video Interviews',
      desc: 'Schedule and run interviews with Zoom/Meet links and countdown timers.',
    },
    {
      title: 'Smart Calendar Logic',
      desc: 'Duration presets, availability, and reminders 30 minutes before.',
    },
    {
      title: 'Operated Workflows',
      desc: 'Auto-generate summaries and email confirmations to both parties.',
    },
    {
      title: 'Secure Access Control',
      desc: 'Only the involved client and talent can view and join interviews.',
    },
    {
      title: 'Talent Marketplace',
      desc: 'Curated AI, cloud, data and product experts with transparent pricing.',
    },
    {
      title: 'End‑to‑End Engagements',
      desc: 'From discovery chat to delivery with dashboards and status logging.',
    },
  ];

  return (
    <section className="enhanced-card">
      <h2 className="text-xl md:text-2xl font-semibold">Capabilities</h2>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f) => (
          <div key={f.title} className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 hover:shadow-md transition-shadow">
            <h3 className="font-medium">{f.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}