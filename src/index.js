import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Join from "./Join";
import Review from "./Review";
const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="join" element={<Join />} />
      <Route path="review" element={<Review />} />
    </Routes>
  </BrowserRouter>
);
