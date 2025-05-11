/// <reference types="vite/client" />

import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const SummaryPage = () => {
  const { state } = useCart();

  const total = state.items.reduce(
    (sum, item) =>
      sum + item.quantity * (item.price.main + item.price.fractional / 100),
    0
  );

  const handlePlaceOrder = () => {
    // Save order details
    localStorage.setItem('order', JSON.stringify(state.items));
    localStorage.setItem('orderTotal', total.toFixed(2));

    // Redirect to static confirmation page
    const base = import.meta.env.MODE === 'production' ? '/task-shop/' : '/';
    window.location.href = `${base}confirmation.html`;
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Podsumowanie zamówienia</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {state.items.map(item => (
          <li key={item.id} style={{ marginBottom: '1rem' }}>
            <div><strong>{item.name}</strong></div>
            <div>Iłość: {item.quantity}</div>
            <div>Cena: {item.price.main},{item.price.fractional.toString().padStart(2, '0')} zł</div>
            <div>
              Suma częściowa: {(item.quantity * (item.price.main + item.price.fractional / 100)).toFixed(2)} zł
            </div>
          </li>
        ))}
      </ul>
      <hr />
      <div><strong>Łącznie:</strong> {total.toFixed(2)} zł</div>
      <br />
      <button onClick={handlePlaceOrder}>Złóż Zamówienie</button>
      <br /><br />
      <Link to="/cart">← Wróć do koszyka</Link>
    </div>
  );
};

export default SummaryPage;
