import dynamic from 'next/dynamic';

const ExpoPage = dynamic(() => import('../../components/expo/ExpoPage'), { ssr: false });

export default function GlobalEventRoute() {
  return

export default function GlobalPage() {
  return (
    <ExpoPage />;
}

  );
}