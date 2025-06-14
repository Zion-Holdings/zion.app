import { jsx as _jsx } from "react/jsx-runtime";
import SearchTabs from '@/components/search/SearchTabs';
import { MARKETPLACE_LISTINGS } from '@/data/listingData';
import { TALENT_PROFILES } from '@/data/talentData';
import { BLOG_POSTS } from '@/data/blog-posts';
export const getServerSideProps = async ({ query }) => {
    const term = String(query.q ?? '').toLowerCase();
    const match = (text) => text?.toLowerCase().includes(term);
    const [products, talent, posts] = await Promise.all([
        Promise.resolve(MARKETPLACE_LISTINGS.filter(p => match(p.title) || match(p.description))),
        Promise.resolve(TALENT_PROFILES.filter(t => match(t.full_name) || match(t.professional_title) || match(t.bio))),
        Promise.resolve(BLOG_POSTS.filter(p => match(p.title) || match(p.excerpt) || match(p.content)))
    ]);
    return { props: { products, talent, posts, q: term } };
};
const SearchPage = ({ products, talent, posts, q }) => {
    return (_jsx("div", { className: "container mx-auto px-4 py-8", children: _jsx(SearchTabs, { products: products, talent: talent, posts: posts, query: q }) }));
};
export default SearchPage;
