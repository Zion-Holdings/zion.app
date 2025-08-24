import { useEffect, useState } from 'react';
import DashboardLayout from '../../components/layout/Layout';
import EnhancedCard from '../../components/ui/EnhancedCard';
import type { AnalysisResult } from '../api/admin/analyze-feedback';
import type { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const cookie = req.headers.cookie || '';
  const role = cookie.split(';').map(s => s.trim()).find(s => s.startsWith('zion_role='))?.split('=')[1];
  if (role !== 'superadmin') return { redirect: { destination: '/unauthorized', permanent: false } };
  return { props: {} };
};

export default function FeedbackInsightsAdminPage() {
  const [report, setReport] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetch('/api/admin/latest-feedback-report').then(r => r.json()).then(setReport).catch(() => setReport(null));
  }, []);

  async function runAnalysis() {
    setLoading(true);
    try {
      // Placeholder: Real data would come from your DB/logs
      const items = [
        { timestamp: new Date().toISOString(), feature: 'chatbot', stars: 5, comment: 'Loves the faster replies!' },
        { timestamp: new Date().toISOString(), feature: 'rentals', stars: 2, comment: 'Checkout kept failing on mobile.' },
        { timestamp: new Date().toISOString(), feature: 'jobs', stars: 3, comment: 'Job alerts are noisy; want filters' },
        { timestamp: new Date().toISOString(), feature: 'dashboard', stars: 1, comment: 'Charts not loading in Safari' },
      ];
      const res = await fetch('/api/admin/analyze-feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      });
      const json = await res.json();
      setReport(json);
    } finally {
      setLoading(false);
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Feedback Insights</h1>
          <button onClick={runAnalysis} disabled={loading} className="px-4 py-2 rounded bg-gray-900 text-white disabled:opacity-60">
            {loading ? 'Analyzing…' : 'Run Weekly Analysis'}
          </button>
        </div>

        <section>
          <EnhancedCard title="Top Insights">
            {!report || (report.topInsights || []).length === 0 ? (
              <div className="text-gray-500">No insights yet.</div>
            ) : (
              <ul className="list-disc pl-5 space-y-1">
                {report.topInsights.map((i, idx) => (
                  <li key={idx}>{i}</li>
                ))}
              </ul>
            )}
          </EnhancedCard>
        </section>

        <section>
          <EnhancedCard title="Improvement Backlog">
            {!report || (report.improvementBacklog || []).length === 0 ? (
              <div className="text-gray-500">No backlog yet.</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="text-left">
                      <th className="py-2 pr-4">Priority</th>
                      <th className="py-2 pr-4">Title</th>
                      <th className="py-2 pr-4">Area</th>
                      <th className="py-2 pr-4">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {report.improvementBacklog.map((item, idx) => (
                      <tr key={idx} className="border-t border-gray-200 dark:border-gray-800 align-top">
                        <td className="py-2 pr-4 font-medium">{item.priority}</td>
                        <td className="py-2 pr-4">{item.title}</td>
                        <td className="py-2 pr-4">{item.area}</td>
                        <td className="py-2 pr-4 text-gray-600 dark:text-gray-400">{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </EnhancedCard>
        </section>

        <section>
          <EnhancedCard title="By Feature Area">
            {!report || !report.groupedByFeature || Object.keys(report.groupedByFeature).length === 0 ? (
              <div className="text-gray-500">No feature breakdown yet.</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(report.groupedByFeature).map(([area, data]) => (
                  <div key={area} className="rounded border border-gray-200 dark:border-gray-800 p-3">
                    <div className="font-medium mb-2">{area}</div>
                    <div className="text-xs text-gray-500">Sentiment</div>
                    <div className="text-sm">+{data.sentiment.positive} / ~{data.sentiment.neutral} / -{data.sentiment.negative}</div>
                    <div className="mt-2 text-xs text-gray-500">Top Bugs</div>
                    <ul className="list-disc pl-4 text-sm space-y-1">
                      {data.topBugs.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                    <div className="mt-2 text-xs text-gray-500">Top Requests</div>
                    <ul className="list-disc pl-4 text-sm space-y-1">
                      {data.topRequests.map((r, i) => <li key={i}>{r}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </EnhancedCard>
        </section>
      </div>
    </DashboardLayout>
  );
}