import type { GetServerSideProps } from 'next';
interface Props {
    session?: {
        id: string;
        amount_total?: number | null;
        currency?: string | null;
        customer_details?: {
            email?: string | null;
        } | null;
    } | null;
}
export declare const getServerSideProps: GetServerSideProps<Props>;
export default function OrderSuccess({ session }: Props): import("react/jsx-runtime").JSX.Element;
export {};
