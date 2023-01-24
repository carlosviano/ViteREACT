import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { LoginContextProvider } from "./contexts/LoginModeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginContextProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </LoginContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
