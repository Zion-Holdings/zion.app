export default function MarketplaceEnrichmentPage() {
  return (
    <div className="py-10">
      <h1 className="text-2xl font-semibold text-white">Marketplace Enrichment</h1>
      <p className="text-white/80 mt-2">AI-generated summaries, tags, and tiers are stored in <code className="text-white/90">data/services/enriched.json</code>.</p>
      <p className="text-white/70 mt-2">This runs on a 6-hour schedule and auto-PRs updates.</p>
    </div>
  );
}