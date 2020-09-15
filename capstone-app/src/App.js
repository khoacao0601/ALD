import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navigation from './components/Navigation';
import NavStatic from './components/NavStatic';
import Footer from './components/Footer';
import useAuth from './auth/UseAuth';
import SignInForm from './auth/SignInForm';
import SignOutButton from './auth/SignOutButton';
import ShopAll from './auth/ShopAll';
import ProductPage from './auth/ProductPage';
import ProtectedRoute from './auth/ProtectedRoute'
import Home from './components/Home'
import { auth } from 'firebase';

function App() {
  const {isLoading, user } = useAuth();
  return (
    <BrowserRouter>
      {/* <Navigation /> */}
      <NavStatic />
      <Switch>
        <Route exact path='/' component={SignInForm} />
        <Route path='/signup' />
        <Route path='/subscribe' />
        {/* <Route path='/home' component={Home} /> */}
        <Route path='/logout' component={SignOutButton}/>
        <ProtectedRoute isAuthed={!!user} isLoading={isLoading} path='/home' component={Home} />
        <ProtectedRoute isAuthed={!!user} isLoading={isLoading} path='/shop-all' component={ShopAll} />
        <ProtectedRoute isAuthed={!!user} isLoading={isLoading} exact path='/profile/:id' />
        <ProtectedRoute isAuthed={!!user} isLoading={isLoading} path='/news' />
        <ProtectedRoute isAuthed={!!user} isLoading={isLoading} path='/about' />
        <ProtectedRoute isAuthed={!!user} isLoading={isLoading} path='/store' />
        <ProtectedRoute isAuthed={!!user} isLoading={isLoading} path='/inspiration' />
        <ProtectedRoute isAuthed={!!user} isLoading={isLoading} exact path='/collections/:id' />
        <ProtectedRoute isAuthed={!!user} isLoading={isLoading} exact path='prior/collections/:id' />
        <ProtectedRoute isAuthed={!!user} isLoading={isLoading} exact path='/shop/:id' component={ProductPage} />
        <ProtectedRoute isAuthed={!!user} isLoading={isLoading} exact path='/lookbook/:id' />
        <ProtectedRoute isAuthed={!!user} isLoading={isLoading} path='/checkout' />
        {/* <ProtectedRoute path='/logout' component={SignOutButton}/> */}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
