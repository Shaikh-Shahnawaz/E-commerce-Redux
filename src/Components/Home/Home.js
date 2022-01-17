import React from "react";
import Footer from "../Footer/Footer";

import Navbar from "../Navbar/Navbar";
import Product from "../Product/Product";

const Home = () => {
  return (
    <>
      <div>
        <div className="hero">
          <Navbar />
          <div className="card bg-dark text-white border-0">
            <img
              src="https://image.freepik.com/free-photo/beautiful-woman-black-friday-concept-with-copy-space_23-2148674185.jpg"
              className="card-img"
              alt="Background"
              height="550px"
            />
            <div className="card-img-overlay d-flex flex-column ">
              <div className="container ">
                <h5
                  className="card-title display-3 fw-bolder mb-2"
                  style={{ paddingLeft: "400px", paddingTop: "200px" }}
                >
                  NEW SEASON ARRIVAL
                </h5>
                <p className="card-text fs-3" style={{ paddingLeft: "550px" }}>
                  Check Out All The TRENDS
                </p>
              </div>
            </div>
          </div>
        </div>
        <Product />
        <Footer />
      </div>
    </>
  );
};

export default Home;
