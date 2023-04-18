import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "../BookCard/BookCard";
import "./Cart.css";
import Nav from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import { actions } from "../../BookReducer";
import CartCard from "../CartCard/CartCard";
export default function Cart() {
  const checkOutDispactch = useDispatch();
  const adressDispactcher = useDispatch();
  const [adress, setAdressText] = useState("");

  const cartItemsData = useSelector((state) => state.bookReducer.cart);

  let totalCost = 0;
  const cartItems = cartItemsData.map((book) => {
    totalCost = totalCost + book.price;
    return (
      <CartCard
        key={book.id}
        title={book.title}
        price={book.price}
        description={book.description}
      />
    );
  });

  function handleInputChange(event) {
    setAdressText(event.target.value);
  }
  function handleCheckOut() {
    checkOutDispactch(actions.addToBought(cartItemsData));
  }
  function handleAdreessClick() {
    adressDispactcher(actions.addAdress(adress));
  }

  return (
    <>
      <Nav />
      <div className="cart">
        <div>
          <label htmlFor="text-input">Enter Address:</label>
          <input
            className="text-input"
            type="text"
            value={adress}
            onChange={handleInputChange}
          />
          <button className="btn" onClick={handleAdreessClick}>
            Add Address
          </button>
          <button className="btn">Edit Address</button>
        </div>
        {cartItemsData.length > 0 ? (
          <div className="cary-summary">
            <div className="cart-items">{cartItems}</div>
            <div className="total">
              <h3>Payment details</h3>
              <pre>Total Price of Items ${totalCost}</pre>
              <pre>Tax $5</pre>
              <pre>Shipping $7</pre>
              ----------------------------------------------------------
              <p>Total ${totalCost + 5 + 7}</p>
            </div>
            <div className="nav-btn">
              <Link>
                <button className="btn" onClick={handleCheckOut}>
                  Checkout
                </button>
              </Link>
              <Link to="/">
                <button className="btn">Cancel</button>
              </Link>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}
