import Header from "./components/layout/Header";
import webfont from "webfontloader";
import React from "react";
import { useEffect } from "react";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Loader from "./components/Loader";
import ProductDetails from "./components/Product/ProductDetails.js";
function App() {
  useEffect(() => {
    webfont.load({
      google: {
        families: ["Roboto", "Orold Sans", "Chilanka"],
      },
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;
