import React from 'react';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import Navbar from './Navbar';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/badges" exact component={Badges} />
          <Route path="/badges/new" exact component={BadgeNew} />
          <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
  );
};

export default App;
