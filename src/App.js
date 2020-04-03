import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';

export default function AutoGridNoWrap() {
    return (
    <div>
      <Header />
      <Switch>
        <Route path='/cards' component={Cards} />
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
}
