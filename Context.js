import react, { createContext } from "react";
import { useState } from "react";

export const cartItems = createContext(null);

export const BasketContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <cartItems.Provider value={{ cart, setCart }}>
      {children}
    </cartItems.Provider>
  );
};
