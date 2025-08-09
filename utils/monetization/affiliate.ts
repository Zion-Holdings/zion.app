export function affiliate(url: stringcode: string = process.env.NEXT_PUBLIC_AFFILIATE_CODE || ''): string {
  if (!code) return url;
  const u = new URL(url);
  u.searchParams.set('ref', code);
  return u.toString();
}
