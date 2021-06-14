import React from "react";
import { useLocation } from "react-router";
import BookDetail from "../components/BookDetail";

export default function Book() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const book_id = params.get("id");

  return (
    <React.Fragment>
      <BookDetail book_id={book_id}/>
    </React.Fragment>
  );
}
