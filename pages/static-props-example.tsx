import React from 'react';
import { logInfo, logWarn } from '@/utils/productionLogger';


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
  const API_URL = process.env.EXAMPLE_API_URL;

  // Provide mock data for build time when API is not available
  const mockData = [
    { id: 1, name: 'Example Item 1', description: 'This is a mock item for build-time static generation' },
    { id: 2, name: 'Example Item 2', description: 'Another mock item showing static props functionality' },
    { id: 3, name: 'Example Item 3', description: 'Final mock item demonstrating the feature' }
  ];

  // If no API URL is configured, use mock data (common during build)
  if (!API_URL) {
    logInfo("EXAMPLE_API_URL not defined. Using mock data for static-props-example page.");
    return { 
      props: { data: mockData },
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
      logWarn(`API fetch failed with status ${res.status}, using mock data`);
      return { 
        props: { data: mockData },
        revalidate: 300 // Try again in 5 minutes
      };
    }

    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      logWarn(`Expected JSON but got ${contentType}, using mock data`);
      return { 
        props: { data: mockData },
        revalidate: 300
      };
    }

    const data = await res.json();
    
    // Validate data structure
    if (!Array.isArray(data)) {
      logWarn("API returned invalid data structure, using mock data");
      return { 
        props: { data: mockData },
        revalidate: 300
      };
    }

    return { 
      props: { data },
      revalidate: 3600 // Revalidate every hour
    };
  } catch (error: any) {
    // Gracefully handle all errors by falling back to mock data
    logWarn('API fetch error, using mock data:', { data: error?.message || error });
    return { 
      props: { data: mockData },
      revalidate: 300 // Retry in 5 minutes
    };
  }
}

export default StaticPropsExamplePage;
