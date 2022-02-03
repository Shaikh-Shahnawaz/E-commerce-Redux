import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

import {
  fetchProductGetRequest,
  fetchProductById,
} from "../../ReduxToolkit/thunks/thunk";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../ReduxToolkit/reducers/reducer";
import SingleProduct from "./SingleProduct";

function Product() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.allProduct);
  const filterProduct = useSelector((state) => state.product.filterData);

  console.log('filterProduct=-=->>',filterProduct)
  console.log('allProduct=-=->>',products)

  useEffect(() => {
    dispatch(fetchProductGetRequest());
  }, []);

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
            {
            filterProduct.length == 0 
              ? products.map((ele) => (
                  <SingleProduct
                    product={ele}
                    id={ele.id}
                    image={ele.image}
                    title={ele.title}
                    price={ele.price}
                  />
                ))
              : filterProduct.map((ele) => (
                  <SingleProduct
                    product={ele}
                    id={ele.id}
                    image={ele.image}
                    title={ele.title}
                    price={ele.price}
                  />
                ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
