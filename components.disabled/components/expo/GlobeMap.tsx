type Location = {
  name: string;
  xPercent: number; // 0-100
  yPercent: number; // 0-100
  talent: number;
  daoActivity: number;
  tokenFlow: number;
  url: string;
};

export default function GlobeMap({ locations }: { locations: Location[] }) {
  return (
    <div className="relative w-full max-w-3xl aspect-square mx-auto">
      <div className="absolute inset-0 rounded-full border bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-indigo-900" />
      {locations.map(loc => (
        <a
          key={loc.name}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${loc.xPercent}%`, top: `${loc.yPercent}%` }}
          href={loc.url}
          target="_blank"
          rel="noreferrer"
          title={`${loc.name} • Talent: ${loc.talent} • DAO: ${loc.daoActivity} • Token: ${loc.tokenFlow}`}
        >
          <div className="flex flex-col items-center">
            <span className="w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-black shadow" />
            <span className="text-xs mt-1 bg-white/80 dark:bg-black/60 px-1.5 py-0.5 rounded border backdrop-blur">{loc.name}</span>
          </div>
        </a>
      ))}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs flex gap-3 bg-white/70 dark:bg-black/50 px-2 py-1 rounded border">
        <span>Talent ●</span>
        <span>DAO ▲</span>
        <span>Token ◆</span>
      </div>
    </div>
  );
}