import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { addCart } from "../../Redux/Action";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const dispatch = useDispatch();

  const addProduct =(product)=>{
    dispatch(addCart(product))
  }

  useEffect(() => {
    const getProduct = async () => {
      const res = await axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .catch((err) => {
          console.log(err);
        });

      setProduct(res.data);
    };
    getProduct();
  });
  return (
    <>
      <div>
        <div className="container py-5" key={product.key}>
          <div className="row py-4">
            <div className="col-md-6">
              <img
                src={product.image}
                alt={product.title}
                height="400px"
                width="400px"
              />
            </div>
            <div className="col-md-6">
              <h4 className="text-uppercase text-black-50">
                {product.category}
              </h4>
              <h1 className="display-5">{product.title}</h1>
              <p className="fw-bolder">
                Rating {product.rating && product.rating.rate}
                <i className="fa fa-star" style={{ color: "yellow" }}></i>
              </p>
              <h3 className="display-6 fw-bold my-4">
                RS. {Math.ceil(product.price * 76)}
              </h3>
              <p className="lead">{product.description}</p>
              <button
                className="btn btn-outline-danger px-4 py-2"
                onClick={() => addProduct(product)}
              >
                Add to Cart
              </button>
              <NavLink to="/cart" className="btn btn-success px-4 py-2 ms-2">
                Go to Cart
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
