import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const apidevelopmentchat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Api Development Chat - Zion Tech Solutions</title>
        <meta name="description" content="Api Development Chat service" />
      </Head>

      <main>
        <h1>ApiDevelopmentChat</h1>
        <p>Service details coming soon...</p>
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  );
};

export default apidevelopmentchat;
