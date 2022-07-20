// Libraries
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Styling
import './app.css'

// APP
import App from "./App"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
   <App/>

  </BrowserRouter>
);
