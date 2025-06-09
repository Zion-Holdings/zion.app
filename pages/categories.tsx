import Categories, { CategoriesProps } from '../src/pages/Categories';
// import type { GetServerSideProps } from 'next'; // No longer needed for getStaticProps if CategoriesProps is defined elsewhere or not used by getStaticProps
import type { GetStaticProps } from 'next'; // Added import

// export const getServerSideProps: GetServerSideProps<CategoriesProps> = async () => {
//   const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
//   try {
//     const res = await fetch(`${appUrl}/api/services`);
//     const categories = res.ok ? await res.json() : [];
//     return { props: { categories } };
//   } catch {
//     return { props: { categories: [] } };
//   }
// };

export const getStaticProps: GetStaticProps<CategoriesProps> = async () => {
  // You can fetch data here if needed for static generation
  // For now, returning empty props as a placeholder
  // In a real app, you might fetch this from a CMS or local data source
  // const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  // try {
  //   const res = await fetch(`${appUrl}/api/services`); // This won't work directly in getStaticProps if /api/services is part of the same app being built
  //   const categories = res.ok ? await res.json() : [];
  //   return { props: { categories } };
  // } catch {
  //   return { props: { categories: [] } };
  // }
  return {
    props: { categories: [] }, // Ensure CategoriesProps is compatible or adjust
  };
}

export default Categories;
