#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

function nowIso() {
  return new Date().toISOString();
}

function log(message) {
  const line = `[${nowIso()}] ${message}`;
  console.log(line);
}

async function postLinkedInUpdate() {
  const accessToken = process.env.LINKEDIN_ACCESS_TOKEN;
  const authorUrn = process.env.LINKEDIN_URN; // e.g., urn:li:person:xxxx or urn:li:organization:xxxx
  const canonicalUrl = "https://ziontechgroup.com";

  if (!accessToken || !authorUrn) {
    log("LinkedIn env missing; skipping LinkedIn post.");
    return { ok: false, skipped: true, platform: "linkedin" };
  }

  const body = {
    author: authorUrn,
    lifecycleState: "PUBLISHED",
    specificContent: {
      "com.linkedin.ugc.ShareContent": {
        shareCommentary: {
          text: `🚀 Sync update: New improvements shipped to our app. Explore what changed → ${canonicalUrl}`
        },
        shareMediaCategory: "ARTICLE",
        media: [
          {
            status: "READY",
            originalUrl: canonicalUrl,
            title: { text: "Zion Tech Group" }
          }
        ]
      }
    },
    visibility: { "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC" }
  };

  try {
    const res = await fetch("https://api.linkedin.com/v2/ugcPosts", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "X-Restli-Protocol-Version": "2.0.0",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    if (!res.ok) {
      const text = await res.text();
      log(`LinkedIn post failed (${res.status}): ${text}`);
      return { ok: false, platform: "linkedin", status: res.status };
    }
    log("LinkedIn post published.");
    return { ok: true, platform: "linkedin" };
  } catch (err) {
    log(`LinkedIn post error: ${String(err)}`);
    return { ok: false, platform: "linkedin", error: String(err) };
  }
}

async function postInstagramUpdate() {
  const igUserId = process.env.IG_USER_ID;
  const igAccessToken = process.env.IG_ACCESS_TOKEN;
  const canonicalUrl = "https://ziontechgroup.com";

  if (!igUserId || !igAccessToken) {
    log("Instagram env missing; skipping Instagram post.");
    return { ok: false, skipped: true, platform: "instagram" };
  }

  // Simple link-style caption (IG does not make links clickable in captions).
  const caption = `🚀 Sync update: new improvements shipped. Explore: ${canonicalUrl}`;
  try {
    const createRes = await fetch(`https://graph.facebook.com/v19.0/${encodeURIComponent(igUserId)}/media?access_token=${encodeURIComponent(igAccessToken)}`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ caption })
    });
    const createJson = await createRes.json();
    if (!createRes.ok || !createJson.id) {
      log(`Instagram media create failed (${createRes.status}): ${JSON.stringify(createJson)}`);
      return { ok: false, platform: "instagram", status: createRes.status };
    }

    const publishRes = await fetch(`https://graph.facebook.com/v19.0/${encodeURIComponent(igUserId)}/media_publish?access_token=${encodeURIComponent(igAccessToken)}`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ creation_id: createJson.id })
    });
    const publishJson = await publishRes.json();
    if (!publishRes.ok || !publishJson.id) {
      log(`Instagram publish failed (${publishRes.status}): ${JSON.stringify(publishJson)}`);
      return { ok: false, platform: "instagram", status: publishRes.status };
    }
    log("Instagram post published.");
    return { ok: true, platform: "instagram" };
  } catch (err) {
    log(`Instagram post error: ${String(err)}`);
    return { ok: false, platform: "instagram", error: String(err) };
  }
}

function updateReport(results) {
  const reportPath = path.join(process.cwd(), "marketing-sync-report.md");
  const lines = [];
  lines.push("# marketing-sync Report");
  lines.push("");
  lines.push(`Generated: ${nowIso()}`);
  lines.push("");
  lines.push("## Status");
  lines.push("- Task: marketing-sync");
  const anyOk = results.some(r => r.ok);
  lines.push(`- Status: ${anyOk ? "Completed" : "Skipped/Failed"}`);
  lines.push(`- Timestamp: ${nowIso()}`);
  lines.push("");
  lines.push("## Actions");
  for (const r of results) {
    lines.push(`- ${r.platform}: ${r.skipped ? "skipped" : r.ok ? "success" : "failed"}`);
  }
  lines.push("");
  lines.push("## Notes");
  lines.push("- Uses environment variables only; no plaintext credentials.");
  lines.push("- Canonical URL: https://ziontechgroup.com");
  lines.push("");
  fs.writeFileSync(reportPath, lines.join("\n"), "utf8");
}

(async function main() {
  try {
    log("Starting marketing-sync");
    const results = [];

    // Run channels in sequence to keep logs tidy
    results.push(await postLinkedInUpdate());
    results.push(await postInstagramUpdate());

    updateReport(results);
    log("marketing-sync completed");
    process.exit(0);
  } catch (err) {
    log(`FATAL: ${String(err && err.stack ? err.stack : err)}`);
    process.exit(1);
  }
})();


