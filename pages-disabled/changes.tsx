import React from 'react';
import Head from 'next/head';
import ChangesTab from '../components/layout/ChangesTab';

export default function ChangesPage() {
  return (
    <>
      <Head>
        <title>Repository Changes — Zion Tech Group</title>
        <meta name="description" content="View and manage your repository changes, Git status, and version control operations." />
        <meta property="og:title" content="Repository Changes — Zion Tech Group" />
        <meta property="og:description" content="View and manage your repository changes, Git status, and version control operations." />
      </Head>
      <ChangesTab />
    </>
  );
}
