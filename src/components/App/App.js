import BookList from "../BookList/BookList.js";

import { Route, Routes } from "react-router-dom";

import BookDetails from "../BookDetails/BookDetails.js";

import Cart from "../Cart/Cart.js";

import MyOrders from "../MyOrders/myOrders.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/:id" element={<BookDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<MyOrders />} />
      </Routes>
    </>
  );
}

export default App;
