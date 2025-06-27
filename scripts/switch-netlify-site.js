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

async function assignDomain(siteId) {
  const res = await fetch(`https://api.netlify.com/api/v1/sites/${siteId}/domains`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ domain }),
  });
  if (!res.ok && res.status !== 422) {
    throw new Error(`Assign domain failed: ${res.statusText}`);
  }
  // Return true if the domain was newly assigned (status 201)
  return res.status === 201;
}

async function removeDomain(siteId) {
  const res = await fetch(`https://api.netlify.com/api/v1/sites/${siteId}/domains/${domain}`, {
    method: 'DELETE',
    headers,
  });
  if (!res.ok && res.status !== 404) {
    throw new Error(`Remove domain failed: ${res.statusText}`);
  }
  return res.status === 200;
}

export async function switchNetlifySite() {
  const greenActive = await siteHasDomain(greenId);
  const newSite = greenActive ? blueId : greenId;
  const oldSite = greenActive ? greenId : blueId;

  console.log(`Switching ${domain} from ${oldSite} to ${newSite}`);

  let assigned = false;
  try {
    assigned = await assignDomain(newSite);
    await removeDomain(oldSite);
    console.log('DNS switch complete');
  } catch (err) {
    if (assigned) {
      try {
        await removeDomain(newSite);
        console.log('Rolled back domain assignment to new site');
      } catch (rollbackErr) {
        console.error('Failed to rollback new site assignment:', rollbackErr);
      }
    }
    throw err;
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  switchNetlifySite().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
