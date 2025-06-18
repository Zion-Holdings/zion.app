import Categories, { CategoriesProps } from '@/pages/Categories';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps<CategoriesProps> = async () => {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  try {
    const res = await fetch(`${appUrl}/api/categories`); // Changed this line
    const categories = res.ok ? await res.json() : [];
    return { props: { categories } };
  } catch {
    return { props: { categories: [] } };
  }
};

export default Categories;
