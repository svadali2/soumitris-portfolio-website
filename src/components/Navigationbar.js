import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import { StylesProvider } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles';
import '../styles/Navigationbar.css';
import Pictureviewer from './Pictureviewer.js';
//<img src={logo} alt="Soumitri Vadali" />
//import logo from '../../public/logo-tight.png';

const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: 430,
    flexGrow: 1
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  }
}));

function Navigationbar(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const drawer = (
    <div>
    <div className={classes.toolbar} />
      <div className={classes.drawer}>
        <List>
            <ListItem button key={'Home'} >
              <ListItemText primary={'Home'} />
            </ListItem>
            <ListItem button key={'Portfolio'} onClick={handleClick}>
              <ListItemText primary={'Portfolio'} />
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Product" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Portraiture" />
                </ListItem>
              </List>
            </Collapse>
        </List>
        <List>
            <ListItem button key={'About'}>
              <ListItemText primary={'About'} />
            </ListItem>
            <ListItem button key={'Contact'}>
              <ListItemText primary={'Contact'} />
            </ListItem>
        </List>
      </div>
    </div>
  );

  return (
    <StylesProvider injectFirst>
    <div className={classes.root}>
      <nav className={classes.drawer} >
          <Drawer
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
      </nav>
      <main className={classes.content}>
      <div className={classes.toolbar} />
          <Pictureviewer />
      </main>
    </div>
    </StylesProvider>
  );
}

export default Navigationbar;
