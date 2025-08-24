export default function HomePage() {
  return (
    <div className="space-y-8">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-high-contrast">Zion OS</h1>
        <p className="text-xl opacity-90 max-w-2xl mx-auto">
          Launch sovereign AI-powered digital economies with one click.
        </p>
      </header>
      
      <section className="space-y-6" aria-labelledby="main-actions">
        <h2 id="main-actions" className="sr-only">Main Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a 
            className="card group block" 
            href="/multiverse/launch"
            aria-label="Launch a new Zion instance with marketplace, governance, identity, and more features"
          >
            <div className="space-y-3">
              <h3 className="text-xl font-semibold group-hover:text-[var(--accent)] transition-colors">
                Launch Wizard
              </h3>
              <p className="text-[var(--fg-secondary)]">
                Spin up a new instance with marketplace, governance, identity, and more.
              </p>
              <div className="text-sm text-[var(--accent)] group-hover:text-[var(--accent-hover)] transition-colors">
                Get Started →
              </div>
            </div>
          </a>
          
          <a 
            className="card group block" 
            href="/admin/instances"
            aria-label="Manage deployed instances, API keys, and governance settings"
          >
            <div className="space-y-3">
              <h3 className="text-xl font-semibold group-hover:text-[var(--accent)] transition-colors">
                Admin Instances
              </h3>
              <p className="text-[var(--fg-secondary)]">
                Manage deployed instances, API keys, and governance.
              </p>
              <div className="text-sm text-[var(--accent)] group-hover:text-[var(--accent-hover)] transition-colors">
                Manage →
              </div>
            </div>
          </a>
        </div>
      </section>
      
      <section className="space-y-4" aria-labelledby="features">
        <h2 id="features" className="text-2xl font-semibold">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card">
            <h3 className="font-semibold mb-2">AI-Powered</h3>
            <p className="text-sm text-[var(--fg-secondary)]">
              Built-in AI moderation, ZionGPT core, and intelligent governance systems.
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold mb-2">Sovereign</h3>
            <p className="text-sm text-[var(--fg-secondary)]">
              Full control over your digital economy with customizable governance and token systems.
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold mb-2">Scalable</h3>
            <p className="text-sm text-[var(--fg-secondary)]">
              From single instances to multi-region deployments with enterprise-grade infrastructure.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}