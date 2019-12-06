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

const useStyles = makeStyles(theme => ({
    card: {
        width: '90%',
        marginBottom: '10%',
        height: '22vh',
    },
    media: {
        height: 130,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
}));

export default ({title, text}) => {
    const classes = useStyles();
    const [dense] = React.useState(false);


    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography gutterBottom variant="h8" component="h8">
                    {title}
                </Typography>
                    <div className={classes.demo}>
                        <List dense={dense}>
                            {/*{generateList()}*/}
                            <ListItem alignItems="center">
                                <ListItemAvatar>
                                    <Avatar />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={text}
                                />
                            </ListItem>
                        </List>
                    </div>
            </CardContent>
        </Card>
    );
}