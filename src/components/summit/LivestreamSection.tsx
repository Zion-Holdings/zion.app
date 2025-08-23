import { useEffect, useState } from 'react';

export function LivestreamSection() {
  const eventDate = new Date('2025-06-20T14:00:00Z').getTime();
  const [timeLeft, setTimeLeft] = useState('');
  const [pastEvent, setPastEvent] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const diff = eventDate - now;
      if (diff <= 0) {
        setPastEvent(true);
        clearInterval(interval);
      } else {
        const hours = Math.floor(diff / 3600000);
        const minutes = Math.floor((diff % 3600000) / 60000);
        const seconds = Math.floor((diff % 60000) / 1000);
        setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [eventDate]);

  return (
    <section className="py-12 bg-zion-blue-light text-center" id="live">
      <div className="container mx-auto px-4 space-y-6">
        <h2 className="text-3xl font-bold">Livestream</h2>
        {!pastEvent && <p className="text-lg">Starts in {timeLeft}</p>}
        {pastEvent && <p className="text-lg">Watch the Replay</p>}
        <div className="aspect-video max-w-3xl mx-auto">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/OYxhW22Kv30?mute=1&controls=1"
            title="Zion Summit Livestream"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
