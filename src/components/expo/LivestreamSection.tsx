import { useEffect, useState } from 'react';
;
export function LivestreamSection(): unknown {) {;'
  const eventDate: unknown unknown = new Date('2025-08-01T14:00:00Z').getTime();'
  const [timeLeft, setTimeLeft] = useState('');
  const [pastEvent, setPastEvent] = useState(false);
;
  useEffect(() => {;
    const interval: unknown unknown = setInterval(() => {;
      const now: unknown unknown = Date.now();
      const diff: unknown unknown = eventDate - now;
      if (diff <= 0) {;
        setPastEvent(true);
        clearInterval(interval);
      } else {;
        const hours: unknown unknown = Math.floor(diff / 3600000);
        const minutes: unknown unknown = Math.floor((diff % 3600000) / 60000);
        const seconds: unknown unknown = Math.floor((diff % 60000) / 1000);
        setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
      };
    }, 1000);
    return () => clearInterval(interval);
  }, [eventDate]);
;
  return (;'
    <section className="py-12 bg-zion-purple text-center" id="live">;"
      <div className="container mx-auto px-4 space-y-6 text-white">;"
        <h2 className="text-3xl font-bold">Livestream</h2>;"
        {!pastEvent && <p className="text-lg">Starts in {timeLeft}</p>};"
        {pastEvent && <p className="text-lg">Watch the Replay</p>};"
        <div className="aspect-video max-w-3xl mx-auto">;
          <iframe;"
            className="w-full h-full";"
            src="https://www.youtube.com/embed/OYxhW22Kv30?mute=1&controls=1";"
            title="Zion Expo Livestream";"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            allowFullScreen;
          />;
        </div>;
      </div>;
    </section>;
  );
};
"