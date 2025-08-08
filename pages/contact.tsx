import type { NextPage } from 'next';
import Head from 'next/head';
import { siteInfo } from '../data/site-info';

const Contact: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Contact - Zion Tech Solutions</title>
        <meta name="description" content="Contact page" />
      </Head>
      
      <main>
        <h1>Contact</h1>
        <div>
          <p>
            Email: <a href={`mailto:${siteInfo.contact.email}`}>{siteInfo.contact.email}</a>
          </p>
          <p>
            Phone: <a href={`tel:${siteInfo.contact.phone.replace(/\s+/g, '')}`}>{siteInfo.contact.phone}</a>
          </p>
          <p>
            Address: {siteInfo.contact.address}
          </p>
        </div>
      </main>
    </div>
  );
};

export default Contact;