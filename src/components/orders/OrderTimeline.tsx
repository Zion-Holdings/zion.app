import type { TrackingEvent } from '@/hooks/useOrder';

interface Props {
  events?: TrackingEvent[];
}

export function OrderTimeline({ events }: Props) {
  if (!events || events.length === 0) {
    return <p>No tracking info yet.</p>;
  }

  return (
    <ul className="border-l border-border pl-4 space-y-4">
      {events.map((ev, i) => (
        <li key={i} className="relative pb-1 ml-1">
          <span className="absolute -left-2 top-1.5 h-3 w-3 rounded-full bg-primary" />
          <div>
            <p className="font-medium">{ev.status}</p>
            <p className="text-sm text-muted-foreground">
              {ev.location ? `${ev.location} · ` : ''}
              {new Date(ev.timestamp).toLocaleString()}
            </p>
            {ev.status_details && (
              <p className="text-sm text-muted-foreground">{ev.status_details}</p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
