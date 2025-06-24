import { Header } from '@/components/Header';
import { NextSeo } from '@/components/NextSeo';

interface Proposal {
  id: number;
  title: string;
  institution: string;
  status: 'Draft' | 'Submitted' | 'Under Review' | 'Accepted';
  region: string;
}

const SAMPLE_PROPOSALS: Proposal[] = [
  {
    id: 1,
    title: 'Digital Labor Initiative',
    institution: 'UN Development Program',
    status: 'Submitted',
    region: 'Global',
  },
];

export default function InternationalProposalsPage() {
  return (
    <div className="min-h-screen bg-background">
      <NextSeo title="International Proposals" description="Transparency for global outreach" />
      <Header />
      <main className="container mx-auto py-8 space-y-6">
        <h1 className="text-3xl font-bold">International Proposals</h1>
        <table className="w-full text-left border">
          <thead>
            <tr className="border-b">
              <th className="p-2">Title</th>
              <th className="p-2">Institution</th>
              <th className="p-2">Region</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {SAMPLE_PROPOSALS.map((p) => (
              <tr key={p.id} className="border-b">
                <td className="p-2">{p.title}</td>
                <td className="p-2">{p.institution}</td>
                <td className="p-2">{p.region}</td>
                <td className="p-2">{p.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-sm text-muted-foreground">
          Community commentary is open per region.
        </p>
      </main>
    </div>
  );
}
