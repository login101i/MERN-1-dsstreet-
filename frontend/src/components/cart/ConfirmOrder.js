import React, { useEffect, useState, Fragment } from 'react'
import { countries } from 'countries-list'

import { Button} from 'antd'
import { Link } from 'react-router-dom'

import { saveShippingInfo } from '../../actions/cartActions'
import { useDispatch, useSelector } from 'react-redux'
import { HeartOutlined } from "@ant-design/icons"
import { useAlert } from 'react-alert'
import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData'
import CheckoutSteps from './CheckoutSteps'

const ConfirmOrder = ({history}) => {


  const { cartItems, shippingInfo } = useSelector(state => state.cart)
  const { user } = useSelector(state => state.auth)

  // Calculate Order Prices
  const itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const shippingPrice = itemsPrice > 200 ? 0 : 25
  const taxPrice = Number((0.19 * itemsPrice).toFixed(2))
  const totalPrice = (itemsPrice + shippingPrice + taxPrice).toFixed(2)

  const processToPayment = () => {
    const data = {
      itemsPrice: itemsPrice.toFixed(2),
      shippingPrice,
      taxPrice,
      totalPrice
    }

    sessionStorage.setItem('orderInfo', JSON.stringify(data))
    history.push('/payment')
  }



  return (
    <Fragment>
      <MetaData tittle="Potwierdzenie zamóienie" />
      <CheckoutSteps login shipping confirmOrder/>

      <div className="row d-flex justify-content-between">
        <div className="col-12 col-lg-8 mt-5 order-confirm">

          <h4 className="mb-3">Dostawa</h4>
          <p><b>Imię:</b> {user && user.name}</p>
          <p><b>Nazwisko:</b>{shippingInfo.surname}</p>

          <p><b>Telefon:</b> {shippingInfo.phoneNo}</p>
          <p className="mb-4"><b>Adres:</b> {`${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.postalCode}, ${shippingInfo.country}`}</p>

          <hr />
          <h4 className="mt-4">Twój koszyk:</h4>

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

              
                </div>
                <strong
                  className=" mt-4 mt-lg-0 d-inline">
                  Suma {cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)} zł
                                                </strong>




              </div>
              <hr />
            </Fragment>
          ))}



        </div>

        <div className="col-12 col-lg-3 my-4">
          <div id="order_summary">
            <h4>Podsumowanie zamówienia</h4>
            <hr />
            <p>Razem:  <span className="order-summary-values">{itemsPrice} zł</span></p>
            <p>Dostawa: <span className="order-summary-values">{shippingPrice} zł</span></p>
            <p>Podatek:  <span className="order-summary-values">{taxPrice} zł</span></p>

            <hr />

            <p>W sumie: <span className="order-summary-values">{totalPrice} zł</span></p>

            <hr />
            <button id="checkout_btn" className="btn btn-primary btn-block" onClick={processToPayment}>Przejdź do płatności</button>
          </div>
        </div>


      </div>
    </Fragment>

  )
}

export default ConfirmOrder
