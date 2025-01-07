import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ThemeProviderComponent from "./contexts/ThemeContext";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <ThemeProviderComponent>
      <App />
    </ThemeProviderComponent>
  </BrowserRouter>,
  document.getElementById("root")
);
