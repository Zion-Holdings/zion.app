import fs from "fs";
import path from "path";
import { SyncConfig, InstanceMeta, SyncScope } from "./types";

const DATA_DIR = path.join(process.cwd(), "data");
const CONFIG_PATH = path.join(DATA_DIR, "sync-config.json");

function readJsonSafe<T>(filePath: string, fallback: T): T {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    return JSON.parse(content) as T;
  } catch (_e) {
    return fallback;
  }
}

function parsePeersEnv(): InstanceMeta[] | undefined {
  const env = process.env.ZION_SYNC_PEERS;
  if (!env) return undefined;
  try {
    const parsed = JSON.parse(env) as InstanceMeta[];
    return parsed;
  } catch (_) {
    return undefined;
  }
}

export function loadSyncConfig(): SyncConfig {
  const defaultConfig: SyncConfig = {
    enabled: process.env.ZION_SYNC_ENABLED === "1",
    paused: process.env.ZION_SYNC_PAUSED === "1",
    scope: (process.env.ZION_SYNC_SCOPE as SyncScope) || "full",
    instance: {
      id: process.env.ZION_INSTANCE_ID || "local",
      name: process.env.ZION_INSTANCE_NAME || "Local Instance",
      baseUrl: process.env.ZION_BASE_URL || "http://localhost:3000",
      publicKey: process.env.ZION_PUBLIC_KEY || undefined,
    },
    peers:
      parsePeersEnv() ||
      readJsonSafe<InstanceMeta[]>(CONFIG_PATH, [
        { id: "zion-latam", name: "Zion LATAM", baseUrl: "https://latam.zion.app" },
        { id: "zion-devops", name: "Zion DevOps", baseUrl: "https://devops.zion.app" },
        { id: "zion-health", name: "Zion Health", baseUrl: "https://health.zion.app" },
      ]),
    requireSignatures: process.env.ZION_SYNC_REQUIRE_SIG === "1",
    p2pEnabled: process.env.ZION_SYNC_P2P === "1",
    pollIntervalSec: Number(process.env.ZION_SYNC_INTERVAL_SEC || 60),
  };

  // Merge with JSON if present for other fields
  const fileCfg = readJsonSafe<Partial<SyncConfig>>(CONFIG_PATH, {} as Partial<SyncConfig>);
  return { ...defaultConfig, ...fileCfg, instance: { ...defaultConfig.instance, ...(fileCfg.instance || {}) }, peers: fileCfg.peers || defaultConfig.peers } as SyncConfig;
}

export function ensureDataDir(): void {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
}

export { CONFIG_PATH };