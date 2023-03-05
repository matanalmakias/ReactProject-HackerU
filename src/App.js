import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./routes/Home/Home";
import About from "./routes/About/About";
import Order from "./routes/Order/Order";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductItem from "./Components/Products/ProductItem";
import { useState } from "react";

import { createContext } from "react";
import Contact from "./routes/Contact/Contact";
import NavbarC from "./Components/Navbar";
import ProductDetails from "./Components/Products/ProductDetails";
import PrudoctUpdate from "./Components/Products/PrudoctUpdate";

const MoveToProductItem = createContext("productItem");

function App() {
  const [routeName, setRouteName] = useState("");

  return (
    <div className="App">
      <NavbarC />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order" element={<Order />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/product/edit/:id" element={<PrudoctUpdate />} />
      </Routes>
    </div>
  );
}

export default App;
