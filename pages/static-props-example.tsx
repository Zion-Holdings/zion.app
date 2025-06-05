import React from 'react';

interface StaticPropsExamplePageProps {
  data: any[];
}

const StaticPropsExamplePage: React.FC<StaticPropsExamplePageProps> = ({ data }) => {
  return (
    <main className="p-4">
      <h1>Static Props Example</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
};

export async function getStaticProps() {
  try {
    const API_URL = process.env.EXAMPLE_API_URL;
    const res = await fetch(API_URL!);
    const data = await res.json();
    return { props: { data } };
  } catch (error) {
    console.error("SSR fetch error:", error);
    return { props: { data: [] } }; // prevent build-time failure
  }
}

export default StaticPropsExamplePage;
