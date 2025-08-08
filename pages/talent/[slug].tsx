import React, { useEffect, useState } from 'react';
import type { NextPage, GetServerSideProps } from 'next';
import { TALENT_PROFILES, TalentProfile } from '../../data/talent';
import ReviewSummary from '../../components/reviews/ReviewSummary';
import ReviewCard from '../../components/reviews/ReviewCard';
import type { PublicReview, ReviewsSummary } from '../../types/reviews';

type Props = {
  talent: TalentProfile | null;
};

const TalentProfilePage: NextPage<Props> = ({ talent }) => {
  const [summary, setSummary] = useState<ReviewsSummary | null>(null);
  const [reviews, setReviews] = useState<PublicReview[]>([]);

  useEffect(() => {
    if (!talent) return;
    (async () => {
      const res = await fetch(`/api/reviews/list?targetType=talent&targetId=${talent.slug}`);
      const data = await res.json();
      if (res.ok) {
        setSummary(data.summary);
        setReviews(data.reviews);
      }
    })();
  }, [talent]);

  if (!talent) {
    return (
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-semibold">Talent not found</h1>
      </main>
    );
  }

  async function handleReport(id: string) {
    await fetch('/api/reviews/report', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reviewId: id, reason: 'Inappropriate content' }),
    });
  }

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-6">
      <header className="enhanced-card">
        <h1 className="text-3xl font-bold">{talent.name}</h1>
        <p className="text-gray-600">{talent.title} • {talent.location}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {talent.skills.map((s) => (
            <span key={s} className="pill">{s}</span>
          ))}
        </div>
      </header>

      {summary && <ReviewSummary summary={summary} />}

      <section className="grid gap-4">
        {reviews.map((r) => (
          <ReviewCard key={r.id} review={r} onReport={handleReport} />)
        )}
        {!reviews.length && (
          <div className="enhanced-card">No public reviews yet.</div>
        )}
      </section>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.query as { slug: string };
  const talent = TALENT_PROFILES.find((t) => t.slug === slug) || null;
  return { props: { talent } };
};

export default TalentProfilePage;