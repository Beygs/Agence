import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "routes/App";
import "styles/main.scss";

render(
  <React.StrictMode>
    <BrowserRouter basename="/Agence">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);
