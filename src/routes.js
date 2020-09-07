import React from "react";
import App from './components/App';

const routes = {
  "/": () => <App content={"main"}/>,
  "/portrait": () => <App content={"portrait"}/>,
  "/fashion": () => <App content={"fashion"}/>,
  "/product": () => <App content={"product"}/>,
  "/about": () => <App content={"about"}/>,
  "/contact": () => <App content={"contact"}/>
};
export default routes;
