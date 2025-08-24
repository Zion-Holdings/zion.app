import type { AgendaItem } from './AgendaTimeline';

export default function Livestream({ agenda }: { agenda: AgendaItem[] }) {
  const live = agenda[0]?.replay ? agenda[0] : null;
  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="aspect-video border rounded-lg overflow-hidden">
          {live?.replay ? (
            live.replay.provider === 'youtube' ? (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${live.replay.idOrCid}`}
                title={live.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video className="w-full h-full" controls src={`https://ipfs.io/ipfs/${live.replay.idOrCid}`} />
            )
          ) : (
            <div className="w-full h-full grid place-items-center text-sm opacity-70">The livestream will appear here</div>
          )}
        </div>
        <div className="border rounded-lg p-3 overflow-auto max-h-[60vh]">
          <div className="font-semibold mb-2">Replays</div>
          <div className="space-y-2">
            {agenda.map(item => (
              <div key={item.id} className="flex items-center justify-between gap-2 text-sm">
                <div className="min-w-0">
                  <div className="truncate font-medium">{item.title}</div>
                  <div className="opacity-60 truncate">{item.time} • {item.track}</div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {item.replay && (
                    <a
                      className="px-2 py-1 rounded border"
                      href={item.replay.provider === 'youtube' ? `https://www.youtube.com/watch?v=${item.replay.idOrCid}` : `https://ipfs.io/ipfs/${item.replay.idOrCid}`}
                      target="_blank"
                      rel="noreferrer"
                    >Watch</a>
                  )}
                  <a className="px-2 py-1 rounded border" href={`/api/events/expo/transcript?id=${item.id}`}>Transcript</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}