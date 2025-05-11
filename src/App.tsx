// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage';
import { CartProvider } from './context/CartContext';
import CartPage from './pages/CartPage';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/cart" element={<CartPage />} />
          {/* CartPage, SummaryPage — додамо пізніше */}
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
