import type { NextApiRequest, NextApiResponse } from 'next';
import { getRequiredDocuments, getOptionalDocuments } from '../../../utils/kyc';
import type { KycProfile, KycRole } from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data', 'kyc');
const FILE = path.join(DATA_DIR, 'profiles.json');

function load(): Record<string, KycProfile> {
  try {
    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function save(db: Record<string, KycProfile>) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2));
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { userId, role, fullLegalName, businessName, businessRegistrationNumber } = req.body as {
    userId?: string;
    role?: KycRole;
    fullLegalName?: string;
    businessName?: string;
    businessRegistrationNumber?: string;
  };
  if (!userId || !role) return res.status(400).json({ error: 'Missing userId or role' });

  const db = load();
  const now = new Date().toISOString();
  const existing = db[userId];
  const profile: KycProfile = existing || {
    userId,
    role,
    fullLegalName,
    businessName,
    businessRegistrationNumber,
    documents: [],
    status: 'in_progress',
    amlStatus: 'unknown',
    createdAt: now,
    lastUpdatedAt: now,
    auditTrail: [{ at: now, by: userId, action: 'kyc_started' }],
  } as KycProfile;

  profile.role = role;
  if (fullLegalName) profile.fullLegalName = fullLegalName;
  if (businessName) profile.businessName = businessName;
  if (businessRegistrationNumber) profile.businessRegistrationNumber = businessRegistrationNumber;
  profile.lastUpdatedAt = now;
  db[userId] = profile;
  save(db);

  res.status(200).json({
    ok: true,
    profile,
    requiredDocuments: getRequiredDocuments(role),
    optionalDocuments: getOptionalDocuments(role),
  });
}