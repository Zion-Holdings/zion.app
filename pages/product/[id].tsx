import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { fetchProductById } from '../../src/services/productService';
import type { ProductDetailsData } from '../../src/types/product';
import { useWishlist } from '@/hooks/useWishlist';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';
import { LoginModal } from '@/components/auth/LoginModal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store';
import { addItem } from '@/store/cartSlice';
import { useRouter } from 'next/router';
// Import React if not implicitly available
// import React from 'react';

// Define props type for the page component based on getServerSideProps return
type ProductPageProps = {
  product: ProductDetailsData | null; // Allow null if product might not be found and handled in component
};

const ProductDetailPage = ({ product }: ProductPageProps) => {
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

  const { isAuthenticated } = useAuth();
  const { isWishlisted, toggle } = useWishlist();
  const [loginOpen, setLoginOpen] = useState(false);
  const [addingToCart, setAddingToCart] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleWishlist = () => {
    if (!isAuthenticated) {
      setLoginOpen(true);
      return;
    }
    const already = isWishlisted(product.id);
    toggle(product.id);
    toast.success(already ? 'Removed from wishlist' : 'Added to wishlist');
  };

  const inWishlist = isWishlisted(product.id);

  const handleAddToCart = async () => {
    if (!isAuthenticated) {
      setLoginOpen(true);
      return;
    }

    setAddingToCart(true);
    try {
      dispatch(addItem({ 
        id: product.id, 
        title: product.name, 
        price: product.price ?? 0 
      }));
      
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart`,
        action: {
          label: "View cart",
          onClick: () => router.push('/cart'),
        },
      });
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast({
        title: "Error",
        description: "Failed to add item to cart. Please try again.",
        variant: "destructive",
      });
    } finally {
      setAddingToCart(false);
    }
  };

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
          <div style={{ maxWidth: '400px', height: 'auto', marginBlock: '1rem', position: 'relative' }}>
            <Image
              src={imageUrl}
              alt={`Image of ${product.name}`}
              fill
              style={{ objectFit: 'contain' }}
              loading="lazy"
            />
          </div>
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
            onClick={handleAddToCart}
            disabled={addingToCart}
            style={{ 
              padding: '0.75rem 1.5rem', 
              marginRight: '0.5rem',
              backgroundColor: addingToCart ? '#ccc' : '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: addingToCart ? 'not-allowed' : 'pointer',
              fontSize: '1rem',
              fontWeight: 'bold'
            }}
          >
            {addingToCart ? 'Adding...' : 'Add to Cart'}
          </button>
          <button 
            onClick={handleWishlist} 
            style={{ 
              padding: '0.75rem 1.5rem',
              backgroundColor: inWishlist ? '#dc3545' : '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            {inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
          </button>
          <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
        </div>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<ProductPageProps> = async ({
  params,
}: {
  params?: { id?: string };
}) => {
  const id = params?.id;

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