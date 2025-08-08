import type { NextApiRequest, NextApiResponse } from 'next';
import { readFeatures, findFeatureByIdOrSlug } from '../../../utils/roadmap-store';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  if (method === 'GET') {
    const { id } = req.query;
    if (typeof id === 'string' && id.length > 0) {
      const feature = findFeatureByIdOrSlug(id);
      if (!feature) return res.status(404).json({ error: 'Not found' });
      return res.status(200).json(feature);
    }
    const features = readFeatures();
    return res.status(200).json(features);
  }
  return res.status(405).json({ error: 'Method Not Allowed' });
}