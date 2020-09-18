import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/header/header.componant'
import HomePage from './pages/homepage/homepage.componant';
import Shop from './components/shop/shop.componant'

function App() {
  return (
    <div>
    <Header/>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={Shop} />
    </Switch>
    </div>
  );
}
export default App;
