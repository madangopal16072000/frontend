import Header from "./components/layout/Header";
import webfont from "webfontloader";
import React from "react";
import { useEffect } from "react";
import Footer from "./components/layout/Footer";
import Home from "./components/Home/Home.js";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Loader from "./components/Loader";
import ProductDetails from "./components/Product/ProductDetails.js";
import Products from "./components/Product/Products";
import Search from "./components/Product/Search";
import LoginSignUp from "./components/User/LoginSignUp";
function App() {
  useEffect(() => {
    webfont.load({
      google: {
        families: ["Roboto", "Orold Sans", "Chilanka"],
      },
    });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<LoginSignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
