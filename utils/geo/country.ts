export function extractCountryCodeFromLocation(location: string): string | undefined {
  if (!location) return undefined;
  // Expect patterns like "City, US" or "City, BR" or "Berlin, DE"
  const parts = location.split(',').map((p) => p.trim());
  const last = parts[parts.length - 1];
  if (!last) return undefined;
  const code = last.toUpperCase();
  if (/^[A-Z]{2}$/.test(code)) return code;
  // fallback: common country names mapping can be extended
  const map: Record<string, string> = {
    'UNITED STATES': 'US',
    'BRAZIL': 'BR',
    'CANADA': 'CA',
    'PORTUGAL': 'PT',
    'JAPAN': 'JP',
    'GERMANY': 'DE',
  };
  return map[code];
}

export function sortByCountryFirst<T extends { location?: string }>(items: T[], userCountryCode?: string): T[] {
  if (!userCountryCode) return items;
  const code = userCountryCode.toUpperCase();
  return [...items].sort((a, b) => {
    const ca = extractCountryCodeFromLocation(a.location || '') === code ? 0 : 1;
    const cb = extractCountryCodeFromLocation(b.location || '') === code ? 0 : 1;
    return ca - cb;
  });
}

export function filterByCountry<T extends { location?: string }>(items: T[], countryCode?: string): T[] {
  if (!countryCode) return items;
  const code = countryCode.toUpperCase();
  return items.filter((i) => extractCountryCodeFromLocation(i.location || '') === code);
}