import { useEffect } from 'react'

import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'



import Header from './components/layout/Header'
import Home from './pages/Home'
import MenuNavigation from './components/MenuNavigation'
import ProductDetails from './components/ProductDetails'
import CollectionPage from './pages/CollectionPage'
import Login from './components/user/Login'
import Register from './components/user/Register'
import Profile from './components/user/Profile'

import { loadUser } from './actions/userActions'
import store from './store'
import ProtectedRoute from './components/route/ProtectedRoute'
import UpdateProfile from './components/user/UpdateProfile'
import UpdatePassword from './components/user/UpdatePassword'
import ForgotPassword from './components/user/ForgotPassword'
import NewPassword from './components/user/NewPassword'
import Cart from './components/cart/Cart'


function App() {


  useEffect(() => {

    store.dispatch(loadUser())

  })


  return (
    <main>
      <Router>
        <Header />

        <MenuNavigation />
        <Route path="/" component={Home} exact />
        <Route path="/search/:keyword" component={CollectionPage} />
        <Route path="/product/:id" component={ProductDetails} exact />

        <Route path="/menscollection" component={CollectionPage} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <ProtectedRoute path="/me" component={Profile} exact />
        <ProtectedRoute path="/update/me" component={UpdateProfile} exact />
        <ProtectedRoute path="/password/update" component={UpdatePassword} exact />

        <Route
          path="/password/forgot"
          component={ForgotPassword}
          exact />
        <Route
          path="/password/reset/:token"
          component={NewPassword}
          exact />
        <Route
          path="/cart"
          component={Cart}
          exact />
      </Router>
     
     


    </main >
  );
}


export default App;
