import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import styles from "../styles/AdminPanel.module.css";

const AdminPanel = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await fetch("http://localhost:5000/books");
    const data = await res.json();
    setBooks(data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      image: "",
      author: "",
    },
    onSubmit: async (values, { resetForm }) => {
      await fetch("http://localhost:5000/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      resetForm();
      fetchBooks();
    },
  });

  const deleteBook = async (id) => {
    await fetch(`http://localhost:5000/books/${id}`, {
      method: "DELETE",
    });
    fetchBooks();
  };

  return (
    <div className={styles.container}>
      <h1>Admin Panel</h1>

      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <input
          name="name"
          placeholder="Ad"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <input
          name="price"
          placeholder="Qiymət"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
        <input
          name="image"
          placeholder="Şəkil URL"
          onChange={formik.handleChange}
          value={formik.values.image}
        />
        <input
          name="author"
          placeholder="Author"
          onChange={formik.handleChange}
          value={formik.values.author}
        />
        <button type="submit">Əlavə et</button>
      </form>

      <h2>Məhsullar</h2>
      <ul>
        {books.map((book) => (
          <li
            key={book._id}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
              listStyle: "none",
            }}
          >
            <img
              src={book.image}
              alt={book.name}
              style={{ width: "100px", height: "auto", marginRight: "1rem" }}
            />
            <div>
              <div>
                {book.name} - {book.price} AZN
              </div>
              <div>Author: {book.author}</div>
            </div>
            <button
              onClick={() => deleteBook(book._id)}
              style={{ marginLeft: "auto" }}
            >
              Sil
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
