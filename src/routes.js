import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './components/pages/Home';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer.js';

export default function Routes(){
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/products' component={Products} />
        <Route path='/signup' component={SignUp} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}