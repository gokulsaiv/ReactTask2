import { useSelector } from "react-redux";
import Nav from "../Navigation/Navigation";

import OrderCard from "../OrdersCard/OrderCard";

export default function MyOrders() {
  const OrderData = useSelector((state) => state.bookReducer.orders);

  const boughtItems = OrderData.map((book) => {
    return (
      <OrderCard
        key={book.id}
        title={book.title}
        description={book.description}
        price={book.price}
        author={book.author}
        pageCount={book.pageCount}
      />
    );
  });

  return (
    <>
      <Nav />

      {boughtItems}
    </>
  );
}
