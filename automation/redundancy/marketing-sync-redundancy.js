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
    if (!publishRes.ok) {
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

function generateReport(results) {
  const report = {
    timestamp: nowIso(),
    redundancyMode: "marketing-sync",
    results: results,
    summary: {
      total: results.length,
      successful: results.filter(r => r.ok).length,
      failed: results.filter(r => !r.ok && !r.skipped).length,
      skipped: results.filter(r => r.skipped).length
    }
  };

  const reportPath = path.join(process.cwd(), "marketing-sync-redundancy-report.md");
  const reportContent = `# Marketing Sync Redundancy Report

Generated: ${report.timestamp}

## Summary
- Total platforms: ${report.summary.total}
- Successful: ${report.summary.successful}
- Failed: ${report.summary.failed}
- Skipped: ${report.summary.skipped}

## Results
${results.map(r => `- **${r.platform}**: ${r.ok ? '✅ Success' : r.skipped ? '⏭️ Skipped' : '❌ Failed'}${r.error ? ` (${r.error})` : ''}`).join('\n')}

## Redundancy Status
This report was generated by the PM2 redundancy system, providing backup for GitHub Actions marketing-sync workflow.
`;

  fs.writeFileSync(reportPath, reportContent);
  log(`Report generated: ${reportPath}`);
  return reportPath;
}

async function commitReportIfChanged(reportPath) {
  try {
    // Check if there are changes to commit
    const status = runGit(["status", "--porcelain"]);
    if (status.stdout.trim()) {
      // Configure git user
      runGit(["config", "user.name", "pm2-redundancy[bot]"]);
      runGit(["config", "user.email", "redundancy@ziontechgroup.com"]);
      
      // Add and commit
      runGit(["add", reportPath]);
      runGit(["commit", "-m", "chore(redundancy): update marketing-sync redundancy report"]);
      
      // Push to main branch
      const pushResult = runGit(["push", "origin", "main"]);
      if (pushResult.status === 0) {
        log("Report committed and pushed successfully");
        return true;
      } else {
        log(`Push failed: ${pushResult.stderr}`);
        return false;
      }
    } else {
      log("No changes to commit");
      return true;
    }
  } catch (err) {
    log(`Commit error: ${String(err)}`);
    return false;
  }
}

async function main() {
  log("Starting Marketing Sync Redundancy Process");
  
  try {
    // Run marketing sync operations
    const results = [];
    
    // LinkedIn update
    log("Posting to LinkedIn...");
    const linkedinResult = await postLinkedInUpdate();
    results.push(linkedinResult);
    
    // Instagram update
    log("Posting to Instagram...");
    const instagramResult = await postInstagramUpdate();
    results.push(instagramResult);
    
    // Generate report
    log("Generating redundancy report...");
    const reportPath = generateReport(results);
    
    // Commit report if changed
    log("Committing report if changed...");
    await commitReportIfChanged(reportPath);
    
    log("Marketing Sync Redundancy Process completed successfully");
    log(`Results: ${results.filter(r => r.ok).length}/${results.length} successful`);
    
  } catch (error) {
    log(`Fatal error: ${String(error)}`);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main().catch(error => {
    log(`Unhandled error: ${String(error)}`);
    process.exit(1);
  });
}

module.exports = { main, postLinkedInUpdate, postInstagramUpdate, generateReport };