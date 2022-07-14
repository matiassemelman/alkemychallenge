// Libraries
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";

// Components
import { Login } from "./components/Login/Login";
import MovieList from './components/MovieList/MovieList'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <GlobalStyle />

    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/list" exact element={<MovieList />} />

    </Routes>
  </BrowserRouter>
);
