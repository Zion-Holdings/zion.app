import React from 'react';
import type { GetServerSideProps } from 'next';
import SearchTabs from '@/components/search/SearchTabs';
import { MARKETPLACE_LISTINGS } from '@/data/listingData';
import { TALENT_PROFILES } from '@/data/talentData';
import { BLOG_POSTS } from '@/data/blog-posts';
import type { ProductListing } from '@/types/listings';
import type { TalentProfile } from '@/types/talent';
import type { BlogPost } from '@/types/blog';

interface SearchPageProps {
  products: ProductListing[];
  talent: TalentProfile[];
  posts: BlogPost[];
  q: string;
}

export const getServerSideProps: GetServerSideProps<SearchPageProps> = async ({ query }: { query: { q?: string } }) => {
  const term = String(query.q ?? '').toLowerCase();
  const match = (text?: string) => text?.toLowerCase().includes(term);

  const [products, talent, posts] = await Promise.all([
    Promise.resolve(MARKETPLACE_LISTINGS.filter(p => match(p.title) || match(p.description))),
    Promise.resolve(TALENT_PROFILES.filter(t => match(t.full_name) || match(t.professional_title) || match(t.bio))),
    Promise.resolve(BLOG_POSTS.filter(p => match(p.title) || match(p.excerpt) || match(p.content)))
  ]);

  return { props: { products, talent, posts, q: term } };
};

const SearchPage = ({ products, talent, posts, q }: SearchPageProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <SearchTabs products={products} talent={talent} posts={posts} query={q} />
    </div>
  );
};

export default SearchPage;
