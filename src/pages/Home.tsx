import React from "react";
import BookShelves from "../components/BookShelves";

export default function Home(props: any) {
  return (
    <React.Fragment>
      <BookShelves
        books={props.books}
        shelves={props.shelves}
        alteraPreteleira={props.alteraPreteleira}
        procuraLivro={props.procuraLivro}
      />
    </React.Fragment>
  );
}
