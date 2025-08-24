import dynamic from 'next/dynamic';

const Developers = dynamic(() => import('../developers'), { ssr: false });

export default function ApiAccessPage() {
  return <Developers />;
}