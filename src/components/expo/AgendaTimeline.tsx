export function AgendaTimeline() {
  const items = [
    'AI Breakthroughs & Tools',
    'DAO Governance Updates',
    'Talent Showcase & Matchmaking',
    'Global Expansion Announcements'
  ];
  return (
    <section className="py-12 bg-background text-foreground" id="agenda">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Agenda</h2>
        <ol className="space-y-3 max-w-xl mx-auto list-decimal list-inside">
          {items.map((item) => (
            <li key={item} className="text-lg">{item}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}
