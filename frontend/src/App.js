import { useEffect, useState } from 'react'

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
import Shipping from './components/cart/Shipping'
import ConfirmOrder from './components/cart/ConfirmOrder'
import Payment from './components/cart/Payment'
import axios from 'axios'



// Payment
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'


function App() {
  const [stripeApiKey, setStripeApiKey] = useState('');

  useEffect(() => {
    store.dispatch(loadUser())

    async function getStripeApiKey() {
      const { data } = await axios.get('/api/v1/stripeapi');
      console.log('To jest stripeApi')
      console.log(data)

      setStripeApiKey(data.stripeApiKey)
    }

    getStripeApiKey();

  }, [])

  return (
    <main>
      <Router>
        <div className="stylWithoutStipe">
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
          <ProtectedRoute
            path="/shipping"
            component={Shipping}
            exact />
          <ProtectedRoute
            path="/order/confirm"
            component={ConfirmOrder}
            exact />

        </div>

        {stripeApiKey &&
          <Elements stripe={loadStripe(stripeApiKey)}>
            <ProtectedRoute path="/payment" component={Payment} />
          </Elements>
        }


      </Router>




    </main >
  );
}


export default App;
