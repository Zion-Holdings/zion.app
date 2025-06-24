import React from 'react';
import type { GetServerSideProps } from 'next';
import SearchTabs from '@/components/search/SearchTabs';
import { MARKETPLACE_LISTINGS } from '@/data/listingData';
import { TALENT_PROFILES } from '@/data/talentData';
import { BLOG_POSTS } from '@/data/blog-posts';
import { DOCS_SEARCH_ITEMS } from '@/data/docsSearchData';
import type { ProductListing } from '@/types/listings';
import type { TalentProfile } from '@/types/talent';
import type { BlogPost } from '@/types/blog';

interface SearchPageProps {
  products: ProductListing[];
  talent: TalentProfile[];
  posts: BlogPost[];
  docs: typeof DOCS_SEARCH_ITEMS;
  q: string;
}

export const getServerSideProps: GetServerSideProps<SearchPageProps> = async ({ query }: { query: { q?: string } }) => {
  const term = String(query.q ?? '').toLowerCase();
  console.log('🔍 Search page getServerSideProps called with query:', { q: query.q, term });
  
  const match = (text?: string) => text?.toLowerCase().includes(term);

  const [products, talent, posts, docs] = await Promise.all([
    Promise.resolve(MARKETPLACE_LISTINGS.filter(p => match(p.title) || match(p.description))),
    Promise.resolve(TALENT_PROFILES.filter(t => match(t.full_name) || match(t.professional_title) || match(t.bio))),
    Promise.resolve(BLOG_POSTS.filter(p => match(p.title) || match(p.excerpt) || match(p.content))),
    Promise.resolve(DOCS_SEARCH_ITEMS.filter(d => match(d.text)))
  ]);

  console.log('🔍 Search results:', { 
    term, 
    products: products.length, 
    talent: talent.length, 
    posts: posts.length, 
    docs: docs.length 
  });

  return { props: { products, talent, posts, docs, q: term } };
};

const SearchPage = ({ products, talent, posts, docs, q }: SearchPageProps) => {
  console.log('🔍 SearchPage component rendered with:', { q, counts: { products: products.length, talent: talent.length, posts: posts.length, docs: docs.length } });
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Search Results for "{q}"</h1>
        <p className="text-gray-600">
          Found {products.length + talent.length + posts.length + docs.length} results
        </p>
      </div>
      <SearchTabs products={products} talent={talent} posts={posts} docs={docs} query={q} />
    </div>
  );
};

export default SearchPage;
