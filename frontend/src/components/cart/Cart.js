import React, { useEffect, useState, Fragment } from 'react'

import { Button, Input, Card, Space, Jumbotron } from 'antd'
import { Link } from 'react-router-dom'

import { addItemToCart, removeFromCart } from '../../actions/cartActions'
import { useDispatch, useSelector } from 'react-redux'
import { HeartOutlined } from "@ant-design/icons"
import { useAlert } from 'react-alert'
import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData'

const { Search } = Input;


const Cart = ({history}) => {

    const [quantity, setQuantity] = useState(1)
    const shipment = 8.99
    console.log(typeof (shipment))

    const dispatch = useDispatch()

    const { cartItems } = useSelector(state => state.cart)
    const { loading, error, product } = useSelector(state => state.productDetails)

    const increaseQty = (id, quantity, stock) => {
        const newQty = quantity + 1

        if (newQty > stock) return
        dispatch(addItemToCart(id, newQty))
    }
    const decreaseQty = (id, quantity) => {
        const newQty = quantity - 1

        if (newQty <= 0) return
        dispatch(addItemToCart(id, newQty))
    }

    const removeCartItemHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkoutHandler=()=>{
history.push('./login?redirect=shipping')
    }

    return (
        <Fragment>
            {cartItems.length === 0 ? <h3>Twój koszyk jest pusty</h3> : (
                <Fragment>

                    <div className="row d-flex justify-content-between mt-4">
                        <div className="col-12 col-lg-9 ">

                            <div className="d-flex justify-content-center align-items-center"
                                style={{ background: "#F2F2F2", border: '1px solid grey', height: '60px' }}

                            >
                                <h5>KOSZYK</h5>

                            </div>

                            {cartItems.map(item => (
                                <Fragment>
                                    <hr />


                                    <div className="d-flex justify-content-between align-items-center px-5 "
                                        key={item.product}
                                    >
                                        <div className=" text-center">
                                            <img src={item.image} alt="Laptop" height="110" width="115" className="img-fluid" />
                                        </div>

                                        <div className="d-flex align-items-center "

                                        >
                                            <Link
                                                style={{ color: 'black', paddingRight: "22px" }}
                                                to={`/products/${item.product}`}>{item.name.substring(0, 20)}</Link>

                                           <strong >{item.price} zł</strong>
                                        </div>

                                        <div className=" mt-4 mt-lg-0 d-flex align-items-center">

                                            <span className="btn minus" onClick={() => decreaseQty(item.product, item.quantity)}><strong>-</strong></span>

                                            <input type="number" className=" count " value={item.quantity}
                                                style={{
                                                    background: 'white',
                                                    width: "33px",
                                                    height: '33px',
                                                    color: "black",
                                                    border: "2px solid black",
                                                    justifyContent: "center",
                                                    outline: 'none',
                                                    paddingLeft: '10px'
                                                }}
                                            />

                                            <span className="btn plus" onClick={() => increaseQty(item.product, item.quantity, item.stock)}><strong>+</strong></span>

                                        </div>
                                        <strong
                                            className=" mt-4 mt-lg-0 d-inline">
                                            Suma {cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)} zł
                                                </strong>


                                        <div className=" mt-4 mt-lg-0">
                                            <i id="delete_cart_item" className="fa fa-heart btn " color="black" onClick={() => removeCartItemHandler(item.product)} ></i>
                                        </div>

                                        <div className=" mt-4 mt-lg-0">
                                            <i id="delete_cart_item" className="fa fa-trash btn " color="black" onClick={() => removeCartItemHandler(item.product)} ></i>
                                        </div>


                                    </div>
                                    <hr />
                                </Fragment>
                            ))}

                        </div>


                        <div className="col-md-5 col-lg-3  ">
                            <Card
                                headStyle={{ color: "black", border: '1px solid grey', backgroundColor: '#F2F2F2' }}
                                title="Podsumowanie zamówienia" className="text-center " style={{ width: 340 }}>

                                <span className=" d-flex justify-content-between p-0 text">
                                    <p>ilość: </p>
                                    <div >{cartItems.reduce((acc, item) => (acc + Number(item.quantity)), 0)} Produktów</div>
                                </span>
                                <div className=" d-flex justify-content-between">
                                    <p>Wartość zamówienia: </p>
                                    <div className="order-summary-values">{cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)} zł</div>
                                </div>
                                <div className=" d-flex justify-content-between">
                                    <p>Dostawa </p>
                                    <div className="order-summary-values">+ {shipment} zł</div>
                                </div>
                                <hr />
                                <div className=" d-flex justify-content-between">
                                    <h5>Suma </h5>
                                    <h5 className="order-summary-values">{(cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0) + shipment).toFixed(2)} zł</h5>
                                </div>


                                <Button size="medium"
                                    style={{ background: "black", cursor: 'poiner', color: 'white' }}

                                    className="btn btn-dark btn-block py-1" 
                                    onClick={checkoutHandler}
                                    >Do Kasy</Button>

                            </Card>



                            <Card
                                headStyle={{ color: "black", border: '1px solid grey', backgroundColor: '#F2F2F2' }}
                                title="Podsumowanie zamówienia" className="text-center mt-4 " style={{ width: 340 }}>
                                <Search
                                    placeholder="Wpisz kod"
                                    allowClear
                                    enterButton="ok"
                                    size="large"
                                    color="black"

                                />

                            </Card>

                            <Card

                                className="p-1 mt-4 " style={{ width: 340, border: '1px solid grey' }}>

                                <p>Nie zwlekaj z zakupem, dodanie artykułów do koszyka nie oznacza ich rezerwacji.
Ceny i koszty dostawy podlegają przeliczeniu w trakcie finalizacji zamówienia.</p>

                            </Card>
                        </div>



                    </div>

                </Fragment>
            )}



        </Fragment >
    )
}

export default Cart
