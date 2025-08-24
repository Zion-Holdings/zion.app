import type { NextApiRequest, NextApiResponse } from 'next';
import { readReviews, readProjects } from '../../../utils/dataStore';
import type { PublicReview, ReviewsSummary } from '../../../types/reviews';
import { TALENT_PROFILES } from '../../../data/talent';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { targetType, targetId } = req.query as { targetType?: string; targetId?: string };

    if (!targetType || !targetId) {
      return res.status(400).json({ error: 'Missing targetType or targetId' });
    }
    if (targetType !== 'talent' && targetType !== 'client') {
      return res.status(400).json({ error: 'Invalid targetType' });
    }

    const all = await readReviews();

    // Include reviews where both sides have submitted and both are approved and not removed
    const filtered = all.filter((r) => {
      if (r.removed || !r.approved) return false;
      const matchesTarget = r.toRole === (targetType as 'talent' | 'client') && r.toId === targetId;
      if (!matchesTarget) return false;
      const counterpartExists = all.some(
        (x) =>
          x.projectId === r.projectId &&
          x.fromRole !== r.fromRole &&
          x.toRole !== r.toRole &&
          x.approved &&
          !x.removed,
      );
      return counterpartExists;
    });

    // Map to public reviews (mask anonymous author)
    const publicReviews: PublicReview[] = filtered
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .map((r) => {
        let authorName = r.fromId;
        if (r.fromRole === 'talent') {
          const t = TALENT_PROFILES.find((tp) => tp.slug === r.fromId);
          authorName = t ? t.name : r.fromId;
        }
        if (r.anonymous) authorName = 'Anonymous';
        return {
          ...r,
          authorName,
        };
      });

    const totalReviews = publicReviews.length;
    const averageRating = totalReviews
      ? Math.round((publicReviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews) * 10) / 10
      : 0;

    const projects = await readProjects();
    const totalCompletedProjects = projects.filter((p) => p.status === 'Completed' && (
      (targetType === 'talent' && p.talentSlug === targetId) ||
      (targetType === 'client' && p.clientId === targetId)
    )).length;

    const summary: ReviewsSummary = {
      averageRating,
      totalReviews,
      totalCompletedProjects,
      mostRecent: publicReviews.slice(0, 5),
    };

    return res.status(200).json({ summary, reviews: publicReviews });
  } catch (error: any) {
    return res.status(500).json({ error: 'Internal server error', details: error?.message });
  }
}