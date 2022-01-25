import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function ProductDetail() {

  const navigate = useNavigate();
  const { state } = useLocation();

  


  return (
    <>
      <div>
        <div className="container py-5" key={state.data.key}>
          <div className="row py-4">
            <div className="col-md-6">
              <img
                src={state.data.image}
                alt={state.data.title}
                height="400px"
                width="400px"
              />
            </div>
            <div className="col-md-6">
              <h4 className="text-uppercase text-black-50">
                {state.data.category}
              </h4>
              <h1 className="display-5">{state.data.title}</h1>
              <p className="fw-bolder">
                Rating {state.data.rating && state.data.rating.rate}
                <i className="fa fa-star" style={{ color: "red" }}></i>
              </p>
              <h4 className="display-6 fw-bold my-4">
                RS. {Math.ceil(state.data.price * 76)}
              </h4>
              <p className="lead">{state.data.description.substring(0, 700)}</p>

             
              {/* <button
                className="btn btn-outline-danger px-4 py-2"
                // onClick={() => addstate.data(state.data)}
              >
                Add to Cart
              </button> */}
              <NavLink to="/cart" className="btn btn-md btn-success px-4 py-2 mx-2">
                Go to Cart
              </NavLink>


              <button 
              className="btn btn-md btn-dark"
              onClick={()=>navigate("/")}>Back</button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
