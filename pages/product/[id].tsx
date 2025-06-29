import type { GetServerSideProps } from 'next';
import AdvancedSEO from '@/components/seo/AdvancedSEO';
import Head from 'next/head';
import Link from 'next/link';
import type { ProductDetailsData } from '../../src/types/product';

// Define props type for the page component based on getServerSideProps return
type ProductPageProps = {
  product: ProductDetailsData | null;
};

const ProductDetailPage = ({ product }: ProductPageProps) => {
  if (!product) {
    return (
      <div>
        <Head>
          <title>Product Not Found</title>
        </Head>
        <main>
          <p>Product not found. Please try again or check the URL.</p>
          <Link href="/">Go back to homepage</Link>
        </main>
      </div>
    );
  }

  return (
    <>
      <AdvancedSEO
        title={product.name}
        description={product.description || `Details for ${product.name}`}
        type="product"
        image={product.images ? product.images[0]?.url : undefined}
        product={{
          price: product.price || undefined,
          currency: product.currency || undefined,
          availability: 'in_stock',
          sku: product.id,
        }}
      />

      <nav style={{ padding: '1rem' }}>
        <Link href="/">Home</Link> /<Link href="/marketplace">Marketplace</Link>{' '}
        /<span>{product.name}</span>
      </nav>

      <main style={{ padding: '1rem' }}>
        <h1>{product.name}</h1>

        {product.price !== null && product.currency && (
          <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
            Price: {product.currency} {product.price}
          </p>
        )}

        {product.description && (
          <section style={{ marginBlock: '1rem' }}>
            <h2>Description</h2>
            <p>{product.description}</p>
          </section>
        )}

        {product.category && <p>Category: {product.category}</p>}
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<
  ProductPageProps
> = async (context: { params?: { id?: string } }) => {
  const id = context.params?.id;

  if (typeof id !== 'string') {
    return { notFound: true };
  }

  // Return a basic product structure to avoid API calls during build
  return {
    props: {
      product: {
        id: id,
        name: 'Product',
        title: 'Product',
        description: 'Product description',
        price: 0,
        currency: 'USD',
        category: 'general',
        tags: [],
        images: null,
        averageRating: null,
        reviewCount: 0,
        specifications: null,
        priceTiers: null,
      },
    },
  };
};

export default ProductDetailPage;
