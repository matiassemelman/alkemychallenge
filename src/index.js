import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import { Login } from "./components/Login/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <GlobalStyle />

    <Routes>
      <Route path="/" exact element={<Login />} />
    </Routes>
  </BrowserRouter>
);
