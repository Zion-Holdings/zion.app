import fs from 'fs';
import path from 'path';
import { Feature, roleWeights, UserRole } from '../types/roadmap';

const storePath = path.resolve(process.cwd(), 'data', 'roadmap-store.json');
const seedPath = path.resolve(process.cwd(), 'data', 'roadmap.seed.json');

function ensureStore(): void {
  const dataDir = path.dirname(storePath);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(storePath)) {
    const seed = fs.existsSync(seedPath)
      ? JSON.parse(fs.readFileSync(seedPath, 'utf8'))
      : [];
    fs.writeFileSync(storePath, JSON.stringify(seed, null, 2), 'utf8');
  }
}

export function readFeatures(): Feature[] {
  ensureStore();
  const raw = fs.readFileSync(storePath, 'utf8');
  return JSON.parse(raw) as Feature[];
}

export function writeFeatures(features: Feature[]): void {
  ensureStore();
  fs.writeFileSync(storePath, JSON.stringify(features, null, 2), 'utf8');
}

export function findFeatureByIdOrSlug(idOrSlug: string): Feature | undefined {
  const features = readFeatures();
  return features.find((f) => f.id === idOrSlug || f.slug === idOrSlug);
}

export function upsertFeature(updated: Feature): Feature {
  const features = readFeatures();
  const idx = features.findIndex((f) => f.id === updated.id);
  const nowIso = new Date().toISOString();
  updated.updatedAt = nowIso;
  if (idx >= 0) {
    features[idx] = updated;
  } else {
    updated.createdAt = nowIso;
    features.push(updated);
  }
  writeFeatures(features);
  return updated;
}

export function applyUpvote(featureId: string, voterId: string, role: UserRole): Feature | null {
  const features = readFeatures();
  const feature = features.find((f) => f.id === featureId || f.slug === featureId);
  if (!feature) return null;

  feature.voterIds = feature.voterIds || [];
  if (feature.voterIds.includes(voterId)) {
    return feature; // already voted
  }
  feature.voterIds.push(voterId);
  feature.upvoteCount += 1;
  feature.upvotesWeighted += roleWeights[role] || 1;
  feature.updatedAt = new Date().toISOString();
  writeFeatures(features);
  return feature;
}

export function toggleFollow(featureId: string, followerId: string): Feature | null {
  const features = readFeatures();
  const feature = features.find((f) => f.id === featureId || f.slug === featureId);
  if (!feature) return null;
  feature.followerIds = feature.followerIds || [];
  const idx = feature.followerIds.indexOf(followerId);
  if (idx >= 0) {
    feature.followerIds.splice(idx, 1);
    feature.followerCount = Math.max(0, (feature.followerCount || 0) - 1);
  } else {
    feature.followerIds.push(followerId);
    feature.followerCount = (feature.followerCount || 0) + 1;
  }
  feature.updatedAt = new Date().toISOString();
  writeFeatures(features);
  return feature;
}