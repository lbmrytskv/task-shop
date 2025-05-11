
import { useCart } from '../context/CartContext';
import { useNavigate, Link } from 'react-router-dom';

const SummaryPage = () => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();

  const total = state.items.reduce(
    (sum, item) =>
      sum + item.quantity * (item.price.main + item.price.fractional / 100),
    0
  );

  const handlePlaceOrder = () => {
    
    localStorage.setItem('order', JSON.stringify(state.items));
    localStorage.setItem('orderTotal', total.toFixed(2));

    // Redirect to static confirmation page
    window.location.href = '/confirmation.html';
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Order Summary</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {state.items.map(item => (
          <li key={item.id} style={{ marginBottom: '1rem' }}>
            <div><strong>{item.name}</strong></div>
            <div>Quantity: {item.quantity}</div>
            <div>Price: {item.price.main},{item.price.fractional.toString().padStart(2, '0')} zł</div>
            <div>
              Subtotal: {(item.quantity * (item.price.main + item.price.fractional / 100)).toFixed(2)} zł
            </div>
          </li>
        ))}
      </ul>
      <hr />
      <div><strong>Total:</strong> {total.toFixed(2)} zł</div>
      <br />
      <button onClick={handlePlaceOrder}>Place Order</button>
      <br /><br />
      <Link to="/cart">← Back to Cart</Link>
    </div>
  );
};

export default SummaryPage;
