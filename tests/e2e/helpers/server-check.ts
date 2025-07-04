const fetchFn: typeof fetch = (global as any).fetch;

const baseURL = process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000';
const fallbackURL = baseURL.replace('3000', '3001');
let cachedURL: string | null = null;

async function isServerRunning(url: string): Promise<boolean> {
  try {
    const res = await fetchFn(url, { method: 'HEAD' });
    return res.ok;
  } catch {
    return false;
  }
}

export async function getServerURL(): Promise<string | null> {
  if (cachedURL) return cachedURL;
  if (await isServerRunning(baseURL)) {
    cachedURL = baseURL;
  } else if (await isServerRunning(fallbackURL)) {
    cachedURL = fallbackURL;
  }
  return cachedURL;
}

export async function skipIfNoServer(testInfo: any): Promise<string | null> {
  const url = await getServerURL();
  if (!url) {
    testInfo.skip(`Server not running at ${baseURL} or ${fallbackURL}`);
  }
  return url;
}
