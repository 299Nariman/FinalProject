// src/context/BasketContext.jsx
import React, { createContext, useState } from "react";

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (product) => {
    setBasket((prev) => {
      const exist = prev.find((item) => item._id === product._id);
      if (exist) {
        // varsa sayını artır, yoxsa əlavə et
        return prev.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromBasket = (id) => {
    setBasket((prev) => prev.filter((item) => item._id !== id));
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
