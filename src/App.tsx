
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage';
import { CartProvider } from './context/CartContext';
import CartPage from './pages/CartPage';
import SummaryPage from './pages/SummaryPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
       <Navbar />
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/summary" element={<SummaryPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
