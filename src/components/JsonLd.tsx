import React from 'react';
import Head from 'next/head';

interface JsonLdProps {
  data: Record<string, any>;
}

const JsonLd: React.FC<JsonLdProps> = ({ data }) => (
  <Head>
    <script type="application/ld+json">{JSON.stringify(data)}</script>
  </Head>
);

export default JsonLd;
