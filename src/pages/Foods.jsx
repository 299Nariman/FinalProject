import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../styles/Foods.module.css";
import { BasketContext } from "../context/BasketContext";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Foods = () => {
  const query = useQuery();
  const category = query.get("category");
  const { addToBasket } = useContext(BasketContext);

  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFoods = async () => {
    try {
      const res = await fetch("http://localhost:5000/books");
      const data = await res.json();
      if (category) {
        setFoods(data.filter((food) => food.category === category));
      } else {
        setFoods(data);
      }
    } catch (error) {
      console.error("Xəta baş verdi:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchFoods();
  }, [category]);

  if (loading) return <p>Yüklənir...</p>;

  return (
    <div className={styles.container}>
      <h1>{category ? category : "Bütün Yeməklər"}</h1>
      <div className={styles.foodList}>
        {foods.length === 0 ? (
          <p>Bu kateqoriyada məhsul tapılmadı.</p>
        ) : (
          foods.map((food) => (
            <div key={food._id} className={styles.foodItem}>
              <Link to={`/food/${food._id}`}>
                <img src={food.image} alt={food.name} />
                <h3>{food.name}</h3>
                <p>{food.price} AZN</p>
              </Link>
            <button
  className={styles.addToBasketBtn}
  onClick={() => addToBasket(food)}
>
  Səbətə əlavə et
</button>

            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Foods;
