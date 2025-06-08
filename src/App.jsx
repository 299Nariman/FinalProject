import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BasketProvider } from "./context/BasketContext";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Foods from "./pages/Foods";
import FoodDetails from "./pages/FoodDetails";
import Basket from "./pages/Basket"; // Yeni Basket səhifəsi

function App() {
  return (
    <BasketProvider>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/foods" element={<Foods />} />
            <Route path="/food/:id" element={<FoodDetails />} />
            <Route path="/basket" element={<Basket />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </BasketProvider>
  );
}

export default App;
