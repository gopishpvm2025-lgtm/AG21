import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './assets/pages/home';
import Product from './assets/pages/product';

function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#f3f4f6' }}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

