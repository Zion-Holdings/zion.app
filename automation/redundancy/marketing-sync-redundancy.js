#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

function nowIso() {
  return new Date().toISOString();
}

function log(message) {
  const line = `[${nowIso()}] [REDUNDANCY-MARKETING-SYNC] ${message}`;
  console.log(line);
}

function run(command, args, options = {}) {
  const execCwd = options.cwd || process.cwd();
  const result = spawnSync(command, args, {
    cwd: execCwd,
    env: process.env,
    shell: false,
    encoding: "utf8",
    maxBuffer: 1024 * 1024 * 20
  });
  const stdout = (result.stdout || "").trim();
  const stderr = (result.stderr || "").trim();
  const status = typeof result.status === "number" ? result.status : 0;
  if (options.verbose) {
    log(`$ ${command} ${args.join(" ")}`);
    if (stdout) console.log(stdout);
    if (stderr) console.error(stderr);
  }
  return { status, stdout, stderr };
}

function runGit(args, options = {}) {
  return run("git", args, options);
}

async function postLinkedInUpdate() {
  const accessToken = process.env.LINKEDIN_ACCESS_TOKEN;
  const authorUrn = process.env.LINKEDIN_URN;
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
          text: `🚀 Redundancy Sync: Marketing automation running locally. Explore updates → ${canonicalUrl}`
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
    log("LinkedIn post published via redundancy.");
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

  const caption = `🚀 Redundancy Sync: Marketing automation running locally. Explore: ${canonicalUrl}`;
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
    if (!publishRes.ok) {
      log(`Instagram publish failed (${publishRes.status}): ${JSON.stringify(publishJson)}`);
      return { ok: false, platform: "instagram", status: publishRes.status };
    }
    log("Instagram post published via redundancy.");
    return { ok: true, platform: "instagram" };
  } catch (err) {
    log(`Instagram post error: ${String(err)}`);
    return { ok: false, platform: "instagram", error: String(err) };
  }
}

async function generateMarketingReport() {
  const timestamp = nowIso();
  const report = {
    timestamp,
    redundancy: true,
    source: "pm2-redundancy",
    marketing: {
      linkedin: await postLinkedInUpdate(),
      instagram: await postInstagramUpdate()
    }
  };

  const reportPath = path.join(process.cwd(), "marketing-sync-redundancy-report.md");
  const reportContent = `# Marketing Sync Redundancy Report

Generated: ${timestamp}
Source: PM2 Redundancy System

## Results
- LinkedIn: ${report.marketing.linkedin.ok ? "✅ Success" : "❌ Failed"}
- Instagram: ${report.marketing.instagram.ok ? "✅ Success" : "❌ Failed"}

## Details
\`\`\`json
${JSON.stringify(report, null, 2)}
\`\`\`
`;

  fs.writeFileSync(reportPath, reportContent);
  log(`Marketing report generated: ${reportPath}`);
  return report;
}

async function commitAndPush() {
  try {
    // Configure git user
    runGit(["config", "user.name", "pm2-redundancy[bot]"]);
    runGit(["config", "user.email", "redundancy@ziontechgroup.com"]);

    // Check if there are changes
    const status = runGit(["status", "--porcelain"]);
    if (!status.stdout.trim()) {
      log("No changes to commit.");
      return;
    }

    // Add and commit
    runGit(["add", "-A"]);
    runGit(["commit", "-m", `chore(redundancy): marketing sync via PM2 redundancy`]);

    // Push to main
    const pushResult = runGit(["push", "origin", "main"]);
    if (pushResult.status === 0) {
      log("Changes pushed successfully via redundancy.");
    } else {
      log(`Push failed: ${pushResult.stderr}`);
    }
  } catch (err) {
    log(`Commit/push error: ${String(err)}`);
  }
}

async function main() {
  try {
    log("Starting marketing sync redundancy process...");
    
    // Generate marketing report
    const report = await generateMarketingReport();
    
    // Commit and push if needed
    await commitAndPush();
    
    log("Marketing sync redundancy completed successfully.");
    process.exit(0);
  } catch (err) {
    log(`Marketing sync redundancy failed: ${String(err)}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { main, postLinkedInUpdate, postInstagramUpdate, generateMarketingReport };