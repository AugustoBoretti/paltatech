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
import "assets/scss/blk-design-system-pro-react.scss?v1.0.0";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";

// presentation pages
import IndexOld from "src/oldViews/Index.jsx";
import Presentation from "src/oldViews/Presentation.jsx";
import Sections from "src/oldViews/Sections.jsx";
// example pages
import AboutUs from "src/oldViews/examples/AboutUs.jsx";
import BlogPost from "src/oldViews/examples/BlogPost.jsx";
import BlogPosts from "src/oldViews/examples/BlogPosts.jsx";
import ContactUs from "src/oldViews/examples/ContactUs.jsx";
import LandingPage from "src/oldViews/examples/LandingPage.jsx";
import Pricing from "src/oldViews/examples/Pricing.jsx";
import Ecommerce from "src/oldViews/examples/Ecommerce.jsx";
import ProductPage from "src/oldViews/examples/ProductPage.jsx";
import ProfilePage from "src/oldViews/examples/ProfilePage.jsx";
import Error404 from "src/oldViews/examples/Error404.jsx";
import Error500 from "src/oldViews/examples/Error500.jsx";
import AccountSettings from "src/oldViews/examples/AccountSettings.jsx";
import LoginPage from "src/oldViews/examples/LoginPage.jsx";
import RegisterPage from "src/oldViews/examples/RegisterPage.jsx";
import ResetPage from "src/oldViews/examples/ResetPage.jsx";
import InvoicePage from "src/oldViews/examples/InvoicePage.jsx";
import CheckoutPage from "src/oldViews/examples/CheckoutPage.jsx";
import ChatPage from "src/oldViews/examples/ChatPage.jsx";
// Mate Tech Pages
import Index from "pages/Index";

/*ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <IndexOld {...props} />} />
      <Route
        path="/presentation"
        render={(props) => <Presentation {...props} />}
      />
      <Route path="/sections" render={(props) => <Sections {...props} />} />
      <Route path="/about-us" render={(props) => <AboutUs {...props} />} />
      <Route path="/blog-post" render={(props) => <BlogPost {...props} />} />
      <Route path="/blog-posts" render={(props) => <BlogPosts {...props} />} />
      <Route path="/contact-us" render={(props) => <ContactUs {...props} />} />
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route path="/pricing" render={(props) => <Pricing {...props} />} />
      <Route path="/ecommerce" render={(props) => <Ecommerce {...props} />} />
      <Route
        path="/product-page"
        render={(props) => <ProductPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route path="/404-error" render={(props) => <Error404 {...props} />} />
      <Route path="/500-error" render={(props) => <Error500 {...props} />} />
      <Route
        path="/account-settings"
        render={(props) => <AccountSettings {...props} />}
      />
      <Route path="/login-page" render={(props) => <LoginPage {...props} />} />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Route path="/reset-page" render={(props) => <ResetPage {...props} />} />
      <Route
        path="/invoice-page"
        render={(props) => <InvoicePage {...props} />}
      />
      <Route
        path="/checkout-page"
        render={(props) => <CheckoutPage {...props} />}
      />
      <Route path="/chat-page" render={(props) => <ChatPage {...props} />} />
      <Route path="/" render={(props) => <Index {...props} />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);*/

ReactDOM.hydrate(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <IndexOld {...props} />} />
      <Route
        path="/presentation"
        render={(props) => <Presentation {...props} />}
      />
      <Route path="/sections" render={(props) => <Sections {...props} />} />
      <Route path="/about-us" render={(props) => <AboutUs {...props} />} />
      <Route path="/blog-post" render={(props) => <BlogPost {...props} />} />
      <Route path="/blog-posts" render={(props) => <BlogPosts {...props} />} />
      <Route path="/contact-us" render={(props) => <ContactUs {...props} />} />
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route path="/pricing" render={(props) => <Pricing {...props} />} />
      <Route path="/ecommerce" render={(props) => <Ecommerce {...props} />} />
      <Route
        path="/product-page"
        render={(props) => <ProductPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route path="/404-error" render={(props) => <Error404 {...props} />} />
      <Route path="/500-error" render={(props) => <Error500 {...props} />} />
      <Route
        path="/account-settings"
        render={(props) => <AccountSettings {...props} />}
      />
      <Route path="/login-page" render={(props) => <LoginPage {...props} />} />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Route path="/reset-page" render={(props) => <ResetPage {...props} />} />
      <Route
        path="/invoice-page"
        render={(props) => <InvoicePage {...props} />}
      />
      <Route
        path="/checkout-page"
        render={(props) => <CheckoutPage {...props} />}
      />
      <Route path="/chat-page" render={(props) => <ChatPage {...props} />} />
      <Route path="/" render={(props) => <Index {...props} />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
