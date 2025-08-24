import os from 'os';

function bytesToMB(bytes: number): number {
  return Math.round((bytes / 1024 / 1024) * 100) / 100;
}

export const handler = async (event: any) => {
  try {
    const nowIso = new Date().toISOString();
    const uptimeSec = Math.round(process.uptime());
    const isVerbose = (event?.queryStringParameters?.details || '').toLowerCase() === 'true';

    const memoryUsage = process.memoryUsage();
    const basic: any = {
      ok: true,
      timestamp: nowIso,
      uptimeSec,
      node: process.version,
      awsRegion: process.env.AWS_REGION || null,
      env: process.env.NODE_ENV || null,
      netlify: {
        siteName: process.env.SITE_NAME || null,
        context: process.env.CONTEXT || null,
        deployId: process.env.DEPLOY_ID || null,
        commitRef: process.env.COMMIT_REF || null,
        url: process.env.URL || null,
        deployUrl: process.env.DEPLOY_URL || null,
      },
      memoryMB: {
        rss: bytesToMB(memoryUsage.rss),
        heapTotal: bytesToMB(memoryUsage.heapTotal),
        heapUsed: bytesToMB(memoryUsage.heapUsed),
        external: bytesToMB((memoryUsage as any).external || 0),
      },
    };

    if (isVerbose) {
      basic.system = {
        platform: process.platform,
        arch: process.arch,
        cpuCount: os.cpus()?.length || 0,
        loadAvg: os.loadavg(),
        totalMemMB: bytesToMB(os.totalmem()),
        freeMemMB: bytesToMB(os.freemem()),
        versions: {
          v8: process.versions?.v8 || null,
          uv: process.versions?.uv || null,
          openssl: process.versions?.openssl || null,
        },
        pid: process.pid,
        cwd: process.cwd(),
      };
    }

    return {
      statusCode: 200,
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'cache-control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      },
      body: JSON.stringify(basic),
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'cache-control': 'no-store',
      },
      body: JSON.stringify({ ok: false, error: String(error && error.message ? error.message : error) }),
    };
  }
};