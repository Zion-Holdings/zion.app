import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Zion AI Marketplace</h1>
      <div className="flex flex-wrap gap-3 text-sm">
        <Link href="/resume/builder"><a className="underline">Resume Builder</a></Link>
        <Link href="/jobs/sample-job/apply"><a className="underline">Apply to Job (sample)</a></Link>
        <Link href="/admin"><a className="underline">Admin</a></Link>
        <Link href="/admin/applications"><a className="underline">Applications</a></Link>
      </div>
    </div>
  );
};

export default Home;