import crypto from "crypto";

function sha256Hex(input: string | Buffer): string {
  return crypto.createHash("sha256").update(input).digest("hex");
}

export function hashLeafJson(obj: unknown): string {
  return sha256Hex(JSON.stringify(obj));
}

export function buildMerkleTree(leavesHex: string[]): { root: string; levels: string[][] } {
  if (leavesHex.length === 0) return { root: sha256Hex(""), levels: [[sha256Hex("")]] };
  let level = leavesHex.slice();
  const levels: string[][] = [level];
  while (level.length > 1) {
    const next: string[] = [];
    for (let i = 0; i < level.length; i += 2) {
      const left = level[i];
      const right = level[i + 1] || left;
      next.push(sha256Hex(Buffer.from(left + right, "hex")));
    }
    levels.push(next);
    level = next;
  }
  return { root: level[0], levels };
}

export function generateProofs(leavesHex: string[], levels: string[][]): Record<string, string[]> {
  const proofs: Record<string, string[]> = {};
  const leafLevel = 0;
  for (let idx = 0; idx < leavesHex.length; idx++) {
    const leaf = leavesHex[idx];
    const path: string[] = [];
    let pos = idx;
    for (let lvl = leafLevel; lvl < levels.length - 1; lvl++) {
      const level = levels[lvl];
      const isRight = pos % 2 === 1;
      const siblingIndex = isRight ? pos - 1 : pos + 1;
      const sibling = level[siblingIndex] || level[pos];
      path.push(sibling);
      pos = Math.floor(pos / 2);
    }
    proofs[leaf] = path;
  }
  return proofs;
}

export function signRootWithHmac(rootHex: string): string | undefined {
  const secret = process.env.ZION_SYNC_SECRET;
  if (!secret) return undefined;
  return crypto.createHmac("sha256", Buffer.from(secret, "utf8")).update(Buffer.from(rootHex, "hex")).digest("hex");
}

export function verifyHmacSignature(rootHex: string, signatureHex?: string): boolean {
  if (!signatureHex) return !process.env.ZION_SYNC_REQUIRE_SIG; // allow if not required
  const expected = signRootWithHmac(rootHex);
  if (!expected) return !process.env.ZION_SYNC_REQUIRE_SIG; // allow if no secret configured
  return crypto.timingSafeEqual(Buffer.from(expected, "hex"), Buffer.from(signatureHex, "hex"));
}