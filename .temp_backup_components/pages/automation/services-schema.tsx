export default function ServicesSchemaPage() {
  return (
    <div className="py-10">
      <h1 className="text-2xl font-semibold text-white">Services Schema</h1>
      <p className="text-white/80 mt-2">schema.org JSON-LD is generated to <code className="text-white/90">data/services/schema.json</code>.</p>
      <p className="text-white/70 mt-2">This runs daily and auto-PRs updates.</p>
    </div>
  );
}