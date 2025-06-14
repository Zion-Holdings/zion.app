import type { GetServerSideProps } from 'next';
import type { ProductListing } from '@/types/listings';
import type { TalentProfile } from '@/types/talent';
import type { BlogPost } from '@/types/blog';
interface SearchPageProps {
    products: ProductListing[];
    talent: TalentProfile[];
    posts: BlogPost[];
    q: string;
}
export declare const getServerSideProps: GetServerSideProps<SearchPageProps>;
declare const SearchPage: ({ products, talent, posts, q }: SearchPageProps) => import("react/jsx-runtime").JSX.Element;
export default SearchPage;
