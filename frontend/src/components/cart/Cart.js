import React, { useEffect, useState, Fragment } from 'react'

import { Button, Input } from 'antd'
import { Link } from 'react-router-dom'

import { addItemToCart, removeFromCart } from '../../actions/cartActions'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData'

const Cart = () => {

    const [quantity, setQuantity] = useState(1)


    const dispatch = useDispatch()

    const { cartItems } = useSelector(state => state.cart)
    const { loading, error, product } = useSelector(state => state.productDetails)

    const increaseQty = (id, quantity, stock) => {
        const newQty = quantity + 1

        if(newQty > stock) return
        dispatch(addItemToCart(id, newQty))
    }
    const decreaseQty = (id, quantity) => {
        const newQty = quantity -1

        if (newQty <=0) return
        dispatch(addItemToCart(id, newQty))
    }

    const removeCartItemHandler=(id)=>{
        dispatch(removeFromCart(id))
    }


    return (
        <Fragment>
            {cartItems.length === 0 ? <h3>Twój koszyk jest pusty</h3> : (
                <Fragment>
                    <h2 className="mt-5">Twój koszyk: <b>{cartItems.length} pozycji</b></h2>

                    <div className="row d-flex justify-content-between">
                        <div className="col-12 col-lg-8">

                            {cartItems.map(item => (
                                <Fragment>
                                    <hr />

                                    <div className="cart-item" key={item.product}>
                                        <div className="row">
                                            <div className="col-4 col-lg-3">
                                                <img src={item.image} alt="Laptop" height="90" width="115" className="img-fluid"/>
                                            </div>

                                            <div className="col-5 col-lg-3">
                                                <Link to={`/products/${item.product}`}>{item.name}</Link>
                                            </div>


                                            <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                                                <p id="card_item_price">{item.price}zł</p>
                                            </div>

                                            <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                                                <div className="stockCounter d-inline">
                                                    <span className="btn btn-danger minus" onClick={() => decreaseQty(item.product, item.quantity)}>-</span>

                                                    <input type="number" className="form-control count d-inline" value={item.quantity} readOnly />

                                                    <span className="btn btn-primary plus" onClick={() => increaseQty(item.product, item.quantity, item.stock)}>+</span>
                                                </div>
                                            </div>

                                            <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                                                <i id="delete_cart_item" className="fa fa-trash btn btn-danger" onClick={() => removeCartItemHandler(item.product)} ></i>
                                            </div>

                                        </div>
                                    </div>
                                    <hr />
                                </Fragment>
                            ))}

                        </div>

                        <div className="col-12 col-lg-3 my-4">
                            <div id="order_summary">
                                <h4>Podsumowanie zamówienia</h4>
                                <hr />
                                <p>ilość:  <span className="order-summary-values">{cartItems.reduce((acc, item) => (acc + Number(item.quantity)), 0)} Produktów</span></p>
                                <p>W sumie do zapłaty: <span className="order-summary-values">{cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2) } zł</span></p>

                                <hr />
                                <button id="checkout_btn" className="btn btn-primary btn-block" >Do Kasy</button>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}



        </Fragment >
    )
}

export default Cart
