#!/usr/bin/env node
import process from 'process';

const {
  NETLIFY_AUTH_TOKEN: token,
  NETLIFY_PRIMARY_DOMAIN: domain,
  NETLIFY_GREEN_SITE_ID: greenId,
  NETLIFY_BLUE_SITE_ID: blueId,
} = process.env;

if (!token || !domain || !greenId || !blueId) {
  console.error('Missing Netlify environment variables');
  process.exit(1);
}

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,
};

async function siteHasDomain(siteId) {
  const res = await fetch(`https://api.netlify.com/api/v1/sites/${siteId}/domains`, { headers });
  if (!res.ok) throw new Error(`Failed to fetch domains for ${siteId}: ${res.statusText}`);
  const domains = await res.json();
  return domains.some((d) => d.name === domain);
}

export async function switchNetlifySite() {
  const greenActive = await siteHasDomain(greenId);
  const newSite = greenActive ? blueId : greenId;
  const oldSite = greenActive ? greenId : blueId;

  console.log(`Switching ${domain} from ${oldSite} to ${newSite}`);

  let res = await fetch(`https://api.netlify.com/api/v1/sites/${newSite}/domains`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ domain }),
  });
  if (!res.ok && res.status !== 422) throw new Error(`Assign domain failed: ${res.statusText}`);

  res = await fetch(`https://api.netlify.com/api/v1/sites/${oldSite}/domains/${domain}`, {
    method: 'DELETE',
    headers,
  });
  if (!res.ok) throw new Error(`Remove domain failed: ${res.statusText}`);

  console.log('DNS switch complete');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  switchNetlifySite().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
