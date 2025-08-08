import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { readSolutionsIndex, type SolutionSummary } from '../../utils/marketplace';

interface Props { solutions: SolutionSummary[] }

const ProductsIndex: NextPage<Props> = ({ solutions }) => {
  return (
    <div>
      <Head>
        <title>AI Solutions Marketplace - Zion</title>
        <meta name="description" content="Curated, continually-updated AI solution blueprints" />
      </Head>
      <main style={{ maxWidth: 1100, margin: '0 auto', padding: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>AI Solutions Marketplace</h1>
        <p style={{ color: '#555', marginBottom: '2rem' }}>Continuously researched and updated based on the latest AI trends and tools.</p>
        {solutions.length === 0 ? (
          <p>No solutions published yet. Please check back soon.</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
            {solutions.map(s => (
              <div key={s.slug} style={{ border: '1px solid #eee', borderRadius: 8, padding: '1rem', background: '#fff' }}>
                <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 8 }}>{s.title}</h2>
                <p style={{ fontSize: 14, color: '#444', minHeight: 64 }}>{s.summary}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
                  <span style={{ color: '#111', fontWeight: 600 }}>
                    {typeof s.priceUSD === 'number' ? `$${s.priceUSD.toLocaleString()}` : 'Contact for pricing'}
                  </span>
                  <Link href={`/products/${s.slug}`}>Learn more →</Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const solutions = readSolutionsIndex().filter(s => (s.status || 'draft') !== 'draft');
  return { props: { solutions } };
};

export default ProductsIndex;