import { SyncEnvelope } from "./types";

export type PubSubHandler = (message: SyncEnvelope) => Promise<void> | void;

let started = false;
let handlers: PubSubHandler[] = [];

export async function startP2P(topic = "zion-multiverse-sync"): Promise<void> {
  if (started) return;
  if (process.env.ZION_SYNC_P2P !== "1") {
    console.warn("[P2P] Disabled (ZION_SYNC_P2P!=1)");
    return;
  }
  try {
    // Dynamic import to avoid hard dependency when not enabled
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { createLibp2p } = require("libp2p");
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { gossipsub } = require("@chainsafe/libp2p-gossipsub");
    const node = await createLibp2p({
      transports: [],
      pubsub: gossipsub(),
    });
    await node.start();
    await node.pubsub.subscribe(topic);
    node.pubsub.addEventListener("message", async (evt: any) => {
      try {
        const payload = JSON.parse(new TextDecoder().decode(evt.detail.data));
        for (const h of handlers) await h(payload);
      } catch (e) {
        console.error("[P2P] Failed to handle message", e);
      }
    });
    started = true;
    console.log("[P2P] Started libp2p pubsub on topic", topic);
  } catch (e) {
    const msg = (e && (e as any).message) ? (e as any).message : String(e);
    console.warn("[P2P] Not available, continuing without it.", msg);
  }
}

export function onMessage(handler: PubSubHandler): void {
  handlers.push(handler);
}

export async function publish(_msg: SyncEnvelope): Promise<void> {
  // Optional: implement when libp2p wired up
  // No-op when not enabled
}