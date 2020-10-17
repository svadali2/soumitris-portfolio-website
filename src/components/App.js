import React from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { originalImages, productImages, portraitImages, fashionImages } from '../utilities/constants.js';
import Content from './Content';
import Navigationbar from './Navigationbar';
import About from './About';
import Contact from './Contact';

const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
    width: '9%',
    height: '9%'
  },
  nested: {
    paddingLeft: theme.spacing(4),
  }
}));

function App(props) {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <Router>
          <Navigationbar />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
              <Route path="/" exact component={() => <Content images={originalImages} />} />
              <Route path="/fashion" exact component={() => <Content images={fashionImages} />} />
              <Route path="/portrait" exact component={() => <Content images={portraitImages} />} />
              <Route path="/product" exact component={() => <Content images={productImages} />} />
              <Route path="/about" exact component={() => <About />} />
              <Route path="/contact" exact component={() => <Contact />} />
            </Switch>
          </main>
        </Router>
      </div>
  );
}

export default App;
