import axios from "axios";
import process from "process";

const LOCAL_BASE = process.env.ZION_LOCAL_BASE_URL || "http://localhost:3000";
const PULL_PATH = "/api/sync/pull";
const PUBLISH_PATH = "/api/sync/publish";
const CONFIG_PATH = "/api/sync/config";

function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

async function getConfig() {
  const url = new URL(CONFIG_PATH, LOCAL_BASE).toString();
  const res = await axios.get(url, { timeout: 5000 });
  return res.data.config;
}

async function getStatus() {
  const url = new URL("/api/sync", LOCAL_BASE).toString();
  const res = await axios.get(url, { timeout: 5000 });
  return res.data;
}

async function pullFromPeer(peer, since) {
  try {
    const url = new URL(PULL_PATH, peer.baseUrl).toString();
    const res = await axios.post(url, { since, scope: peer.scope || "full" }, { timeout: 8000 });
    return res.data.events || [];
  } catch (e) {
    return [];
  }
}

async function publishLocal(event, signature) {
  const url = new URL(PUBLISH_PATH, LOCAL_BASE).toString();
  const headers = {};
  if (signature) headers["x-zion-signature"] = signature;
  try {
    await axios.post(url, { ...event, propagate: false }, { headers, timeout: 8000 });
  } catch (e) {
    // ignore
  }
}

async function runLoop() {
  while (true) {
    try {
      const config = await getConfig();
      if (!config.optIn || config.paused) {
        await sleep(60000);
        continue;
      }
      const status = await getStatus();
      const since = status.lastSyncedAt || 0;
      for (const peer of config.peers || []) {
        if (peer.paused) continue;
        const events = await pullFromPeer(peer, since);
        for (const e of events) {
          await publishLocal(e);
        }
      }
    } catch {}
    await sleep(60000);
  }
}

runLoop();