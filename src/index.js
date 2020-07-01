import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// styles
import "assets/css/nucleo-icons.css";
import "assets/css/rez.css";
import "assets/scss/blk-design-system-pro-react.scss";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";

// Palta Tech Pages
import Index from "./pages/Index";
import Michroma from "./pages/Michroma";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/michroma" render={(props) => <Michroma {...props} />} />
      <Route path="/" render={(props) => <Index {...props} />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
