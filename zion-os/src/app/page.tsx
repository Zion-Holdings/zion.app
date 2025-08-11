export default function HomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Zion OS</h1>
      <p className="opacity-80">Launch sovereign AI-powered digital economies with one click.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a className="p-4 rounded border border-white/10 hover:border-white/20" href="/multiverse/launch">
          <div className="font-semibold">Launch Wizard</div>
          <div className="text-sm opacity-80">Spin up a new instance with marketplace, governance, identity, and more.</div>
        </a>
        <a className="p-4 rounded border border-white/10 hover:border-white/20" href="/admin/instances">
          <div className="font-semibold">Admin Instances</div>
          <div className="text-sm opacity-80">Manage deployed instances, API keys, and governance.</div>
        </a>
      </div>
    </div>
  );
}