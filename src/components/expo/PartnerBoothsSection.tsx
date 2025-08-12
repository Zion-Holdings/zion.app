export function PartnerBoothsSection() {
  const booths = ['Top Universities', 'Major Banks', 'Leading DAOs'];
  return (
    <section className="py-12 bg-background text-foreground" id="booths">
      <div className="container mx-auto px-4 space-y-6 text-center">
        <h2 className="text-3xl font-bold">Partner Booths</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {booths.map((b) => (
            <div key={b} className="p-6 border rounded-lg">
              <p className="text-lg font-semibold">{b}</p>
              <p className="text-sm text-muted-foreground">Interactive showcase</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
