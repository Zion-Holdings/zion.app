export function MultiverseLaunchesSection() {
  const launches = ['New Multiverse Instance Alpha', 'Funding Demo: Zion Grants', 'Open Source Protocol Update'];
  return (
    <section className="py-12 bg-zion-blue-dark text-white" id="launches">
      <div className="container mx-auto px-4 space-y-6 text-center">
        <h2 className="text-3xl font-bold">New Multiverse Launches</h2>
        <ul className="space-y-2">
          {launches.map((l) => (
            <li key={l} className="text-lg">
              {l}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
