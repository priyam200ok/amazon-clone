import React from "react";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";
function Subtotal() {
  const [{ basket }] = useStateValue();
  return basket?.length ? (
    <div className="subtotal">
      <p className="subtotal__basketheader">
        Your total Cost is ${basket.reduce((acc, item) => +item.price + acc, 0)}
      </p>
      <div className="subtotal__input">
        <input type="checkbox" aria-label="" />
        <p>Is this a gift</p>
      </div>
      <button>Proceed to Checkout</button>
    </div>
  ) : (
    <div></div>
  );
}

export default Subtotal;
