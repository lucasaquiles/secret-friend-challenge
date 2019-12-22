import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Home from '../../pages/Home';
import ListDraw from '../../pages/ListDraw';

// import { Container } from './styles';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/draws" component={ListDraw} />
      </Switch>
    </BrowserRouter>
  );
}
