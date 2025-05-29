import React, { useState } from 'react';
import { useCart } from '../context'; // Updated path
import { Product } from '../types/product';
import { toast } from '../hooks/use-toast'; // Assuming this is the correct path for toast

// Define or import a mock product
const mockProduct: Product = { 
  id: '1', 
  name: 'Awesome Gadget', 
  price: 29.99, 
  description: 'This is the best gadget ever.',
  imageUrl: 'https://via.placeholder.com/150/0000FF/808080?Text=AwesomeGadget' // Optional image
};

const ProductPage: React.FC = () => {
  const { dispatch } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    // The CartItem type expects id, name, price, quantity.
    // Product has id, name, price. We add quantity here.
    dispatch({ 
      type: 'ADD_ITEM', 
      payload: { 
        id: mockProduct.id,
        name: mockProduct.name,
        price: mockProduct.price,
        quantity: 1 // Add item with quantity 1
      } 
    });
    toast({
      title: "Success!",
      description: `${mockProduct.name} added to cart!`,
      variant: "default", // Assuming 'default' or similar variant exists for success
    });
    setTimeout(() => {
      setIsAdding(false);
    }, 1000); 
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      {mockProduct.imageUrl && 
        <img 
          src={mockProduct.imageUrl} 
          alt={mockProduct.name} 
          style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} 
        />}
      <h2>{mockProduct.name}</h2>
      <p>{mockProduct.description}</p>
      <p style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
        Price: ${mockProduct.price.toFixed(2)}
      </p>
      <button 
        onClick={handleAddToCart} 
        disabled={isAdding}
        style={{
          padding: '10px 20px',
          fontSize: '1em',
          cursor: 'pointer',
          backgroundColor: isAdding ? '#ccc' : '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px'
        }}
      >
        {isAdding ? 'Adding...' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductPage;
