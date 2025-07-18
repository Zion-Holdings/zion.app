import React from 'react';
import { logWarn } from '@/utils/productionLogger';


interface StaticPropsExamplePageProps {
  _data: unknown[];
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
  const API_URL = process.env.EXAMPLE_API_URL;

  if (!API_URL) {
    logWarn("EXAMPLE_API_URL not defined. Cannot fetch data for static-props-example page.");
    return { 
      props: { data: [] },
      revalidate: 3600 // Revalidate every hour when deployed
    };
  }

  try {
    const res = await fetch(API_URL, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Zion-App-SSR'
      }
    });

    if (!res.ok) {
      logWarn(`API fetch failed with status ${res.status}, data will be empty.`);
      return { 
        props: { data: [] },
        revalidate: 300 // Try again in 5 minutes
      };
    }

    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      logWarn(`Expected JSON but got ${contentType}, data will be empty.`);
      return { 
        props: { data: [] },
        revalidate: 300
      };
    }

    const data = await res.json();
    
    // Validate data structure
    if (!Array.isArray(data)) {
      logWarn("API returned invalid data structure, data will be empty.");
      return { 
        props: { data: [] },
        revalidate: 300
      };
    }

    return { 
      props: { data },
      revalidate: 3600 // Revalidate every hour
    };
  } catch (error: unknown) {
    // Gracefully handle all errors by falling back to mock data
    logWarn('API fetch error, data will be empty:', { data:  { data: error instanceof Error ? error.message : String(error) } });
    return { 
      props: { data: [] },
      revalidate: 300 // Retry in 5 minutes
    };
  }
}

export default StaticPropsExamplePage;
