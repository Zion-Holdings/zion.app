#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const dataDir = path.join(process.cwd(), 'data', 'governance');
const proposalsPath = path.join(dataDir, 'proposals.json');
const votesPath = path.join(dataDir, 'votes.json');
const snapshotsDir = path.join(dataDir, 'snapshots');
const reportsDir = path.join(process.cwd(), 'data', 'reports');
const metricsPath = path.join(reportsDir, 'governance-metrics.json');
const roadmapPath = path.join(process.cwd(), 'ROADMAP.md');

function ensure() {
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  if (!fs.existsSync(snapshotsDir)) fs.mkdirSync(snapshotsDir, { recursive: true });
  if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });
  if (!fs.existsSync(proposalsPath)) fs.writeFileSync(proposalsPath, '[]');
  if (!fs.existsSync(votesPath)) fs.writeFileSync(votesPath, '[]');
}

function readJson(file) { try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return []; } }
function writeJson(file, obj) { fs.writeFileSync(file, JSON.stringify(obj, null, 2)); }

function computeStatus(proposal, votes) {
  const now = Date.now();
  if (now < proposal.endTime && now >= proposal.startTime) return 'Live';
  const proposalVotes = votes.filter(v => v.proposalId === proposal.id);
  const totalPower = proposalVotes.reduce((a, v) => a + (v.power || 0), 0);
  const approvePower = proposalVotes.filter(v => v.option === 'approve').reduce((a, v) => a + (v.power || 0), 0);
  const quorumReached = totalPower >= (proposal.quorumPercent || 0);
  if (!quorumReached) return 'Failed';
  if (approvePower > totalPower / 2) {
    if (proposal.executedTxHash) return 'Executed';
    if (proposal.queued) return 'Queued';
    return 'Live';
  }
  return 'Failed';
}

function ensureRoadmap() {
  if (!fs.existsSync(roadmapPath)) {
    fs.writeFileSync(roadmapPath, '# Zion Roadmap\n\n## Queued (Approved by Governance)\n\n');
  }
}

function appendToRoadmap(proposal) {
  ensureRoadmap();
  const content = fs.readFileSync(roadmapPath, 'utf8');
  const line = `- [${proposal.title}](/governance/${proposal.id}) — ${new Date().toISOString()}\n`;
  if (!content.includes(proposal.id)) {
    const updated = content.replace(/## Queued \(Approved by Governance\)\n\n/, match => match + line);
    fs.writeFileSync(roadmapPath, updated);
  }
}

function run() {
  ensure();
  let proposals = readJson(proposalsPath);
  const votes = readJson(votesPath);

  let changed = false;
  const nowIso = new Date().toISOString();

  for (const p of proposals) {
    const status = computeStatus(p, votes);
    if (status !== p.status) { p.status = status; changed = true; }

    // Snapshot per proposal
    const snapshot = {
      id: p.id,
      generatedAt: nowIso,
      proposal: p,
      tally: (function () {
        const pv = votes.filter(v => v.proposalId === p.id);
        const t = { approve: 0, reject: 0, abstain: 0, total: 0 };
        for (const v of pv) { t[v.option] += (v.power || 0); t.total += (v.power || 0); }
        return t;
      })(),
      votes: votes.filter(v => v.proposalId === p.id)
    };

    const snapPath = path.join(snapshotsDir, `${p.id}.json`);
    const prev = fs.existsSync(snapPath) ? fs.readFileSync(snapPath, 'utf8') : '';
    const next = JSON.stringify(snapshot, null, 2);
    if (prev !== next) { fs.writeFileSync(snapPath, next); changed = true; }

    // Link snapshot API URL for UI
    const desiredUrl = `/api/governance/snapshots/${p.id}`;
    if (p.snapshotUrl !== desiredUrl) { p.snapshotUrl = desiredUrl; changed = true; }

    // Auto-queue approved into roadmap
    const now = Date.now();
    const votingEnded = now > p.endTime;
    if (votingEnded && status !== 'Failed' && status !== 'Executed' && !p.queued) {
      appendToRoadmap(p);
      p.queued = true;
      changed = true;
    }
  }

  if (changed) {
    writeJson(proposalsPath, proposals);
  }

  // Metrics report
  const voters = new Set(votes.map(v => v.voter)).size;
  const totalPower = votes.reduce((a, v) => a + (v.power || 0), 0);
  const outcomes = proposals
    .filter(p => Date.now() > p.endTime)
    .reduce((acc, p) => { acc[p.status] = (acc[p.status] || 0) + 1; return acc; }, {});
  const metrics = { generatedAt: nowIso, voters, totalPower, outcomes, proposals: proposals.length };
  writeJson(metricsPath, metrics);

  console.log('[governance-autonomous] done', { changed, voters, totalPower, proposals: proposals.length });
}

run();