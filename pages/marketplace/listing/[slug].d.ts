import type { GetServerSideProps } from 'next';
import type { ProductListing } from '@/types/listings';
interface ListingPageProps {
    listing: ProductListing | null;
}
declare const ListingPage: React.FC<ListingPageProps>;
export declare const getServerSideProps: GetServerSideProps<ListingPageProps>;
export default ListingPage;
