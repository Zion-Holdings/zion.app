import EnhancedLayout from '../components/layout/EnhancedLayout';

const CAPABILITIES = [
  'Full‑stack Web','Mobile (iOS/Android)','AI/ML','Cloud & DevOps','Data Engineering','Blockchain','IoT','Security'
];

export default function CapabilitiesPage() {
  return (
    <EnhancedLayout>
      <h1 className="text-2xl font-semibold">Capabilities</h1>
      <div className="mt-6 grid md:grid-cols-4 gap-4 text-sm">
        {CAPABILITIES.map((c) => (
          <div key={c} className="rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-3 bg-white dark:bg-gray-950">
            {c}
          </div>
        ))}
      </div>
    </EnhancedLayout>
  );
}