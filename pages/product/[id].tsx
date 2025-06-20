import type { GetServerSideProps } from 'next';
import type { ProductListing } from '@/types/listings';
import { MARKETPLACE_LISTINGS } from '@/data/marketplaceData';
import { SERVICES } from '@/data/servicesData';
import * as Sentry from '@sentry/nextjs';
import Head from 'next/head';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store';
import { addItem } from '@/store/cartSlice';
import { useRouter } from 'next/router';
import { ProductGallery } from '@/components/gallery/ProductGallery';
import ProductReviews from '@/components/ProductReviews';

interface ProductPageProps {
  product: ProductListing | null;
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  if (!product) {
    return (
      <div className="max-w-3xl mx-auto py-8 px-4">Product not found.</div>
    );
  }

  const canonicalUrl = `/product/${product.id}`;
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleAddToCart = () => {
    dispatch(
      addItem({
        id: product.id,
        title: product.title,
        price: product.price ?? 0,
      }),
    );
    router.push('/cart');
  };

  return (
    <>
      <Head>
        <title>{product.title} | Zion Marketplace</title>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <nav
        className="max-w-3xl mx-auto mt-4 px-4 text-sm text-muted-foreground space-x-1"
        aria-label="Breadcrumb"
      >
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <span>/</span>
        <Link href="/products" className="hover:underline">
          Products
        </Link>
        <span>/</span>
        <span aria-current="page" className="text-foreground font-medium">
          {product.title}
        </span>
      </nav>
      <main className="max-w-3xl mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
        {product.images?.length ? (
          <div className="mb-4">
            <ProductGallery
              images={product.images}
              videoUrl={product.videoUrl}
              modelUrl={product.modelUrl}
            />
          </div>
        ) : null}
        <div className="font-bold mb-2">
          {product.currency}
          {product.price}
        </div>
        <p className="mb-4 whitespace-pre-line">{product.description}</p>
        <div className="mb-4">Seller: {product.author.name}</div>
        <div className="flex gap-2 mb-8">
          <button
            onClick={handleAddToCart}
            className="rounded bg-primary px-4 py-2 text-primary-foreground"
          >
            Add to Cart
          </button>
          <button className="rounded border px-4 py-2">Add to Wishlist</button>
        </div>
        <ProductReviews productId={product.id} />
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<ProductPageProps> = async ({
  params,
}) => {
  const id = params?.id as string;

  try {
    const product =
      MARKETPLACE_LISTINGS.find((p) => p.id === id) ||
      SERVICES.find((s) => s.id === id) ||
      null;
    if (!product) {
      return { notFound: true };
    }
    return { props: { product } };
  } catch (error) {
    Sentry.captureException(error);
    throw error;
  }
};

export default ProductPage;
