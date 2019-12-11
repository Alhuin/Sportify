import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos';


function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    top: '200px',
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    height: 'calc(100% - 200px)',
  },
  card: {
    width: '100%',
    marginBottom: '10%',
    height: '100%',
    overflow: 'scroll',
  },
}));

export default function FullWidthTabs({passes, history}) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const passList = (passes) => {
    if (passes.length > 0) {
      return passes.map((pass, id) => (
        <div key={id} id={id}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar src={pass.Lien}/>
            </ListItemAvatar>
            <ListItemText
              primary={pass.Nom}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    À valider le {pass.date} entre {pass.begin} et {pass.end}.
                  </Typography>
                </React.Fragment>
              }
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() =>{
              history.push({
                    pathname : '/Pass',
                    state :{
                      pass : pass,
                    }
                  }
                );
              }}>
                <ArrowForwardIcon/>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          {passes.length > 1 &&
          <Divider variant="inset" component="li"/>
          }
        </div>
      ))
    } else {
      return (
        <ListItem alignItems="center">
          <ListItemAvatar>
            <Avatar/>
          </ListItemAvatar>
          <ListItemText
            primary={"Aucun pass à afficher."}
          />
        </ListItem>
      );
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Séances à venir" {...a11yProps(0)} />
          <Tab label="Séances passées" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Card className={classes.card}>
            <CardContent>
              <div className={classes.demo}>
                <List>
                  {passList(passes)}
                </List>
              </div>
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Card className={classes.card}>
            <CardContent>
              <div className={classes.demo}>
                <List>
                  <ListItem alignItems="center">
                    <ListItemAvatar>
                      <Avatar/>
                    </ListItemAvatar>
                    <ListItemText
                      primary={"Vos pass validés apparaîtront ici."}
                    />
                  </ListItem>
                </List>
              </div>
            </CardContent>
          </Card>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}