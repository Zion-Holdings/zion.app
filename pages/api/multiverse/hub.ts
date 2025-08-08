import type { NextApiRequest, NextApiResponse } from "next";
import { readState } from "../../../utils/sync/storage";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const state = readState();

  if (req.method === "GET") {
    return res.status(200).json({
      route: "/multiverse/hub",
      instanceId: state.config.instanceId,
      peers: state.config.peers,
      scope: state.config.scope,
      optIn: state.config.optIn,
      paused: state.config.paused,
      lastSyncedAt: state.lastSyncedAt,
    });
  }

  return res.status(405).json({ error: "Method not allowed" });
}