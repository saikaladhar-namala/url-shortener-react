import React from "react";
import Navbar from "./components/NavBar";
import UrlManager from "./components/UrlManager"; 

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-5">
        <h1 className="text-center mb-4 app-title">
          Shorten Your Looooong Links :)
        </h1>
        <p className="text-center mb-5 app-subtitle">
          UrlShorty is an efficient and easy-to-use URL shortening service
        </p>

        <UrlManager />
      </div>
    </div>
  );
};

export default App;
