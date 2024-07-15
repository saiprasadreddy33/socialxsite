import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header_bar/Header";
import Home from "./components/Homepage/Home";
import Collection from "./components/Collection/Collection";
import ProductDetails from "./components/Product_details/ProductDetails";
import ProductAdded from "./components/Product_added/ProductAdded";
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/Footer/Footer";
import UserInfo from "./components/Checkout/checkout_mini/UserInfo";
import Payment from "./components/Checkout/checkout_mini/payment";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/essentials">
              <Collection />
            </Route>
            <Route exact path="/sellings">
              {/* Your Sellings component */}
            </Route>
            <Route exact path="/details">
              <ProductDetails />
            </Route>
            <Route exact path="/added">
              <ProductAdded />
            </Route>
            <Route exact path="/checkout">
              <Checkout />
            </Route>
            <Route exact path="/userinfo">
              <UserInfo />
            </Route>
            <Route exact path="/payment">
              <Payment />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
