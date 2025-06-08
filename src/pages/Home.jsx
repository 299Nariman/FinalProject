import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Home.module.css";

const categories = [
  { id: 1, name: "Fast Food", img: "https://source.unsplash.com/400x300/?burger", productIds: [1, 4] },
  { id: 2, name: "Pizza", img: "https://source.unsplash.com/400x300/?pizza", productIds: [2, 3] },
  { id: 3, name: "Desserts", img: "https://source.unsplash.com/400x300/?dessert", productIds: [6] },
  { id: 4, name: "Drinks", img: "https://source.unsplash.com/400x300/?drink", productIds: [] },
];

const Home = () => {
  const [popularFoods, setPopularFoods] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => {
        const firstThree = data.slice(0, 3);
        setPopularFoods(firstThree);
      })
      .catch((err) => console.error("Xəta:", err));
  }, []);

  const goToCategory = (productIds) => {
    // productIds massivini query string kimi göndürürük: ids=1,4
    const query = productIds.join(",");
    navigate(`/foods?ids=${encodeURIComponent(query)}`);
  };

  return (
    <div className={styles.container}>
      <h1>MiniBolt Yemək Sifarişi</h1>

      <section className={styles.categories}>
        <h2>Kateqoriyalar</h2>
        <div className={styles.categoryList}>
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={styles.category}
              onClick={() => goToCategory(cat.productIds)}
            >
              <img src={cat.img} alt={cat.name} />
              <h3>{cat.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.popular}>
        <h2>Populyar Yeməklər</h2>
        <div className={styles.foodList}>
          {popularFoods.map((food) => (
            <div
              key={food._id}
              className={styles.foodItem}
              onClick={() => navigate(`/food/${food._id}`)}
            >
              <img src={food.image} alt={food.name} />
              <h3>{food.name}</h3>
              <p>{parseFloat(food.price).toFixed(2)} AZN</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
