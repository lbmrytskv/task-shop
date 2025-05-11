
import products from '../data/products.json';
import type { Product } from '../types/Product';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const ProductListPage = () => {
  const { dispatch } = useCart();

  const handleAddToCart = (product: Product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  return (
    <div style={{ padding: '2rem' }}>
        <Link to="/cart" style={{ display: 'block', marginBottom: '1rem' }}>
          Go to Cart
        </Link>
      <h1>Product List</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {(products as Product[]).map(product => (
          <li key={product.id} style={{ marginBottom: '1rem' }}>
            <div><strong>{product.name}</strong></div>
            <div>
              {product.price.main},{product.price.fractional.toString().padStart(2, '0')} zł
            </div>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListPage;

