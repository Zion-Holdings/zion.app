export default function QuoteRequestsPage() {
  return (
    <div className="py-10">
      <h1 className="text-2xl font-semibold text-white">Quote Requests Log</h1>
      <p className="text-white/80 mt-2">Recent quote requests are synced to <code className="text-white/90">data/quote-requests/log.json</code>.</p>
      <p className="text-white/70 mt-2">This runs hourly and auto-PRs updates.</p>
    </div>
  );
}