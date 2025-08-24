import dynamic from 'next/dynamic';

const ApiDocsPage = dynamic(() => import('../../components/docs/ApiDocsPage'), { ssr: false });

export default function ZionStackApiRoute() {
  return <ApiDocsPage />;
}