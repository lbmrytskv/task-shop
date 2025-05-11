import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { state } = useCart();

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav style={{
      padding: '1rem',
      backgroundColor: '#eee',
      display: 'flex',
      gap: '1rem',
      justifyContent: 'flex-start'
    }}>
      <Link to="/">Lista produktów</Link>
      <Link to="/cart">
        Koszyk {totalItems > 0 && <span style={{ fontWeight: 'bold' }}>({totalItems})</span>}
      </Link>
    </nav>
  );
};

export default Navbar;
