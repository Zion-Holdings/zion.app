import type { NextPage } from 'next';
import Layout from '../components/Layout';
import ContactForm from '../components/forms/ContactForm';

const Contact: NextPage = () => {
  return (
    <Layout
      title="Contact Us - Zion Tech Group"
      description="Get in touch with Zion Tech Group. Our team is ready to discuss your technology needs and help transform your business."
    >
      <ContactForm />
    </Layout>
  );
};

export default Contact;