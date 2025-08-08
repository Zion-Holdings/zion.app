import dynamic from 'next/dynamic';
const BookBuilder = dynamic(() => import('../components/book/BookBuilder'), { ssr: false });

export default function BookBuilderPage() {
  return <BookBuilder />;
}