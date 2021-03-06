import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import Signin from "./containers/Signin/Signin";
import Signup from "./containers/Signup/Signup";
import PrivateRoute from "./components/HOC/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn, getInitialData } from "./actions";
import Products from "./containers/Products/products";
import Orders from "./containers/Orders/orders";
import Category from "./containers/Category/Category";
import CarRequest from "./containers/carRequest/carRequest";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    dispatch(getInitialData());
  }, []);

  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/" exact component={Home}></PrivateRoute>
        <PrivateRoute path="/category" component={Category}></PrivateRoute>
        <PrivateRoute path="/products" component={Products}></PrivateRoute>
        <PrivateRoute path="/orders" component={Orders}></PrivateRoute>
        <PrivateRoute path="/carrequest" component={CarRequest}></PrivateRoute>
        <Route path="/signin" component={Signin}></Route>
        <Route path="/signup" component={Signup}></Route>
      </Switch>
    </div>
  );
}

export default App;
