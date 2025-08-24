import fs from "fs";
import path from "path";

export type FeedbackRecord = {
  id: string;
  createdAtIso: string;
  user: { id?: string; role?: string; talentSlug?: string };
  rating: number;
  comment?: string;
  kind: "general" | "bug" | "feature";
  context?: { actionType?: string; metadata?: any };
};

const DATA_DIR = path.join(process.cwd(), "data", "runtime");
const DB_PATH = path.join(DATA_DIR, "feedback.json");

function ensureDataFile(): void {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(DB_PATH)) fs.writeFileSync(DB_PATH, JSON.stringify({ items: [] }, null, 2), "utf-8");
}

export function saveFeedbackFallback(rec: FeedbackRecord): FeedbackRecord {
  ensureDataFile();
  const raw = fs.readFileSync(DB_PATH, "utf-8");
  const data = JSON.parse(raw || "{}");
  const items: FeedbackRecord[] = Array.isArray(data.items) ? data.items : [];
  items.push(rec);
  fs.writeFileSync(DB_PATH, JSON.stringify({ items }, null, 2), "utf-8");
  return rec;
}