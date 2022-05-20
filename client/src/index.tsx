import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Views/HomePage";
import RecipePage from "./Views/RecipePage";
import NoMatchPage from "./Views/NoMatch";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./App/store";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="category/:categoryId" element={<HomePage />} />
        <Route path="/recipe/:recipeId" element={<RecipePage />} />
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
