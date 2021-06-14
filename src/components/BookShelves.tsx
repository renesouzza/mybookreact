import React from "react";
import BooksList from "./BooksList";

export default function BookShelves(props: any) {
  return (
    <React.Fragment>
      {props.shelves.map((shelf: any, index: number) => (
        <section key={index}>
          <h1>{getLabelShelf(shelf)}</h1>
          <BooksList
            shelf={shelf}
            books={props.books}
            alteraPreteleira={props.alteraPreteleira}
          />
        </section>
      ))}
    </React.Fragment>
  );
}

const getLabelShelf = (shelf: string) => {
  switch (shelf) {
    case "currentlyReading":
      return "Reading";
    case "wantToRead":
      return "To Read";
    case "read":
      return "Read";
    default:
      return "";
  }
};
