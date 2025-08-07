import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const mobiledevelopmentchat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mobile Development Chat - Zion Tech Solutions</title>
        <meta name="description" content="Mobile Development Chat blog post" />
      </Head>

      <main>
        <h1>MobileDevelopmentChat</h1>
        <p>Blog content coming soon...</p>
        <Link href="/blog">Back to Blog</Link>
      </main>
    </div>
  );
};

export default mobiledevelopmentchat;
