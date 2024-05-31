import React from "react";
import "../App.css";
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="navbar-brand">
          Italian Recipes
          <span className="logo">🍴</span>
        </a>
      <Link className="link" to={'/'}>Home</Link>
      <Link className="link" to={'/add'}>Add</Link>
      <Link className="link" to={'/contact'}>Contact</Link>
      <Link className="link" to={'/about'}>About</Link>

        <form className="form-inline">
          <input
            type="search"
            placeholder="Search For Recipe ..."
            className="form-control"
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
