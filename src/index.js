/*!

=========================================================
* BLK Design System PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
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
import Index from "pages/Index";
import TestParallax from "./customComponents/Parallax/TestParallax";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/test" render={(props) => <TestParallax {...props} />} />
      <Route path="/" render={(props) => <Index {...props} />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
