import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../public/bodoni-logo.jpg';
import { StylesProvider } from "@material-ui/core/styles";
import Collapsible from 'react-collapsible';
import { Link, withRouter } from "react-router-dom";
import '../styles/Navigationbar.css';

const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  toolbar: theme.mixins.toolbar,
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));


function Navigationbar(props) {
  const classes = useStyles();

  return(
    <StylesProvider injectFirst>
      <nav className={classes.drawer} >
          <div className={classes.toolbar} />
              <ul>
                <img src={logo} alt="Soumitri Vadali" style={{marginBottom: "1rem"}} height="40%" width="40%"/>
                <li>
                  <Link to="/" className="link">Home</Link>
                </li>
                <li>
                  <Collapsible triggerStyle={{cursor: "pointer"}} className="link" trigger="Portfolio">
                    <ul className={classes.nested}>
                      <li>
                        <Link to="/product" className="link">Product</Link>
                      </li>
                      <li>
                        <Link to="/fashion" className="link">Fashion</Link>
                      </li>
                      <li>
                        <Link to="/portrait" className="link">Portraiture</Link>
                      </li>
                    </ul>
                  </Collapsible>
                </li>
              </ul>
              <ul>
                <li>
                <Link to="/about" className="link">About</Link>
                </li>
                <li>
                <Link to="/contact" className="link">Contact</Link>
                </li>
              </ul>
      </nav>
    </StylesProvider>
  );
}

export default withRouter(Navigationbar);
