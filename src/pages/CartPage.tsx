
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
        

      <h1>Twój koszyk</h1>
      {state.items.length === 0 ? (
        <p>koszyk jest pusty</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {state.items.map(item => (
            <li key={item.id} style={{ marginBottom: '1rem' }}>
              <div><strong>{item.name}</strong></div>
              <div>
                Cena: {item.price.main},{item.price.fractional.toString().padStart(2, '0')} zł
              </div>
              <div>Iłość: {item.quantity}</div>
              <div>
                Suma częściowa: {(item.quantity * (item.price.main + item.price.fractional / 100)).toFixed(2)} zł
              </div>
              <div style={{ marginTop: '0.5rem' }}>
                <button onClick={() => dispatch({ type: 'INCREMENT_QUANTITY', payload: item.id })}>+</button>
                <button onClick={() => dispatch({ type: 'DECREMENT_QUANTITY', payload: item.id })}>-</button>
                <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}>Usuń</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <hr />
      <div><strong>Łącznie:</strong> {total.toFixed(2)} zł</div>
      <br />
<button onClick={() => navigate('/summary')}>Podsumowanie zamówienia</button>
<br /><br />
<Link to="/">← Wróć do listy</Link>

    </div>
  );
};

export default CartPage;
