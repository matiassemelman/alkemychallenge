// Libraries
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styling
import { GlobalStyle } from "./globalStyles";
import './app.css'

// Components
import Footer from "./components/Footer/Footer";
import { Login } from "./components/Login/Login";
import MovieList from "./components/MovieList/MovieList";
import Header from './components/header/Header'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <GlobalStyle />
    <Header />
    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/list" element={<MovieList />} />
    </Routes>
    <Footer />

  </BrowserRouter>
);
