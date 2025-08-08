import type { NextApiRequest, NextApiResponse } from "next";
import { loadSyncConfig } from "../../../utils/sync/config";
import { mergeEnvelope } from "../../../utils/sync/store";
import { SyncEnvelope } from "../../../utils/sync/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const cfg = loadSyncConfig();

  if (!cfg.enabled) {
    return res.status(403).json({ ok: false, error: "sync-disabled" });
  }
  if (cfg.paused) {
    return res.status(423).json({ ok: false, error: "sync-paused" });
  }

  if (req.method === "GET") {
    return res.status(200).json({
      ok: true,
      instance: cfg.instance,
      scope: cfg.scope,
      peers: cfg.peers.map(p => ({ id: p.id, baseUrl: p.baseUrl })),
      requireSignatures: cfg.requireSignatures,
    });
  }

  if (req.method === "POST") {
    try {
      const envelope = req.body as SyncEnvelope;
      const result = mergeEnvelope(envelope);
      return res.status(200).json({ ok: true, result });
    } catch (e: any) {
      return res.status(400).json({ ok: false, error: e?.message || "merge-failed" });
    }
  }

  res.setHeader("Allow", "GET,POST");
  return res.status(405).end();
}