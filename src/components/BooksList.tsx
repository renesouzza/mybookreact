import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import BookCard from "./BookCard";

export default function BooksList(props: any) {
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    // console.log(props);
    buscaLista(setList);
  }, [props.shelf]);

  const buscaLista = async (setList: any) => {
    const resposta = props.books.filter(function (item: any) {
      return item.shelf === props.shelf;
    });
    setList(resposta);
  };

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        {list.map((book: any, index: number) => (
          <BookCard
            key={index}
            book={book}
            alteraPreteleira={props.alteraPreteleira}
          />
        ))}
      </Grid>
    </React.Fragment>
  );
}
