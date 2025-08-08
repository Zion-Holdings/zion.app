import type { NextPage } from 'next';
import Link from 'next/link';
import Seo from '../../components/seo/Seo';

const Index: NextPage = () => {
  return (
    <div>
      <Seo title="Blog" description="Insights on AI, DevOps, and engineering from Zion." openGraph={{ title: 'Blog', description: 'Insights on AI, DevOps, and engineering from Zion.' }} />
      <main>
        <h1>Blog</h1>
        <p>Blog content coming soon...</p>
        <Link href="/blog">Back to Blog</Link>
      </main>
    </div>
  );
};

export default Index;