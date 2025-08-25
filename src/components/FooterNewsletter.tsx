

export function FooterNewsletter() {
  return (
    <div className="mt-6">
      <h4 className="text-white font-semibold mb-3 text-sm">Newsletter</h4>
      <p className="text-zion-slate-light mb-3 text-xs">
        Stay updated with the latest tech and AI opportunities.
      </p>
      <div className="flex">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-3 py-2 text-sm bg-zion-blue-light border border-zion-blue rounded-l-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan"
        />
        <button className="px-4 py-2 bg-zion-cyan hover:bg-zion-cyan-dark text-white text-sm font-medium rounded-r-lg transition-colors">
          Subscribe
        </button>
      </div>
    </div>
  );
}