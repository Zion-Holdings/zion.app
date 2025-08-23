import Categories, { CategoriesProps } from '@/pages/Categories';
import type { GetStaticProps } from 'next';
import { CATEGORIES } from '@/data/categories'; // Import CATEGORIES
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';

export const getStaticProps: GetStaticProps<CategoriesProps> = async () => {

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const isBuildTime = process.env.NETLIFY || process.env.NODE_ENV === 'production' && !process.env.RUNTIME_ENVIRONMENT;
  
  // During build time, skip API fetch and use static data
  if (isBuildTime || appUrl.includes('localhost')) {
    logInfo('Build time detected, using static categories data.');
    return { props: { categories: CATEGORIES } };
  }

  logInfo(`Fetching categories from: ${appUrl}/api/categories`);

  try {
    const res = await fetch(`${appUrl}/api/categories`);
    logInfo(`API response status: ${res.status}`);
    const rawResponse = await res.text();
    logInfo(`API raw response: ${rawResponse}`);

    if (res.ok) {
      const fetchedCategories = JSON.parse(rawResponse);
      if (fetchedCategories && fetchedCategories.length > 0) {
        logInfo('Successfully fetched categories from API.');
        return { props: { categories: fetchedCategories } };
      } else {
        logInfo('API returned empty or invalid categories, falling back to default.');
        return { props: { categories: CATEGORIES } };
      }
    } else {
      logInfo(`API request failed with status ${res.status}, falling back to default categories.`);
      return { props: { categories: CATEGORIES } };
    }
  } catch (error) {
    logErrorToProduction('Error fetching categories in getStaticProps, falling back to default. Error:', { data: error });
    return { props: { categories: CATEGORIES } };
  }
};

export default Categories;
