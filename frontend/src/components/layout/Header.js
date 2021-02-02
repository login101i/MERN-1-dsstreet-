import React, { Fragment } from 'react'


import { Link } from 'react-router-dom'
import {
    AppstoreOutlined,
    SettingOutlined,
    UserOutlined,
    UserAddOutlined,
    LogoutOutlined,
    ShoppingOutlined,
    ShoppingCartOutlined
} from "@ant-design/icons";


import SearchBox from '../SearchBox'


const Header = () => {
    return (
        <Fragment>
            <div className="container-fluid d-lg-none">
                <div className="row text-center">
                    <div className="col-12 " >

                        <img
                            className="img-fluid"
                            style={{ maxWidth: '244px', margin: '22px' }}
                            src="https://res.cloudinary.com/mckrus/image/upload/v1612181215/dsstreet/logo_vslmgt.png"
                            alt="logo"
                        />

                    </div>
                </div>
            </div>
            <div className="container-flex d-flex justify-content-between mx-5 pt-1  mt-2 d-md-none d-lg-flex">
                <div >
                    <span className="pr-2"
                        style={{ borderRight: '2px solid rgb(224,224,224)' }}>POMOC</span>
                    <span
                        className="px-2"
                        style={{ borderRight: '2px solid rgb(224,224,224)' }}>NEWSLETTER</span>

                    <span className="px-2">INFOLINIA 42 278 44 44</span>
                </div>
                <span style={{marginLeft:"-212px"}}>Przesyłka gratis</span>
                <div >
                    <span>14 dniowe prawo zwrotu</span>

                </div>

            </div>
            <hr />
            <div className="row justify-content-between" >
                <img className="img-fluid"
                    style={{ maxWidth: '244px', margin: '22px' }}
                    src="https://res.cloudinary.com/mckrus/image/upload/v1612181215/dsstreet/logo_vslmgt.png"
                    alt="logo" />


                <SearchBox />

                <div className="icons d-flex align-self-center">

                    <div className="login d-flex flex-column text-center mx-3">
                        <i className="far fa-user m-2"></i>
                        <span>Zaloguj się</span>
                    </div>
                    <div className="favourite d-flex flex-column text-center mx-3">
                        <i className="far fa-heart  m-2"></i>
                        <span>Ulubione</span>

                    </div>
                    <div className="cart d-flex flex-column text-center mx-3" >
                        <i className="fas fa-shopping-cart  m-2"></i>
                        <span>Koszyk</span>

                    </div>


                </div>
            </div>
            <hr />




        </Fragment>
    )
}

export default Header
