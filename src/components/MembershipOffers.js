import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
          <Paper className={classes.paper} onClick={()=>handleClick('Iron Man')}>
            Offre Iron Man
          </Paper>
        </Grid>
        <Grid
          item
          xs={10}
        >
          <Paper className={classes.paper} onClick={()=>handleClick('Machin')}>
            Offre Machin
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}