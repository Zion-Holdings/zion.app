import { v4 as uuidv4 } from 'uuid';

export function generateZoomLink(): string {
  const meetingId = Math.floor(100000000 + Math.random() * 900000000).toString();
  return `https://zoom.us/j/${meetingId}`;
}

export function generateGoogleMeetLink(): string {
  const code = uuidv4().split('-')[0];
  return `https://meet.google.com/lookup/${code}`;
}

export function buildGoogleCalendarUrl(params: {
  title: string;
  details?: string;
  startTimeIso: string;
  endTimeIso: string;
  location?: string;
}): string {
  const { title, details, startTimeIso, endTimeIso, location } = params;
  const dates = `${formatDate(startTimeIso)}/${formatDate(endTimeIso)}`;
  const base = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
  const query = new URLSearchParams({
    text: title,
    details: details || '',
    dates,
    location: location || '',
  });
  return `${base}&${query.toString()}`;
}

function formatDate(iso: string): string {
  // YYYYMMDDTHHMMSSZ
  const d = new Date(iso);
  const pad = (n: number) => n.toString().padStart(2, '0');
  return `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`;
}