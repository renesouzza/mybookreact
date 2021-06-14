import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Book from "./pages/Book";

import ElevateAppBar from "./components/ElevateAppBar";
import { getAll, search, update, getShelves } from "./models/apibooks";

export default function App() {
  const [books, setBooks] = useState<any[]>([]);
  const [shelves, setShelves] = useState<any[]>([]);

  useEffect(() => {
    buscaLivros(setBooks);
  }, []);

  useEffect(() => {
    buscaPrateleiras(setShelves);
  }, [books]);

  const buscaLivros = async (setBooks: any) => {
    const reposta = await getAll();
    setBooks(reposta);

    return books;
  };

  const buscaPrateleiras = async (setShelves: any) => {
    const reposta = await getShelves(books);
    setShelves(reposta);
  };

  const alteraPreteleira = async (book: any, shelf: any) => {
    await update(book, shelf);
    const reposta = await buscaLivros(setBooks);
    setShelves(reposta);
  };

  const procuraLivro = async (queryBusca: string) => {
    if (queryBusca == "") {
      return
    }
    const reposta = await search(queryBusca);
    console.log(reposta);
    setBooks(reposta);
  };

  return (
    <Router>
      <ElevateAppBar procuraLivro={procuraLivro} />
      <Switch>
        <Route exact path="/">
          <Home
            books={books}
            shelves={shelves}
            alteraPreteleira={alteraPreteleira}
            procuraLivro={procuraLivro}
          />
        </Route>
        <Route path="/book">
          <Book />
        </Route>
      </Switch>
    </Router>
  );
}
