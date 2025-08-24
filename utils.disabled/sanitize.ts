export function sanitizeText(input: unknown): string {
  const text = String(input ?? '').trim();
  const escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
  return escaped.slice(0, 5000);
}

export function sanitizeTags(input: unknown): string[] {
  const arr = Array.isArray(input) ? input : String(input ?? '').split(/[\n,]/);
  return arr
    .map((t) => sanitizeText(t))
    .map((t) => t.replace(/[^a-zA-Z0-9\-_.\s]/g, ''))
    .map((t) => t.trim())
    .filter(Boolean)
    .slice(0, 25);
}

export function sanitizeBullets(bullets: unknown): string[] {
  const arr = Array.isArray(bullets) ? bullets : [];
  return arr.map((b) => sanitizeText(b)).filter(Boolean).slice(0, 50);
}