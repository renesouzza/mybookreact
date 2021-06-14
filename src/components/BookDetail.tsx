import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

import { get } from "../models/apibooks";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      // margin: 'auto',
      // maxWidth: 500,
    },
    image: {
      // width: 128,
      // height: 128,
    },
    img: {
      // margin: 'auto',
      // display: 'block',
      // maxWidth: '100%',
      // maxHeight: '100%',
    },
  }),
);

export default function BooksDetail(props: any) {
  const classes = useStyles();
  const [book, setBook] = React.useState<any>([]);

  useEffect(() => {
    buscaLivro(setBook);
  }, []);

  const buscaLivro = async (setBook: any) => {
    const reposta = await get(props.book_id);
    setBook(reposta);
  };

  if (book.length === 0) {
    return <React.Fragment></React.Fragment>;
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={0}>
        <Grid container spacing={2}>
          <Grid item xs={12} >
    {console.log(book)}
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={"imageLinks" in book ? book.imageLinks.thumbnail : "http://books.google.com/books/content?id=1yx1tgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                Title: {book.title}
                </Typography>
                <Typography gutterBottom variant="subtitle2"  color="textSecondary">
                Authors: {book.authors.join(" / ")}
                </Typography>
                <Typography gutterBottom variant="subtitle2"  color="textSecondary">
                Categoty: {"categories" in book ? book.categories.join(" / ") : "" }
                </Typography>
                <Typography variant="body2">
                {book.description}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
