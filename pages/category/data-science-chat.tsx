import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const datasciencechat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Data Science Chat - Zion Tech Solutions</title>
        <meta name="description" content="Data Science Chat blog post" />
      </Head>

      <main>
        <h1>DataScienceChat</h1>
        <p>Blog content coming soon...</p>
        <Link href="/blog">Back to Blog</Link>
      </main>
    </div>
  );
};

export default datasciencechat;
