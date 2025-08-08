import type { NextApiRequest, NextApiResponse } from 'next';
import { readFeatures, writeFeatures } from '../../../utils/roadmap-store';
import { SuggestionInput, Feature } from '../../../types/roadmap';
import { v4 as uuidv4 } from 'uuid';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  const body = req.body as SuggestionInput;
  if (!body || !body.title) {
    return res.status(400).json({ error: 'title is required' });
  }
  const now = new Date().toISOString();
  const slug = body.title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
  const newFeature: Feature = {
    id: `feat-${uuidv4()}`,
    slug,
    title: body.title,
    description: body.description,
    etaQuarter: body.etaQuarter,
    tags: body.tags || [],
    status: 'Queue',
    upvotesWeighted: 0,
    upvoteCount: 0,
    followerCount: 0,
    commentsCount: 0,
    previewImageUrl: undefined,
    previewEmbedUrl: undefined,
    links: body.links || [],
    createdAt: now,
    updatedAt: now,
    voterIds: [],
    followerIds: [],
  };
  const list = readFeatures();
  list.push(newFeature);
  writeFeatures(list);
  return res.status(201).json(newFeature);
}