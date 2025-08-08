export type AgendaItem = {
  id: string;
  time: string;
  track: 'AI' | 'DAO' | 'Talent' | 'Global';
  title: string;
  speaker?: string;
  replay?: { provider: 'youtube' | 'ipfs'; idOrCid: string };
};

export default function AgendaTimeline({ items, activeTrack }: { items: AgendaItem[]; activeTrack: 'All' | 'AI' | 'DAO' | 'Talent' | 'Global' }) {
  const filtered = activeTrack === 'All' ? items : items.filter(i => i.track === activeTrack);
  return (
    <div className="space-y-3">
      {filtered.map(item => (
        <div key={item.id} className="flex flex-col md:flex-row md:items-center md:justify-between p-3 border rounded-lg">
          <div className="flex items-center gap-3">
            <span className="text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800">{item.time}</span>
            <span className="text-xs px-2 py-0.5 rounded border">{item.track}</span>
            <div>
              <div className="font-medium">{item.title}</div>
              {item.speaker && <div className="text-sm opacity-70">{item.speaker}</div>}
            </div>
          </div>
          <div className="mt-2 md:mt-0 flex items-center gap-2 text-sm">
            {item.replay && (
              <a
                className="px-3 py-1 rounded border"
                href={item.replay.provider === 'youtube' ? `https://www.youtube.com/watch?v=${item.replay.idOrCid}` : `https://ipfs.io/ipfs/${item.replay.idOrCid}`}
                target="_blank"
                rel="noreferrer"
              >Replay</a>
            )}
            <a className="px-3 py-1 rounded border" href={`/api/events/expo/transcript?id=${item.id}`}>Transcript</a>
          </div>
        </div>
      ))}
    </div>
  );
}