import React, { useState } from "react";
import styles from "../Support.module.css";

const Support = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setAnswer("");
    if (!question.trim()) {
      setError("Zəhmət olmasa sualınızı yazın.");
      return;
    }
    setLoading(true);

    try {
      const res = await fetch("/api/support/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Serverdə xəta baş verdi.");
      } else {
        setAnswer(data.answer);
      }
    } catch {
      setError("Serverə qoşulmaq mümkün olmadı.");
    }
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Sualınızı yazın və cavab alın</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className={styles.textarea}
          placeholder="Sualınızı buraya yazın..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          disabled={loading}
        />
        <button className={styles.button} type="submit" disabled={loading}>
          {loading ? "Cavab hazırlanır..." : "Göndər"}
        </button>
      </form>
      {error && <div className={styles.error}>{error}</div>}
      {answer && <div className={styles.response}>{answer}</div>}
    </div>
  );
};

export default Support;
