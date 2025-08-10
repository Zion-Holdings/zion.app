import Head from 'next/head';
import Landing from '../components/Landing';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zion — Autonomous Cloud Automations</title>
        <meta name="description" content="Futuristic, cloud-native autonomous automations that innovate, optimize, and sync changes to the repo continuously." />
      </Head>
      <Landing />
    </>
  );
}