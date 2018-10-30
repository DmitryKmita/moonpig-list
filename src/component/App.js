import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ListPage from "./ListPage/ListPage";
import ProductPage from "./ProductPage/ProductPage";
import './App.scss';

class App extends Component {
  render() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div>
                <Route exact path="/" component={ListPage} />
                <Route path="/product/:slug/:id" component={ProductPage} />
            </div>
        </Router>
    );
  }
}

export default App;
