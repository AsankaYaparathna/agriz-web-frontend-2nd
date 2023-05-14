import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NoPage from './pages/NoPage';
import RegisterPage from './pages/SignUpPage';
import AllSellersPage from './pages/AllSellers';
import SaveProductsPage from './pages/SaveProductPage';
import ContactUsPage from './pages/ContactUsPage';
import AllProductsPage from './pages/AllProducts';
import VegetableProducts from './pages/VegitableProducts';
import LoginPage from './pages/LogInPage';
import FruitProducts from './pages/FruitProducts';
import OtherProducts from './pages/OtherProducts';
import SellerViewPage from './pages/SellerViewPage';
import ProductViewPage from './pages/ProductViewPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/allsellers" element={<AllSellersPage />} />
          <Route path="/allsellers/sellerview" element={<SellerViewPage />} />
          <Route path="/allproducts" element={<AllProductsPage />} />
          <Route path="/save" element={<SaveProductsPage />} />
          <Route path="/contactus" element={<ContactUsPage />} />
          <Route path="/vegetable" element={<VegetableProducts />} />
          <Route path="/fruit" element={<FruitProducts />} />
          <Route path="/other" element={<OtherProducts />} />
          <Route path="/productview" element={<ProductViewPage />} />

          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
