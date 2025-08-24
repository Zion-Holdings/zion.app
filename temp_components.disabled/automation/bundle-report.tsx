export default function BundleReportPage() {
  return (
    <div className="py-10">
      <h1 className="text-2xl font-semibold text-white">Bundle Size Report</h1>
      <p className="text-white/80 mt-2">Build artifact sizes are summarized in <code className="text-white/90">data/perf/bundles.json</code>.</p>
      <p className="text-white/70 mt-2">Runs every 30 minutes and auto-PRs updates.</p>
    </div>
  );
}