import React from "react";
import NewsPage from "./pages/NewsPage.js";
import { Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NewsPage />} />
        <Route path="/:category?" element={<NewsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
