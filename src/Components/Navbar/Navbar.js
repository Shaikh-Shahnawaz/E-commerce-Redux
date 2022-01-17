import React from "react";
import { NavLink } from "react-router-dom";
import Login from "../Login/Login";
import Signup from "../Register/Register";

const Navbar = () => {
  return (
    <>
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container" style={{ color: "white" }}>
            <NavLink
              className="navbar-brand fw-bold fs-3"
              to="/"
              style={{ color: "white" }}
            >
              S&S CART
            </NavLink>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse text-center fs-6 fw-bold"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mr-5 mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                    style={{ color: "white" }}
                  >
                    Home
                  </NavLink>
                </li>
                &nbsp; &nbsp;
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/products"
                    style={{ color: "white" }}
                  >
                    Products
                  </NavLink>
                </li>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <li className="nav-item">
                  <form class="d-flex mt-1">
                    <input
                      class="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button class="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                </li>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <li className="nav-item">
                  <div className="buttons">
                    <Login />
                    &nbsp; &nbsp;
                    <Signup />
                    &nbsp; &nbsp;
                    <button className="btn">
                      <NavLink
                        to="/cart"
                        className="btn btn-outline-dark"
                        style={{ color: "white" }}
                      >
                        <i className="fa  fa-shopping-cart"></i> Cart
                      </NavLink>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
