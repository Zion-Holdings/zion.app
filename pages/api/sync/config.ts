import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../utils/sync/storage";
import { InstanceConfig, Peer, SyncScope } from "../../../utils/sync/types";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const state = readState();

  if (req.method === "GET") {
    return res.status(200).json({ config: state.config });
  }

  if (req.method === "POST") {
    const { optIn, paused, scope, peers, instanceId } = req.body as Partial<InstanceConfig> & {
      peers?: Peer[];
      scope?: SyncScope;
      instanceId?: string;
    };

    if (scope && !["full", "dao", "marketplace"].includes(scope)) {
      return res.status(400).json({ error: "Invalid scope" });
    }

    if (Array.isArray(peers)) {
      state.config.peers = peers.filter((p) => typeof p.baseUrl === "string" && p.baseUrl.length > 0);
    }
    if (typeof optIn === "boolean") state.config.optIn = optIn;
    if (typeof paused === "boolean") state.config.paused = paused;
    if (scope) state.config.scope = scope;
    if (instanceId && typeof instanceId === "string") state.config.instanceId = instanceId;

    writeState(state);
    return res.status(200).json({ config: state.config });
  }

  return res.status(405).json({ error: "Method not allowed" });
}