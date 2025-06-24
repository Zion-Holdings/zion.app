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
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store';
import { addItem } from '@/store/cartSlice';
import { useRouter } from 'next/router';
import { fetchProducts } from '@/services/marketplace';
import type { ProductListing } from '@/types/listings';
import { ProductListingCard } from '@/components/ProductListingCard';
import ProductReviews from '@/components/ProductReviews';
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
  const [relatedProducts, setRelatedProducts] = useState<ProductListing[]>([]);

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

  useEffect(() => {
    async function loadRelated() {
      if (!product || !product.category) return;
      try {
        const items = await fetchProducts({ category: product.category, limit: 4 });
        setRelatedProducts(items.filter((p) => p.id !== product.id));
      } catch (e) {
        console.error('Failed to load related products', e);
      }
    }
    loadRelated();
  }, [product?.category, product?.id]);

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

  // Normalize images into an array of URLs
  const imageUrls: string[] = [];
  if (product.images) {
    if (Array.isArray(product.images)) {
      for (const img of product.images) {
        if (typeof img === 'string') imageUrls.push(img);
        else if (img && typeof img === 'object' && 'url' in img) imageUrls.push((img as { url: string }).url);
      }
    } else if (typeof product.images === 'string') {
      imageUrls.push(product.images);
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

        {imageUrls.length > 0 && (
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBlock: '1rem' }}>
            {imageUrls.map((url, idx) => (
              <div key={idx} style={{ width: '200px', height: '200px', position: 'relative' }}>
                <Image src={url} alt={`${product.name} image ${idx + 1}`} fill style={{ objectFit: 'cover' }} loading="lazy" />
              </div>
            ))}
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

        {product.specifications && product.specifications.length > 0 && (
          <section style={{ marginBlock: '1rem' }}>
            <h2>Specifications</h2>
            <ul>
              {product.specifications.map((spec, idx) => (
                <li key={idx}>{spec}</li>
              ))}
            </ul>
          </section>
        )}

        {product.priceTiers && product.priceTiers.length > 0 && (
          <section style={{ marginBlock: '1rem' }}>
            <h2>Price Tiers</h2>
            <table>
              <tbody>
                {product.priceTiers.map((tier, idx) => (
                  <tr key={idx}>
                    <td style={{ paddingRight: '1rem' }}>{tier.tier}</td>
                    <td>{tier.currency || product.currency} {tier.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        <section style={{ marginBlock: '1rem' }}>
          <h2>Reviews</h2>
          <p>
            Average Rating: {product.averageRating ? product.averageRating.toFixed(1) + '/5' : 'Not yet rated'}
          </p>
          <p>({product.reviewCount} reviews)</p>
          <ProductReviews productId={product.id} />
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

        {relatedProducts.length > 0 && (
          <section style={{ marginBlock: '2rem' }}>
            <h2>Related Items</h2>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {relatedProducts.map((item) => (
                <div key={item.id} style={{ width: '200px' }}>
                  <ProductListingCard listing={item} detailBasePath="/product" />
                </div>
              ))}
            </div>
          </section>
        )}
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