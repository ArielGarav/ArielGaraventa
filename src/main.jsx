import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./GlobalStyles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes/routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </React.StrictMode>
);
