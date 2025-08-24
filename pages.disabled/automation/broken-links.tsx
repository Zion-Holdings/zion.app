export default function BrokenLinksPage() {
  return (
    <div className="py-10">
      <h1 className="text-2xl font-semibold text-white">Broken Links Report</h1>
      <p className="text-white/80 mt-2">External link status report is written to <code className="text-white/90">data/reports/broken-links.json</code>.</p>
      <p className="text-white/70 mt-2">This runs twice daily and auto-PRs updates.</p>
    </div>
  );
}