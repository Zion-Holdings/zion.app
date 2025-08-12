export function InteractiveMap() {
  const locations = [
    { name: 'New York', subdomain: 'ny.zionapp.com', top: '40%', left: '35%' },
    { name: 'London', subdomain: 'london.zionapp.com', top: '30%', left: '50%' },
    { name: 'Tokyo', subdomain: 'tokyo.zionapp.com', top: '45%', left: '80%' }
  ];
  return (
    <section className="py-12 bg-background text-foreground" id="map">
      <div className="container mx-auto px-4 space-y-6 text-center">
        <h2 className="text-3xl font-bold">Zion Multiverse Map</h2>
        <div className="relative max-w-3xl mx-auto">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.png"
            alt="World map"
            className="w-full h-auto"
            loading="lazy"
          />
          {locations.map((loc) => (
            <a
              key={loc.name}
              href={`https://${loc.subdomain}`}
              className="absolute inline-flex items-center justify-center w-4 h-4 bg-zion-cyan rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              style={{ top: loc.top, left: loc.left }}
              title={`Visit ${loc.name}`}
              aria-label={`Visit ${loc.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
