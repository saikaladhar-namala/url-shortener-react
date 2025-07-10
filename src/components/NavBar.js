import React from "react";

// Removed theme and toggleTheme from props
const Navbar = () => {
  // Function to handle refreshing the page
  const handleRefresh = (e) => {
    e.preventDefault(); // Prevent default link behavior (e.g., scrolling to top)
    window.location.reload(); // Reload the entire page
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      {" "}
      {/* Simplified class to always be dark theme */}
      <div className="container">
        <a
          className="navbar-brand text-orange"
          href="#"
          onClick={handleRefresh}
        >
          UrlShorty
        </a>
        <div className="d-flex align-items-center"></div>
      </div>
    </nav>
  );
};

export default Navbar;
