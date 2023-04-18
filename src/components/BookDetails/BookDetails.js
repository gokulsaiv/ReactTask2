import { Link, useParams } from "react-router-dom";
import "./BookDetails.css";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../Navigation/Navigation";
import { actions } from "../../BookReducer";

export default function BookDetails() {
  const { id } = useParams();
  const card_dispatcher = useDispatch();
  const buyBtn_dispatcher = useDispatch();
  const book = useSelector((state) => state.bookReducer.books[id - 1]);
  function handleCartClick() {
    card_dispatcher(actions.addToCart(book));
  }
  function handleBuyBtnClick() {
    buyBtn_dispatcher(actions.addToCart(book));
  }

  return (
    <>
      <Nav title={book.title} />
      <div className="constainer">
        <div className="book-img"></div>
        <div className="details">
          <h2>{book.title}</h2>
          <h5>{book.author}</h5>
          <p>{book.price}</p>
          <p>{book.pageCount}</p>
          <div className="Nav-btn">
            <Link to="/cart">
              <button className="checkout-btn" onClick={handleBuyBtnClick}>
                Buy Now
              </button>
            </Link>
            <button className="checkout-btn" onClick={handleCartClick}>
              Add to Cart
            </button>
          </div>
          <p>{book.description}</p>
        </div>
      </div>
    </>
  );
}
