import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import { productsReducer, productDetailsReducer, } from './reducers/productReducers'

import { authReducer, registerReducer, logoutReducer, userReducer, forgotPasswordReducer } from './reducers/authReducer'

import { cartReducer } from './reducers/cartReducer'


const reducer = combineReducers({
    products: productsReducer,
    productDetails: productDetailsReducer,
    auth: authReducer,
    register: registerReducer,
    logout: logoutReducer,
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
    cart: cartReducer
})

let initialState = {
 cart:{
     cartItems:localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
 }
}

const middlware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)))

export default store;