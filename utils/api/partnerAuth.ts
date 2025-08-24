import { createHmac, randomBytes } from "crypto";
import fs from "fs-extra";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import {
  ApiKeyRecord,
  JwtPayload,
  PartnerRecord,
  UsageEntry,
  UsageSummary,
} from "../types/partners";

const DATA_DIR = path.join(process.cwd(), "data", "partners");
const PARTNERS_JSON = path.join(DATA_DIR, "partners.json");
const KEYS_JSON = path.join(DATA_DIR, "keys.json");
const USAGE_JSON = path.join(DATA_DIR, "usage.json");
const LOGS_JSON = path.join(DATA_DIR, "logs.json");

const JWT_SECRET = process.env.PARTNER_JWT_SECRET || "change-me-dev-secret";
const ADMIN_API_KEY = process.env.ADMIN_API_KEY || "dev-admin-key";

async function ensureDataFiles(): Promise<void> {
  await fs.ensureDir(DATA_DIR);
  for (const file of [PARTNERS_JSON, KEYS_JSON, USAGE_JSON, LOGS_JSON]) {
    if (!(await fs.pathExists(file))) {
      await fs.writeJSON(file, file === USAGE_JSON || file === LOGS_JSON ? [] : [], { spaces: 2 });
    }
  }
}

async function readJson<T>(filePath: string, fallback: T): Promise<T> {
  await ensureDataFiles();
  try {
    return (await fs.readJSON(filePath)) as T;
  } catch {
    return fallback;
  }
}

async function writeJson<T>(filePath: string, data: T): Promise<void> {
  await fs.writeJSON(filePath, data, { spaces: 2 });
}

export async function listPartners(): Promise<PartnerRecord[]> {
  return readJson<PartnerRecord[]>(PARTNERS_JSON, []);
}

export async function savePartners(records: PartnerRecord[]): Promise<void> {
  await writeJson(PARTNERS_JSON, records);
}

export async function listApiKeys(): Promise<ApiKeyRecord[]> {
  return readJson<ApiKeyRecord[]>(KEYS_JSON, []);
}

export async function saveApiKeys(records: ApiKeyRecord[]): Promise<void> {
  await writeJson(KEYS_JSON, records);
}

export async function appendUsage(entry: UsageEntry): Promise<void> {
  const entries = await readJson<UsageEntry[]>(USAGE_JSON, []);
  entries.push(entry);
  await writeJson(USAGE_JSON, entries);
}

export async function appendLog(entry: UsageEntry): Promise<void> {
  const entries = await readJson<UsageEntry[]>(LOGS_JSON, []);
  entries.push(entry);
  await writeJson(LOGS_JSON, entries);
}

export function toBase64Url(input: Buffer): string {
  return input
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

export function signJwt(payload: Omit<JwtPayload, "iat" | "exp">, ttlSeconds = 3600): string {
  const header = { alg: "HS256", typ: "JWT" };
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + ttlSeconds;
  const fullPayload: JwtPayload = { ...payload, iat, exp } as JwtPayload;
  const headerB64 = toBase64Url(Buffer.from(JSON.stringify(header)));
  const payloadB64 = toBase64Url(Buffer.from(JSON.stringify(fullPayload)));
  const data = `${headerB64}.${payloadB64}`;
  const signature = createHmac("sha256", JWT_SECRET).update(data).digest();
  const signatureB64 = toBase64Url(signature);
  return `${data}.${signatureB64}`;
}

export function verifyJwt(token: string): JwtPayload | null {
  try {
    const [h, p, s] = token.split(".");
    if (!h || !p || !s) return null;
    const data = `${h}.${p}`;
    const expected = toBase64Url(createHmac("sha256", JWT_SECRET).update(data).digest());
    if (expected !== s) return null;
    const payload = JSON.parse(Buffer.from(p, "base64").toString("utf8")) as JwtPayload;
    if (payload.exp < Math.floor(Date.now() / 1000)) return null;
    return payload;
  } catch {
    return null;
  }
}

export async function findPartnerByApiKey(apiKey: string): Promise<{ partner: PartnerRecord; apiKey: ApiKeyRecord } | null> {
  const keys = await listApiKeys();
  const key = keys.find((k) => k.key === apiKey && k.active);
  if (!key) return null;
  const partners = await listPartners();
  const partner = partners.find((p) => p.id === key.partnerId && p.status === "approved");
  if (!partner) return null;
  return { partner, apiKey: key };
}

export async function enforceRateLimit(apiKey: ApiKeyRecord): Promise<boolean> {
  // Simple file-based per-minute window counter
  const windowKey = `${apiKey.id}:${Math.floor(Date.now() / 60000)}`; // minute window
  const limitsFile = path.join(DATA_DIR, "rate-limits.json");
  type RateState = Record<string, number>;
  const state = await readJson<RateState>(limitsFile, {} as RateState);
  const current = state[windowKey] || 0;
  const limit = apiKey.rateLimitPerMinute ?? 60;
  if (current >= limit) {
    return false;
  }
  state[windowKey] = current + 1;
  await writeJson(limitsFile, state);
  return true;
}

export function getAuthBearer(req: NextApiRequest): string | null {
  const auth = req.headers.authorization;
  if (!auth) return null;
  const [scheme, token] = auth.split(" ");
  if (scheme?.toLowerCase() !== "bearer" || !token) return null;
  return token;
}

export async function authenticateRequest(req: NextApiRequest): Promise<{ partner: PartnerRecord; apiKey: ApiKeyRecord } | null> {
  const apiKey = (req.headers["x-api-key"] as string) || "";
  if (apiKey) {
    return findPartnerByApiKey(apiKey);
  }
  const bearer = getAuthBearer(req);
  if (bearer) {
    const payload = verifyJwt(bearer);
    if (!payload) return null;
    const keys = await listApiKeys();
    const key = keys.find((k) => k.id === payload.apiKeyId && k.partnerId === payload.sub && k.active);
    if (!key) return null;
    const partners = await listPartners();
    const partner = partners.find((p) => p.id === payload.sub && p.status === "approved");
    if (!partner) return null;
    return { partner, apiKey: key };
  }
  return null;
}

export function isAdmin(req: NextApiRequest): boolean {
  const adminHeader = req.headers["x-admin-key"] as string | undefined;
  return Boolean(adminHeader && adminHeader === ADMIN_API_KEY);
}

export async function recordRequest(
  req: NextApiRequest,
  res: NextApiResponse,
  partner: PartnerRecord,
  apiKey: ApiKeyRecord,
  startedAt: number,
  statusCode: number
): Promise<void> {
  const latency = Date.now() - startedAt;
  const endpoint = req.url?.split("?")[0] || "unknown";
  const entry: UsageEntry = {
    timestamp: new Date().toISOString(),
    partnerId: partner.id,
    apiKeyId: apiKey.id,
    endpoint,
    statusCode,
    latencyMs: latency,
  };
  await appendUsage(entry);
  await appendLog(entry);
}

export async function calculateUsageSummary(partnerId: string): Promise<UsageSummary> {
  const entries = await readJson<UsageEntry[]>(USAGE_JSON, []);
  const mine = entries.filter((e) => e.partnerId === partnerId);
  const byEndpoint: Record<string, number> = {};
  const byMonth: Record<string, number> = {};
  for (const e of mine) {
    byEndpoint[e.endpoint] = (byEndpoint[e.endpoint] || 0) + 1;
    const month = e.timestamp.substring(0, 7);
    byMonth[month] = (byMonth[month] || 0) + 1;
  }
  return {
    totalRequests: mine.length,
    byEndpoint,
    byMonth,
  };
}

export async function createPartner(
  data: Pick<PartnerRecord, "name" | "entityType" | "pointOfContact" | "useCaseType"> & { brand?: Partial<PartnerRecord["brand"]> }
): Promise<{ partner: PartnerRecord; apiKey: ApiKeyRecord }> {
  const partners = await listPartners();
  const keys = await listApiKeys();
  const id = uuidv4();
  const now = new Date().toISOString();
  const partner: PartnerRecord = {
    id,
    name: data.name,
    entityType: data.entityType,
    pointOfContact: data.pointOfContact,
    useCaseType: data.useCaseType,
    brand: data.brand,
    status: "approved",
    createdAt: now,
    updatedAt: now,
  };
  partners.push(partner);
  const apiKey: ApiKeyRecord = {
    id: uuidv4(),
    partnerId: partner.id,
    key: uuidv4(),
    active: true,
    createdAt: now,
    rateLimitPerMinute: 60,
  };
  keys.push(apiKey);
  await savePartners(partners);
  await saveApiKeys(keys);
  return { partner, apiKey };
}