import type { NextPage } from 'next';
import Head from 'next/head';
import FuturisticHero from '../components/ui/FuturisticHero';
import FeatureGrid from '../components/ui/FeatureGrid';
import ServicesGrid from '../components/ui/ServicesGrid';
import AutomationShowcase from '../components/ui/AutomationShowcase';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Zion AI Marketplace – Hire, Collaborate, Deliver</title>
        <meta name="description" content="Zion Tech Group – AI marketplace for talent and services. Schedule interviews, manage projects, and deliver outcomes." />
      </Head>
      <div className="space-y-6">
        <FuturisticHero />
        <FeatureGrid />
        <ServicesGrid />
        <AutomationShowcase />
      </div>
    </>
  );
};

export default Home;
