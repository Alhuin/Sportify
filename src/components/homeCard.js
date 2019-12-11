import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import FavIcontrue from '@material-ui/icons/Favorite';

const useStyles = makeStyles(theme => ({
    card: {
        width: '90%',
        marginBottom: '10%',
        height: '22vh',
        overflow: 'scroll',
    },
    media: {
        height: 130,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    favIcon: {
        position: 'absolute',
        right: 5,
        bottom: 30,
    },
    inline: {
      display: 'inline',
    },
}));

export default ({title, favorites, passes, removeFromFavorites}) => {
    const classes = useStyles();
    const [dense] = React.useState(false);

    const generateList = (passes, favorites) => {
        if (passes === null) {
            return favList(favorites);
        } else {
            return passList(passes);
        }
    };

    const favList = (favorites) => {
        if (favorites.length > 0) {
            return favorites.map((favorite, id) => (
              <div key={id} id={id}>
                  <ListItem alignItems="flex-start" style={{paddingTop: 20, paddingBottom: 20}}>
                      <ListItemAvatar>
                          <Avatar src={favorite.Lien}/>
                      </ListItemAvatar>
                    <ListItemText
                      primary={favorite.Nom}
                      secondary={
                        <React.Fragment>
                          <FavIcontrue className={classes.favIcon} onClick={() => removeFromFavorites(favorite)} />
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            À {favorite.distance} mètres.
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li"/>
              </div>
            ))
        } else {
            return (
              <ListItem alignItems="center">
                  <ListItemAvatar>
                      <Avatar />
                  </ListItemAvatar>
                  <ListItemText
                    primary={"Aucun favori à afficher."}
                  />
              </ListItem>
            );
        }
    };

    const passList = (passes) => {
        if (passes.length > 0) {

        } else {
            return (
              <ListItem alignItems="center">
                  <ListItemAvatar>
                      <Avatar />
                  </ListItemAvatar>
                  <ListItemText
                    primary={"Aucun pass à afficher."}
                  />
              </ListItem>
            );
        }
    };
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography gutterBottom variant="h8" component="h8">
                    {title}
                </Typography>
                    <div className={classes.demo}>
                        <List dense={dense}>
                            {generateList(passes, favorites)}
                        </List>
                    </div>
            </CardContent>
        </Card>
    );
}