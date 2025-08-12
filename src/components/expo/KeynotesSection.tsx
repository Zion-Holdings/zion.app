export function KeynotesSection() {
  const speakers = ['Founder Keynote', 'Nations Panel', 'DAO Speakers'];
  return (
    <section className="py-12 bg-zion-blue-light text-center" id="keynotes">
      <div className="container mx-auto px-4 space-y-6">
        <h2 className="text-3xl font-bold">Keynotes</h2>
        <ul className="space-y-2">
          {speakers.map((s) => (
            <li key={s} className="text-lg">
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
