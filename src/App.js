import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Store from "./Pages/Store";
import Cart from "./Pages/Cart";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/store"
        element={<Store cartItems={cartItems} setCartItems={setCartItems} />}
      />
      <Route
        path="/cart"
        element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
      />
    </Routes>
  );
}
export default App;
