import { useSelector } from "react-redux";

import BookCard from "../BookCard/BookCard";
import "./BookList.css";
import Nav from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function BookList() {
  const [showMoreBtnState, setShowMoreBtnState] = useState(true);
  function handleShowMoreCLick() {
    console.log(showMoreBtnState);
    setShowMoreBtnState(!showMoreBtnState);
  }
  let bookData = useSelector((state) => {
    return state.bookReducer.books;
  });
  if (showMoreBtnState) {
    bookData = bookData.slice(0, 10);
  }

  const bookList = bookData.map((book) => {
    return (
      <Link to={`/${book.id}`} className="link" state={book.id}>
        {" "}
        <BookCard
          key={book.id}
          title={book.title}
          description={book.description}
        />
      </Link>
    );
  });

  return (
    <>
      <Nav />
      <div className="cardList">{bookList}</div>
      <div className="showMore">
        <button className="showMoreBtn" onClick={handleShowMoreCLick}>
          Show More
        </button>
      </div>
    </>
  );
}
