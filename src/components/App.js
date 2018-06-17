import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Products from './Products';
import NoMatch from './NoMatch';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/products" component={Products} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
};

export default App;
