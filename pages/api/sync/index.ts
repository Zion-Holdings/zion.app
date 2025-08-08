import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { loadSyncConfig } from "../../../utils/sync/config";
import { createEnvelope } from "../../../utils/sync/store";
import { SyncScope } from "../../../utils/sync/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const cfg = loadSyncConfig();

  if (!cfg.enabled) {
    return res.status(403).json({ ok: false, error: "sync-disabled" });
  }
  if (cfg.paused) {
    return res.status(423).json({ ok: false, error: "sync-paused" });
  }

  const scope: SyncScope = (req.query.scope as SyncScope) || cfg.scope || "full";

  if (req.method === "GET") {
    const envelope = createEnvelope(cfg.instance, scope);
    return res.status(200).json({ ok: true, envelope });
  }

  if (req.method === "POST") {
    const envelope = createEnvelope(cfg.instance, scope);

    const results: any[] = [];
    for (const peer of cfg.peers) {
      try {
        const url = `${peer.baseUrl.replace(/\/$/, "")}/api/multiverse/hub`;
        const resp = await axios.post(url, envelope, { timeout: 10000 });
        results.push({ peer: peer.id, status: resp.status, data: resp.data });
      } catch (e: any) {
        results.push({ peer: peer.id, error: e?.message || "push-failed" });
      }
    }

    return res.status(200).json({ ok: true, pushed: results.length, results });
  }

  res.setHeader("Allow", "GET,POST");
  return res.status(405).end();
}