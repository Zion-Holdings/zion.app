import type { NextPage } from 'next';
import Layout from '../components/Layout';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import ContactForm from '../components/forms/ContactForm';

  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <ContactForm />
    </Layout>
  );
}
