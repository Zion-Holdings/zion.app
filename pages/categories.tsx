import Categories, { CategoriesProps } from '@/pages/Categories';
import type { GetStaticProps } from 'next';
import { CATEGORIES } from '@/data/categories'; // Import CATEGORIES

export const getStaticProps: GetStaticProps<CategoriesProps> = async () => {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  console.log(`Fetching categories from: ${appUrl}/api/categories`);

  try {
    const res = await fetch(`${appUrl}/api/categories`);
    console.log(`API response status: ${res.status}`);
    const rawResponse = await res.text();
    console.log(`API raw response: ${rawResponse}`);

    if (res.ok) {
      const fetchedCategories = JSON.parse(rawResponse);
      if (fetchedCategories && fetchedCategories.length > 0) {
        console.log('Successfully fetched categories from API.');
        return { props: { categories: fetchedCategories } };
      } else {
        console.log('API returned empty or invalid categories, falling back to default.');
        return { props: { categories: CATEGORIES } };
      }
    } else {
      console.log(`API request failed with status ${res.status}, falling back to default categories.`);
      return { props: { categories: CATEGORIES } };
    }
  } catch (error) {
    console.error('Error fetching categories in getStaticProps, falling back to default. Error:', error);
    return { props: { categories: CATEGORIES } };
  }
};

export default Categories;
