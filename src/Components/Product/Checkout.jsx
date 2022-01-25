import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
const Checkout = () => {

  const [totalPrice,setTotalPrice] = useState(100)

  const [show,setShow] = useState(true)

  const cartItems = useSelector((state) => state.product.cart);

//  const data =  cartItems.map(ele=> totalPrice.push((Math.ceil(ele.product.price * 76) * ele.quantity)))

  // console.log("cartItems-=-=-=>>>", cartItems);

  return (
    <div className="container my-4 text-center">
      <h1>Checkout </h1>

      <table class="table table-hover text-start">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((ele, index) => (
            <>
              <tr>
                <th scope="row">{index + 1}</th>
                <td>
                  <img height={40} src={ele.product.image} />
                </td>
                <td>{ele.product.title}</td>
                <td>{ele.quantity}</td>
                <td>
                  {" "}
                  {(Math.ceil(ele.product.price * 76) * ele.quantity).toFixed(
                    2
                  )}
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>

      <div
      style={{marginRight:'4.2em'}}
      className="d-flex justify-content-end align-items-center">
        <h5 >Total</h5>
        {/* <p>Rs.</p> */}
        <h5 className="ms-3">
                      
          {
          show ? cartItems.reduce((acc,ele)=> {acc +=(Math.ceil(ele.product.price * 76) * ele.quantity); acc.toFixed(); return acc },0).toFixed(2)
          :''
        }</h5>
      </div>
    </div>
  );
};

export default Checkout;
