import React from "react";
import "./App.css";

import Nav from "./navbar/nav";
import Bill from "./bill/bill";
import Product from "./product/product";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Bill} />
          <Route path="/products" component={Product} />
          <Route path="/bill" component={Bill} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
