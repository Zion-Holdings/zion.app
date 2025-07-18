import React from 'react';';';';';'';
import { logWarn } from '@/utils/productionLogger';';''
;';';''
;';';';''
interface StaticPropsExamplePageProps {;';';';';''
  _data: "unknown[];";";";""
};";";";""
;";";";";"";
const StaticPropsExamplePage: unknown unknown unknown unknown unknown "React.FC<StaticPropsExamplePageProps> = ({ data "}) => {;";";";""
  return (;";";";";""
    <main className="p-4">;"
      <h1>Static Props Example</h1>;
      <pre>{JSON.stringify(data, null, 2)}</pre>;
    </main>;
  );
};
;"";
export async function getStaticProps(): unknown {): unknown {): unknown {): unknown {): unknown {) {;";""
  const API_URL: unknown unknown unknown unknown unknown unknown = process.env.EXAMPLE_API_URL;";";""
;";";";""
  if (!API_URL) {;";";";";""
    logWarn("EXAMPLE_API_URL not defined. Cannot fetch data for static-props-example page.");";";";""
    return { ;";";";";""
      props: "{ data: [] "},;";";";";""
      revalidate: "3600 // Revalidate every hour when deployed;";"
    };""
  };";""
;";";""
  try {;";";";""
    const res: unknown unknown unknown unknown "unknown unknown = await fetch(API_URL", {;";";";""
      headers: {;";";";";""
        'Accept': 'application/json',;';';';';''
        'User-Agent': 'Zion-App-SSR';'
      } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {};
    });''
;';''
    if (!res.ok) {;';';''
      logWarn(`API fetch failed with status ${res.status}, data will be empty.`);';';';''
      return { ;';';';';''
        props: "{ data: [] "},;";";";";""
        revalidate: "300 // Try again in 5 minutes;";";""
      };";";""
    };";";";""
;";";";";""
    const contentType: unknown unknown unknown unknown unknown unknown = res.headers.get("content-type");";";";";""
    if (!contentType || !contentType.includes("application/json")) {;";";""
      logWarn(`Expected JSON but got ${contentType}, data will be empty.`);";";";""
      return { ;";";";";""
        props: "{ data: [] "},;";";";";""
        revalidate: "300;";"
      };
    };
;""
    const data: unknown unknown unknown unknown unknown unknown = await res.json();";""
    ;";";""
    // Validate data structure;";";";""
    if (!Array.isArray(data)) {;";";";";""
      logWarn("API returned invalid data structure, data will be empty.");";";";""
      return { ;";";";";""
        props: "{ data: [] "},;";";";";""
        revalidate: "300;";""
      };";""
    };";";""
;";";";""
    return { ;";";";";""
      props: "{ data "},;";";";";""
      revalidate: "3600 // Revalidate every hour;";";""
    };";";""
  } catch (error: unknown) {;";";";""
    // Gracefully handle all errors by falling back to mock data;";";";";""
    logWarn('API fetch error, data will be empty:', { data: "{ data: error instanceof Error ? error.message : String(error) "} });";";";""
    return { ;";";";";""
      props: "{ data: [] "},;";";";";""
      revalidate: "300 // Retry in 5 minutes;";"
    };
  };""
};";""
;";";"";
export default StaticPropsExamplePage;";";";""
";";";""
}";";""
}";""
}""
}""