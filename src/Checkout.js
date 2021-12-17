import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import Subtotal from "./Subtotal";
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className={basket.length > 0 ? "checkout" : undefined}>
      {basket?.length === 0 ? (
        <div className="checkout_emptyContainer">
          <h2>Your Shopping Basket is empty</h2>
          <Link to="/">
            <button className="checkout_button">Go Back</button>
          </Link>
          <p>Click on add to basket in Home to buy..!!</p>
        </div>
      ) : (
        <div className="checkout_fullContainer">
          <h2>Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
      <div className={basket?.length > 0 ? "checkout__right" : ""}>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
