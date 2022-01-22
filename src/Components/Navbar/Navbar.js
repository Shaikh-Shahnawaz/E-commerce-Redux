import React from "react";
import { NavLink } from "react-router-dom";
import Login from "../Login/Login";
import Signup from "../Register/Register";

const Navbar = () => {
  return (
    <>
      <div>
        <ul class="nav justify-content-center">
          <li class="nav-item fw-bold" style={{color:"red",}}>
           
              Sale 70% Off..!! Buy Three Get One FREE
            
          </li>
        </ul>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container" style={{ color: "white" }}>
            <NavLink
              className="navbar-brand fw-bold fs-3"
              to="/"
              style={{ color: "white", width: "100px" ,paddingLeft:"10px"}}
            >
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                className="card-img-top"
                alt="T-Shirt White and Black"
                height="33px"
              />
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
            &nbsp;
            <ul class="nav justify-content-center" style={{ width: "900px" }}>
              <li class="nav-item" style={{color:"white",paddingTop:"11px"}}>
                
                  <i class="fas fa-map-marker-alt" style={{color:"#ffd700",fontSize:"20px"}}></i>
                 &nbsp; Select Your Address
                
              </li>
             
              <li className="nav-item"  style={{paddingLeft:"50px"}}>
                <form class="d-flex mt-1">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search Product Here..."
                    aria-label="Search"
                    size="40"
                  />
                 
                    <i class="fas fa-search" style={{fontSize:"40px",cursor:"pointer"}}></i>
  
                </form>
              </li>
            </ul>

            <ul class="nav justify-content-end" style={{ width: "450px" }}>
              <li class="nav-item" style={{paddingTop:"11px"}}>
               
                  <Login />
              
              </li>
              <li class="nav-item"  style={{paddingTop:"11px"}}>
               
                  <Signup />
                
              </li>

              <li class="nav-item">
                <button className="btn">
                  <NavLink
                    to="/cart"
                    className="btn btn-outline-dark"
                    style={{ color: "white",fontSize:"20px"}}
                  >
                    <i className="fa  fa-shopping-cart" style={{color:"#ffd700",fontSize:"25px"}}></i> Cart
                  </NavLink>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
