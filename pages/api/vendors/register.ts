import type { NextApiRequest, NextApiResponse } from 'next';
import { getVendorBySlug, registerVendor } from '../../../utils/vendor-store';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { slug, name, servicesOffered, teamSize, about, verificationDocs, caseStudies } = req.body || {};
  if (!slug || !name) return res.status(400).json({ error: 'Missing required fields' });
  if (getVendorBySlug(slug)) return res.status(409).json({ error: 'Slug already taken' });
  try {
    const vendor = registerVendor({
      slug,
      name,
      servicesOffered: Array.isArray(servicesOffered) ? servicesOffered : [],
      teamSize: Number(teamSize || 0),
      about,
      verificationDocs: Array.isArray(verificationDocs) ? verificationDocs : [],
      caseStudies: Array.isArray(caseStudies) ? caseStudies : [],
    });
    res.status(201).json({ vendor });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
}