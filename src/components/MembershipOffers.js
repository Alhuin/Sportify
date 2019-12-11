import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Offer from "./Offer";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '30vh',
  },
}));

export default ({handleClick}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{height: '100%'}}
      >
        <Grid
          item
          xs={10}
        >
          <Offer offer="Découverte" partners="Deux salles partenaires / mois" passes="4 pass par salle" price="30" handleClick={handleClick}/>
        </Grid>
        <Grid
          item
          xs={10}
        >
          <Offer offer="Iron Man" partners="Toutes nos salles partenaires" passes="16 pass par mois" price="50" handleClick={handleClick}/>
        </Grid>
      </Grid>
    </div>
  );
}
