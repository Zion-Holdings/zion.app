import type { NextPage } from 'next';
import Link from 'next/link';
import Seo from '../../components/seo/Seo';

const ProductManagementChat: NextPage = () => {
  return (
    <div>
      <Seo title="Product Management" description="Product management strategy and insights by Zion." openGraph={{ title: 'Product Management', description: 'Product management strategy and insights by Zion.' }} />
      <main>
        <h1>ProductManagementChat</h1>
        <p>Blog content coming soon...</p>
        <Link href="/blog">Back to Blog</Link>
      </main>
    </div>
  );
};

export default ProductManagementChat;