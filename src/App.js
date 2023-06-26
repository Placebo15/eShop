import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import ProductInfo from "./pages/product-info/ProductInfo";
import { Category } from "./pages/category/category";
import { About } from "./pages/About/about";
import { Payment } from "./payment/paymentmethod";
import { Registration } from "./pages/user-registration/userRegistration";
import { Login } from "./pages/user-login/userLogin";
import { ProfilePage } from "./pages/profile-page/profilePage";


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/products/:id" element={<ProductInfo />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/phones" element={<Category category="Phones" />} />
            <Route path="/clothes" element={<Category category="Clothes" />} />
            <Route path="/laptops" element={<Category category="Laptops" />} />
            <Route path="/userprofile" element={<ProfilePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/payment" element={<Payment totalAmount={Cart.totalAmount} />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;