import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Product() {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => {
          console.log(err);
        });
      setProduct(res.data);
    };
    fetchProducts();
  });
  return (
    <>
      <div>
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12 mb-5">
              <h1 className="display-6 fw-bolder text-center">
                Latest Products
              </h1>
              <hr></hr>
            </div>
            {products.map((ele) => (
              <>
                <div className="col-md-3 mb-4" key={ele.id}>
                  <div className="card h-80 text-center p-4">
                    <img
                      src={ele.image}
                      className="card-img-top"
                      alt={ele.title}
                      height="250px"
                    />
                    
                    <div className="card-body">
                      <h5 className="card-title">
                        {ele.title.substring(0, 13)}...
                      </h5>

                      <p className="card-text fw-bold">
                        Rs. {Math.ceil(ele.price * 76)}
                      </p>

                      <NavLink
                        to={`/productDetail/${ele.id}`}
                        className="btn btn-outline-danger fw-bold" style={{borderRadius:"20px"}} 
                      >
                        Get Information
                      </NavLink>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
