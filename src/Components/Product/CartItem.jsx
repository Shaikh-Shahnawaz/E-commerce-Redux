import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart , deleteCartItem} from "../../ReduxToolkit/reducers/reducer";

const CartItem = () => {

  const cartItems = useSelector((state) => state.product.cart);

  console.log('cartItems-=-=-=>>>',cartItems)

  const navigate = useNavigate()

  const dispatch = useDispatch();

  const handleDeleteItem = (index) => {
    dispatch(deleteCartItem(index));
  };


  return (
    <>
      <div className="m-5">

        <div className="d-flex justify-content-between align-items-center">
        <h3 className="">Shopping Cart </h3>

        <h5 
        onClick={()=> navigate('/checkout')}
        style={{cursor:'pointer'}}
        className="text-warning" >Proceed To Checkout</h5>

        </div>

        <hr />
        {cartItems.map((ele, index) => (
          <>
            <div className="d-flex align-items-center bg-light p-2">
              <img
                src={ele.product.image}
                alt=""
                width="160px"
                height="160px"
              />

              <div className="ms-5">
                <h5>{ele.product.title}</h5>
                <h6>QTY: {ele.quantity}</h6>

                <p>
                  <b>
                    {" "}
                    Rs.{" "}
                    {(Math.ceil(ele.product.price * 76) * ele.quantity).toFixed(
                      2
                    )}{" "}
                  </b>{" "}
                </p>

                {/* <p>Delete</p> */}
                <p
                  style={{ cursor: "pointer", color: "red" }}
                  onClick={() => handleDeleteItem(index)}
                >
                  Delete
                </p>
              </div>
            </div>
            <hr />
          </>
        ))}
      </div>
    </>
  );
};

export default CartItem;
