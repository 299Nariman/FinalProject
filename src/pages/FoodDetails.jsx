// src/pages/FoodDetails.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/FoodDetails.module.css";

const foodData = {
  1: { id: 1, name: "Cheeseburger", price: 10.99, desc: "Delicious cheeseburger with fresh ingredients.", img: "https://source.unsplash.com/600x400/?burger" },
  2: { id: 2, name: "Pepperoni Pizza", price: 13.99, desc: "Classic pepperoni pizza with cheese and tomato sauce.", img: "https://source.unsplash.com/600x400/?pizza" },
  3: { id: 3, name: "Chocolate Muffin", price: 5.99, desc: "Tasty chocolate muffin with soft texture.", img: "https://source.unsplash.com/600x400/?muffin" },
  4: { id: 4, name: "Lemonade", price: 3.99, desc: "Refreshing homemade lemonade.", img: "https://source.unsplash.com/600x400/?lemonade" },
};

const FoodDetails = () => {
  const { id } = useParams();
  const food = foodData[id];

  const [qty, setQty] = useState(1);

  if (!food) return <p>Yemək tapılmadı!</p>;

  return (
    <div className={styles.container}>
      <img src={food.img} alt={food.name} className={styles.image} />
      <div className={styles.info}>
        <h1>{food.name}</h1>
        <p>{food.desc}</p>
        <p className={styles.price}>${food.price.toFixed(2)}</p>

        <div className={styles.qty}>
          <label>Miqdar:</label>
          <input
            type="number"
            min="1"
            value={qty}
            onChange={(e) => setQty(Number(e.target.value))}
          />
        </div>

        <button className={styles.btn}>Səbətə Əlavə Et</button>
      </div>
    </div>
  );
};

export default FoodDetails;
