import Home from "./Components/Home/Home";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./Components/Product/ProductDetail";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import CartItem from "./Components/Product/CartItem";
import Checkout from "./Components/Product/Checkout";
// import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<CartItem/>} />
          <Route exact path='/productDetail' element={<ProductDetail/>}/>
          <Route exact path='/checkout' element={<Checkout/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
