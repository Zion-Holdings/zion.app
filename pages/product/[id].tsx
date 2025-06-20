import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { fetchProductById } from '../../src/services/productService';
import type { ProductDetailsData } from '../../src/types/product';
// Import React if not implicitly available
// import React from 'react';

// Define props type for the page component based on getServerSideProps return
type ProductPageProps = {
  product: ProductDetailsData | null; // Allow null if product might not be found and handled in component
};

const ProductDetailPage = ({ product }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (!product) {
    // This case should ideally be handled by getServerSideProps returning notFound: true
    // but as a fallback:
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

  // Assuming product.images can be a string URL, or an array of objects with a URL, or an array of strings.
  // This is a simplified image handling logic.
  let imageUrl: string | undefined = undefined;
  if (product.images) {
    if (Array.isArray(product.images) && product.images.length > 0) {
      if (typeof product.images[0] === 'string') {
        imageUrl = product.images[0];
      } else if (typeof product.images[0] === 'object' && product.images[0] !== null && 'url' in product.images[0]) {
        imageUrl = (product.images[0] as { url: string }).url;
      }
    } else if (typeof product.images === 'string') {
      imageUrl = product.images;
    }
  }

  return (
    <>
      <Head>
        <title>{product.name} | Zion Store</title>
        <meta name="description" content={product.description || `Details for ${product.name}`} />
        <link rel="canonical" href={`/product/${product.id}`} />
      </Head>

      <nav style={{ padding: '1rem' }}> {/* Basic styling */}
        <Link href="/">Home</Link> /
        {/* Placeholder for a general products listing page */}
        <Link href="/marketplace">Marketplace</Link> /
        <span>{product.name}</span>
      </nav>

      <main style={{ padding: '1rem' }}>
        <h1>{product.name}</h1>

        {imageUrl && (
          <img
            src={imageUrl}
            alt={`Image of ${product.name}`}
            style={{ maxWidth: '400px', height: 'auto', marginBlock: '1rem' }}
          />
        )}

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

        {product.category && (
          <p>Category: {product.category}</p>
        )}

        {product.tags && product.tags.length > 0 && (
          <p>Tags: {product.tags.join(', ')}</p>
        )}

        <section style={{ marginBlock: '1rem' }}>
          <h2>Reviews</h2>
          <p>
            Average Rating: {product.averageRating ? product.averageRating.toFixed(1) + '/5' : 'Not yet rated'}
          </p>
          <p>({product.reviewCount} reviews)</p>
          {/* Detailed reviews could be listed here in a future iteration */}
        </section>

        <div style={{ marginTop: '2rem' }}>
          <button
            onClick={() => console.log('Add to cart:', product.id)}
            style={{ padding: '0.5rem 1rem', marginRight: '0.5rem' }}
          >
            Add to Cart
          </button>
          <button
            onClick={() => console.log('Add to wishlist:', product.id)}
            style={{ padding: '0.5rem 1rem' }}
          >
            Add to Wishlist
          </button>
        </div>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<ProductPageProps> = async (context) => {
  const { id } = context.params || {};

  if (typeof id !== 'string') {
    return { notFound: true };
  }

  try {
    const productData = await fetchProductById(id);

    if (!productData) {
      return { notFound: true };
    }

    // Ensure price is serializable (Prisma Decimal can be an object)
    // The ProductDetailsData type expects number|null, productService should handle conversion if API returns string/object.
    // If API returns Decimal object, it needs conversion here or in fetchProductById.
    // For now, assuming fetchProductById correctly returns serializable ProductDetailsData.

    return {
      props: {
        product: productData,
      },
    };
  } catch (error) {
    console.error(`Error fetching product ${id} in getServerSideProps:`, error);
    // Optionally, you could pass an error prop to the page
    // return { props: { product: null, error: 'Failed to load product data.' } };
    return { notFound: true }; // Or redirect to a generic error page
  }
};

export default ProductDetailPage;
