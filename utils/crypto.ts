import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

export type EncryptedPayload = {
  algorithm: 'aes-256-gcm';
  iv: string; // hex
  salt: string; // hex
  authTag: string; // hex
  ciphertext: string; // hex
  createdAt: string;
};

export async function deriveKeyFromPassphrase(passphrase: string, salt: Buffer): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    crypto.scrypt(passphrase, salt, 32, { N: 16384, r: 8, p: 1 }, (err, derivedKey) => {
      if (err) return reject(err);
      resolve(derivedKey as Buffer);
    });
  });
}

export async function encryptJsonObject<T extends object>(data: T, passphrase: string): Promise<EncryptedPayload> {
  const salt = crypto.randomBytes(16);
  const iv = crypto.randomBytes(12);
  const key = await deriveKeyFromPassphrase(passphrase, salt);
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
  const plaintext = Buffer.from(JSON.stringify(data), 'utf8');
  const encrypted = Buffer.concat([cipher.update(plaintext), cipher.final()]);
  const authTag = cipher.getAuthTag();
  return {
    algorithm: 'aes-256-gcm',
    iv: iv.toString('hex'),
    salt: salt.toString('hex'),
    authTag: authTag.toString('hex'),
    ciphertext: encrypted.toString('hex'),
    createdAt: new Date().toISOString(),
  };
}

export async function decryptToJsonObject<T = unknown>(payload: EncryptedPayload, passphrase: string): Promise<T> {
  const iv = Buffer.from(payload.iv, 'hex');
  const salt = Buffer.from(payload.salt, 'hex');
  const authTag = Buffer.from(payload.authTag, 'hex');
  const ciphertext = Buffer.from(payload.ciphertext, 'hex');
  const key = await deriveKeyFromPassphrase(passphrase, salt);
  const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
  decipher.setAuthTag(authTag);
  const decrypted = Buffer.concat([decipher.update(ciphertext), decipher.final()]);
  const json = JSON.parse(decrypted.toString('utf8')) as T;
  return json;
}

export type VaultMetadata = {
  vaultId: string;
  failedAttempts: number;
  maxFailedAttempts: number;
  guardiansHashed: string[]; // sha256 of guardian identifiers
  guardianThreshold: number;
  daoAlertWebhook?: string;
  lastUpdatedAt: string;
};

export type PersistedVaultFile = {
  meta: VaultMetadata;
  payload: EncryptedPayload;
};

export function getVaultsDir(): string {
  const dir = path.join(process.cwd(), 'data', 'vaults');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  return dir;
}

export function getVaultFilePath(vaultId: string): string {
  return path.join(getVaultsDir(), `${vaultId}.json`);
}

export function writeVaultFile(vaultId: string, data: PersistedVaultFile): void {
  const filePath = getVaultFilePath(vaultId);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

export function readVaultFile(vaultId: string): PersistedVaultFile | null {
  const filePath = getVaultFilePath(vaultId);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(raw) as PersistedVaultFile;
}

export function deleteVaultFile(vaultId: string): void {
  const filePath = getVaultFilePath(vaultId);
  if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
}

export function sha256Hex(input: string): string {
  return crypto.createHash('sha256').update(input).digest('hex');
}