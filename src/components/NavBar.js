import React from "react";

const Navbar = () => {

  const handleRefresh = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      {" "}

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
