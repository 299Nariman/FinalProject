// src/pages/Basket.jsx
import React, { useContext } from "react";
import { BasketContext } from "../context/BasketContext";
import styles from "../styles/Basket.module.css";

const Basket = () => {
  const { basket, removeFromBasket } = useContext(BasketContext);

  if (basket.length === 0) return <p>Səbət boşdur.</p>;

  return (
    <div className={styles.container}>
      <h1>Səbət</h1>
      <ul>
        {basket.map((item) => (
          <li key={item._id} className={styles.basketItem}>
            <img src={item.image} alt={item.name} width={80} />
            <div>
              <h3>{item.name}</h3>
              <p>Qiymət: {item.price} AZN</p>
              <p>Miqdar: {item.quantity}</p>
              <button onClick={() => removeFromBasket(item._id)}>Sil</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Basket;
