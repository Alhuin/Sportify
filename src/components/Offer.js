import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import PassesIcon from '@material-ui/icons/ConfirmationNumber';
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import LocationIcon from '@material-ui/icons/WhereToVote';
import PriceIcon from '@material-ui/icons/Euro';
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
}));

export default ({offer, partners, passes, price, handleClick}) => {
    const classes = useStyles();
    const [dense] = React.useState(false);


    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2" style={{textAlign: 'center'}}>
                    {offer}
                </Typography>
                <Grid item xs={12} md={6}>
                    <div className={classes.demo}>
                        <List dense={dense}>
                            <ListItem>
                                <ListItemIcon>
                                    <LocationIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={partners}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <PassesIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={passes}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <PriceIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={price}
                                />
                            </ListItem>
                        </List>
                    </div>
                </Grid>
            </CardContent>
            <CardActions style={{justifyContent: 'flex-end'}}>
                <Button size="small" color="primary"  onClick={() => handleClick(offer)}>
                    Lancer la démo >>
                </Button>
            </CardActions>
        </Card>
    );
}