import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import { ThemeProvider } from '@material-ui/styles'
import { makeStyles } from '@material-ui/core/styles';
import themes from './MuiThemes.js'

const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  textStyles: {
    fontFamily: 'Proxima-Nova',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: '200px'
  }
}));

function Navigationbar(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const drawer = (
    <div className={classes.drawer}>
      <p> Soumitri 7 </p>
      <List>
        <ThemeProvider theme={themes}>
          <ListItem button key={'Home'} >
            <ListItemText primary={'Home'} className={classes.textStyles}/>
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
        </ThemeProvider>
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
  );

  return (
    <div className={classes.root}>
      <nav className={classes.drawer} aria-label="mailbox folders">
          <Drawer
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <p>Hello World</p>
      </main>
    </div>
  );
}

export default Navigationbar;
