import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";

import BookIcon from "@material-ui/icons/Book";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    // width: 300
  },
  paper: {
    backgroundColor: "rgb(217, 198, 246)",
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    maxHeight: "100%",
  },
}));

export default function BooksCard(props: any) {
  const classes = useStyles();
  const [shelf, setShelf] = React.useState(props.book.shelf);

  useEffect(() => {
    if (shelf === props.book.shelf) {
      return;
    }
    props.alteraPreteleira(props.book, shelf);
  }, [shelf]);

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container>
            <Grid item>
              <Link to={"/book?id=" + props.book.id}>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="complex"
                    src={"imageLinks" in props.book ? props.book.imageLinks.thumbnail : "http://books.google.com/books/content?id=1yx1tgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"}
                  />
                </ButtonBase>
              </Link>
              <BottomNavigation
                value={props.book.shelf}
                onChange={(event, newValue) => {
                  setShelf(newValue);
                }}
                showLabels
                className={classes.root}
              >
                <BottomNavigationAction
                  label="Reading"
                  value="currentlyReading"
                  icon={<ChromeReaderModeIcon />}
                />
                <BottomNavigationAction
                  label="To Read"
                  value="wantToRead"
                  icon={<FavoriteIcon />}
                />
                <BottomNavigationAction
                  label="Read"
                  value="read"
                  icon={<BookIcon />}
                />
              </BottomNavigation>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </React.Fragment>
  );
}
