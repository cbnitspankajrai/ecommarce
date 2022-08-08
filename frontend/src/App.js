import Navbar from "./Components/NavBar/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Profile from "./Pages/Profile/Profile";
import Account from "./Pages/Account/Account";
import MyOrder from "./Pages/MyOrders/MyOrder";
import Cart from "./Pages/Cart/Cart";
import TrackOrder from "./Pages/TrackOrders/TrackOrder";
import HomePage from "./Pages/HomePage/HomePage";
import Product from "./Pages/ProductInfo/Product";
import Wishlist from "./Pages/Wishlist/Wishlist";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/orders" element={<MyOrder/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/trackorder" element={<TrackOrder/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>

      </Routes>

    <Footer/>
    </>
  );
}

export default App;
