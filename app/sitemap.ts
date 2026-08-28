import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ziontechgroup.com';

function getAppRoutes(): string[] {
  const routes: string[] = ['/'];
  const appDir = path.join(process.cwd(), 'app');

  if (!fs.existsSync(appDir)) {
    return routes;
  }

  for (const entry of fs.readdirSync(appDir, { withFileTypes: true })) {
    if (entry.name.startsWith('(') || entry.name.startsWith('.') || entry.name === 'favicon.ico') {
      continue;
    }

    const segmentPath = path.join(appDir, entry.name);

    if (entry.isDirectory()) {
      if (fs.existsSync(path.join(segmentPath, 'page.tsx')) || fs.existsSync(path.join(segmentPath, 'page.mdx'))) {
        routes.push(`/${entry.name}`);
      }
    } else if ((entry.name === 'page.tsx' || entry.name === 'page.mdx') && path.basename(appDir) === 'app') {
      routes.push('/');
    }
  }

  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = getAppRoutes();

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: 'daily',
    priority: route === '/' ? 1.0 : 0.8,
    lastModified: new Date(),
  }));
}
