import type { NextPage } from 'next';
import Seo from '../../components/seo/Seo';
import { ProductJsonLd } from 'next-seo';

const ProductsIndex: NextPage = () => {
  const product = {
    name: 'Equipment Rental — GPU Workstations',
    description: 'High-performance GPU workstation rentals for AI training and inference.',
    brand: 'Zion Tech Solutions',
    sku: 'GPU-RENTAL-001',
    images: ['https://ziontechgroup.netlify.app/images/gpu-workstation.jpg'],
  };

  return (
    <div>
      <Seo title="Products" description="Equipment rentals and product offerings by Zion." openGraph={{ title: 'Products', description: 'Equipment rentals and product offerings by Zion.' }} />
      <ProductJsonLd
        productName={product.name}
        images={product.images}
        description={product.description}
        brand={product.brand}
        sku={product.sku}
        offers={[{
          price: '499.00',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: 'https://ziontechgroup.netlify.app/products',
          seller: { name: 'Zion Tech Solutions' }
        }]}
      />
      <main>
        <h1>Products</h1>
        <p>Explore rentals and product offerings.</p>
      </main>
    </div>
  );
};

export default ProductsIndex;