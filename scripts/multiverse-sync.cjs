// Register ts-node to load TypeScript modules
require("ts-node").register({ transpileOnly: true, compilerOptions: { module: "commonjs", moduleResolution: "node" } });

const axios = require("axios");
const cron = require("node-cron");
const { loadSyncConfig } = require("../utils/sync/config");
const { createEnvelope } = require("../utils/sync/store");

const INTERVAL_SEC = Number(process.env.ZION_SYNC_INTERVAL_SEC || 60);

async function runOnce() {
  try {
    const cfg = loadSyncConfig();
    if (!cfg.enabled || cfg.paused) {
      console.log(`[sync] Skipped. enabled=${cfg.enabled} paused=${cfg.paused}`);
      return;
    }
    const scope = process.env.ZION_SYNC_SCOPE || cfg.scope || "full";
    const envelope = createEnvelope(cfg.instance, scope);
    const results = [];
    for (const peer of cfg.peers) {
      try {
        const url = `${peer.baseUrl.replace(/\/$/, "")}/api/multiverse/hub`;
        const resp = await axios.post(url, envelope, { timeout: 10000 });
        results.push({ peer: peer.id, status: resp.status });
      } catch (e) {
        results.push({ peer: peer.id, error: e?.message || String(e) });
      }
    }
    console.log(`[sync] scope=${scope} pushed=${results.length}`, results);
  } catch (e) {
    console.error("[sync] Error:", e?.message || String(e));
  }
}

if (process.argv.includes("once")) {
  runOnce();
} else {
  const spec = `*/${Math.max(1, Math.min(59, INTERVAL_SEC))} * * * * *`;
  console.log(`[sync] Scheduling every ${INTERVAL_SEC}s with spec`, spec);
  cron.schedule(spec, runOnce);
}