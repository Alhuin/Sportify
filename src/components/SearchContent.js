import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import partners from './partners.js';
import FavIconfalse from '@material-ui/icons/FavoriteBorder';
import FavIcontrue from '@material-ui/icons/Favorite';
import LocationIcon from '@material-ui/icons/LocationOn';
import Chip from "@material-ui/core/Chip";
import CircularProgress from "@material-ui/core/CircularProgress";


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  favIcon: {
    position: 'absolute',
    right: 5,
    bottom: 20,
  }
}));

export default function SearchContent({ favorites, addToFavorites, removeFromFavorites, setFirstSearch, firstSearch, history }) {
  const classes = useStyles();

  const favIcon = (partner) => {
    return (favorites.some(e => e.id === partner.id)
        ? <FavIcontrue className={classes.favIcon} onClick={() => removeFromFavorites(partner)} />
        : <FavIconfalse className={classes.favIcon} onClick={() => addToFavorites(partner)} />)
  };

  const lastMargin = (id) => (id === 18 ? 67 : 0);

  const listStructure = (partners) => {
    if (partners) {
      return partners.map((partner, id) => (
        <div key={id} id={id} style={{marginBottom: lastMargin(id)}}>
          <ListItem alignItems="flex-start" style={{paddingTop: 20, paddingBottom: 20}}>
            <ListItemAvatar>
              <Avatar src={partner.Lien}/>
            </ListItemAvatar>
            <ListItemText
                primary={partner.Nom}
                secondary={
                  <React.Fragment>
                    {favIcon(partner)}
                    <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                    >
                      À {partner.distance} mètres
                    </Typography>
                  </React.Fragment>
                }
                onClick={() =>{
                  history.push({
                      pathname : '/partner',
                      state :{
                        partner : partner,
                      }
                    }
                  );
                }}
            />
          </ListItem>
          <Divider variant="inset" component="li"/>
        </div>
      ))
    }
  };

  const [isLoading, setIsLoading] = useState(firstSearch);
  if (firstSearch){
    setTimeout(() => setIsLoading(false), 1500);
    setFirstSearch(false);
  }

  return(
    <div style={{height: '100%', width: '100%'}}>
        <Chip
          variant="outlined"
          size="small"
          avatar={<LocationIcon/>}
          label="Salles partenaires autour de vous"
          style={{marginLeft: '12.5%', marginTop: '2vh', width: '75%'}}
        />
        {isLoading
            ?
                <>
                    <CircularProgress color="secondary" style={{position:'absolute', top: '50%', left: 'calc(50% - 20px)'}}/>
                </>
            :
                <>
                    <List className={classes.root}>{listStructure(partners)}</List>
                </>
        }
    </div>
  );
}