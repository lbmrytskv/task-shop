
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const CartPage = () => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();

  const total = state.items.reduce(
  (sum, item) =>
    sum + item.quantity * (item.price.main + item.price.fractional / 100),
  0
);


  return (
    <div style={{ padding: '2rem' }}>
        

      <h1>Your Cart</h1>
      {state.items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {state.items.map(item => (
            <li key={item.id} style={{ marginBottom: '1rem' }}>
              <div><strong>{item.name}</strong></div>
              <div>
                Price: {item.price.main},{item.price.fractional.toString().padStart(2, '0')} zł
              </div>
              <div>Quantity: {item.quantity}</div>
              <div>
                Subtotal: {(item.quantity * (item.price.main + item.price.fractional / 100)).toFixed(2)} zł
              </div>
              <div style={{ marginTop: '0.5rem' }}>
                <button onClick={() => dispatch({ type: 'INCREMENT_QUANTITY', payload: item.id })}>+</button>
                <button onClick={() => dispatch({ type: 'DECREMENT_QUANTITY', payload: item.id })}>-</button>
                <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <hr />
      <div><strong>Total:</strong> {total.toFixed(2)} zł</div>
      <br />
<button onClick={() => navigate('/summary')}>Proceed to Summary</button>
<br /><br />
<Link to="/">← Back to Product List</Link>

    </div>
  );
};

export default CartPage;
