import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";

import TopMenu from './components/TopMenu';
import Home from './pages/Home';
import Products from './pages/Products';

import 'bootstrap/dist/css/bootstrap.min.css';

import {CartProvider} from './contexts/Cart'
class App extends Component {
  render(){
    return (
      <CartProvider>
        <Router>
          <TopMenu />
          <div className="App">
            
              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              <Switch>
                
                <Route path="/products">
                  <Products />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
          </div>
        </Router>
      </CartProvider>
      
      
    );
  }
  
}

export default App;
