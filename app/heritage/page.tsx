export const metadata = {
  title: 'YouTube heritage 2009–2019 — Zion Tech Group',
  description:
    '11 videos, 5,888 views on @ziontechgroup. UPS, Dell storage, green IT. Heritage proof, not the AI CTA.',
  alternates: { canonical: 'https://ziontechgroup.com/heritage/' },
};

const VIDEOS = [
  ['2019', 'BQdat3RgpfM', 'O que é No break'],
  ['2017', 'J8AzyseAsxU', 'Dell Servers and Storage Support'],
  ['2017', 'rXrqalQDCJI', 'Dell Servers and Storage Maintenance'],
  ['2017', 'LFvH8PK78Uo', 'High Capacity Dell Storage Arrays'],
  ['2013', 'V8UoA69Xp78', 'ZionTechGroup'],
  ['2010', '37e_RiwnDUk', 'Soluções em TI'],
  ['2010', 'TmLpE58oRp4', 'Video sobre o iPad Apple'],
  ['2009', '4xjyVDUQENc', 'Consultoria em TI Verde'],
  ['2009', 'ZOQ9q_qcisY', 'HP Touchsmart'],
  ['2009', 'GGUXiUG9HLM', 'Segurança da Informação'],
  ['2009', 'aGs_XmT5QMs', 'Zion Technologies Brasil'],
];

export default function Page() {
  return (
    <main style={{ maxWidth: 880, margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: 34, fontWeight: 800, color: '#fff' }}>YouTube heritage, not the AI CTA</h1>
      <p style={{ color: '#cbd5e1', lineHeight: 1.7 }}>
        @ziontechgroup · 11 videos · 5,888 views · 13 subscribers. Listed via Composio YouTube
        (channelId UCKrJNz3OqQ6Im9bQbJko7Ug). Do not publish from Surf Family OAuth.
      </p>
      <ul style={{ color: '#cbd5e1', lineHeight: 1.9 }}>
        {VIDEOS.map(([year, id, title]) => (
          <li key={id}>
            {year} — <a href={`https://www.youtube.com/watch?v=${id}`} style={{ color: '#a78bfa' }}>{title}</a>
          </li>
        ))}
      </ul>
      <p style={{ marginTop: 20 }}>
        <a href="/book/" style={{ color: '#a78bfa' }}>Book Discovery</a>
        {' · '}
        <a href="/about/" style={{ color: '#a78bfa' }}>About</a>
      </p>
    </main>
  );
}
