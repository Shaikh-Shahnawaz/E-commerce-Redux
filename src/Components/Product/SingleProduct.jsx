import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../ReduxToolkit/reducers/reducer";

const SingleProduct = ({ id, image, title, price, product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(0);
  const handleViewProduct = (ele) => {
    navigate("/productDetail", { state: { data: ele } });
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart({product,quantity}));
  };

  return (
    <>
      <div className="col-md-3 mb-4" key={id}>
        <div className="card h-80 text-center p-4">
          <img
            src={image}
            className="card-img-top"
            alt={title}
            height="250px"
          />

          <div className="card-body">
            <h5 className="card-title">{title.substring(0, 11)}</h5>

            <p className="card-text fw-bold">Rs. {Math.ceil(price * 76)}</p>
          </div>

          <p className="mt-4">
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="btn btn-dark btn-sm"
            >
              +
            </button>
            <b className="mx-2">{quantity}</b>
            <button
              onClick={() => (quantity > 0 ? setQuantity(quantity - 1) : "")}
              className="btn  btn-dark btn-sm"
            >
              -
            </button>
          </p>

          <div className="d-flex justify-content-center">
            <button
              onClick={() => handleAddToCart(product)}
              className="btn btn-sm btn-outline-danger me-2"
            >
              Add To Cart
            </button>
            <button
              onClick={() => handleViewProduct(product)}
              className="btn btn-sm btn-danger"
            >
              View details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
