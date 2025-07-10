import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import UrlManager from "./components/UrlManager";
import ExpiredUrlPage from "./components/ExpiredUrlPage";
import NotFoundPage from "./NotFoundPage";
import RedirectHandler from "./RedirectHandler";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container mt-5">
          <h1 className="text-center mb-4 app-title">
            Shorten Your Looooong Links :)
          </h1>
          <p className="text-center mb-5 app-subtitle">
            UrlShorty is an efficient and easy-to-use URL shortening service
          </p>

          <Routes>
            <Route path="/" element={<UrlManager />} />
            <Route path="/expired" element={<ExpiredUrlPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/:shortCode" element={<RedirectHandler />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
