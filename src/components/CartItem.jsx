import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const CartItem = () => {

  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>

      <h1>Shopping Cart</h1>

      {cartItems.map((item) => (
        <div key={item.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>

          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>Unit Price: ${item.price}</p>
          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() => dispatch(updateQuantity({ id: item.id, amount: 1 }))}>+</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(updateQuantity({ id: item.id, amount: -1 }))}>-</button>

          <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>

        </div>
      ))}

      <h2>Total Amount: ${totalAmount}</h2>

      <button onClick={() => alert("Coming Soon")}>Checkout</button>

      <br /><br />

      <Link to="/plants">
        <button>Continue Shopping</button>
      </Link>

    </div>
  );
};

export default CartItem;
