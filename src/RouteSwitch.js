import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Shop";
import CartPage from "./CartPage";
import { useState } from "react";

const RouteSwitch = () => {

  const [ cart, setCart ] = useState([]);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App cart={cart} setCart={setCart} />} />
        <Route path="/shop" element={<Shop cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;