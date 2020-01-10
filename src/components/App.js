import React from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from './Common/Header/Header';
import Home from "./Home/Home";
import Footer from "./Common/Footer/Footer";
import ProductListingPage from "./ProductListingPage/ProductListingPage";

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/category" component={ProductListingPage} />
      </Switch>
      <Footer/>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;