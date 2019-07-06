import React, { Component } from "react";
import "./nav.css";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link to="/bill">
          <span className="navbar-brand">Billing App</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse navbar-right"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link to="/products">
              <span className="nav-item nav-link">Add/View Products</span>
            </Link>
            <Link to="/bill">
              <span className="nav-item nav-link">Generate Bill</span>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
