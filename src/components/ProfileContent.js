import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ProfileIcon from '@material-ui/icons/Person';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos';
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import PaymentIcon from '@material-ui/icons/Payment';
import ReceiptIcon from '@material-ui/icons/Receipt';
import PeopleIcon from '@material-ui/icons/People';
import DescriptionIcon from '@material-ui/icons/Description';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 'auto',
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  listItem: {
    height: '7vh',
    padding: '3vh',
  }
}));

export default function ProfileContent() {
  const classes = useStyles();

  const item = (icon, text) => (
      <ListItem className={classes.listItem}>
        <ListItemAvatar>
          {icon}
        </ListItemAvatar>
        <ListItemText primary={text} />
        <ListItemSecondaryAction>
          <IconButton edge="end">
            <ArrowForwardIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
  );


  return (
      <div style={{height: '100%', width: '100%', flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <List
            component="nav"
            className={classes.root}
        >
          {item(<ProfileIcon/>, "Mon Profil")}
          {item(<PaymentIcon/>, "Moyen de Paiement")}
          {item(<ReceiptIcon/>, "Mes Factures")}
          {item(<PeopleIcon/>, "Parrainage")}
          {item(<DescriptionIcon/>, "CGU - CGV")}
          {item(<MailOutlineIcon/>, "FAQ")}
          {item(<ExitToAppIcon/>, "Quitter la démo")}
        </List>
      </div>
  );
}