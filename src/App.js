import Home from "./Components/Home/Home";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./Components/Product/ProductDetail";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path='/productDetail/:id' element={<ProductDetail/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
