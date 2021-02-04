import React, { Fragment, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Menu, Row, Col, Typography, Space, Button } from 'antd';
import LoginThumbnail from '../../components/user/LoginThumbnail'

import { logout } from '../../actions/userActions'
import { useAlert } from 'react-alert'



import { Route, Link } from 'react-router-dom'
import {
    AppstoreOutlined,
    SettingOutlined,
    UserOutlined,
    UserAddOutlined,
    LogoutOutlined,
    ShoppingOutlined,
    ShoppingCartOutlined
} from "@ant-design/icons";


import SearchBox from "../layout/SearchBox"

const { SubMenu } = Menu;


const Header = () => {

    const { user, error } = useSelector(state => state.auth)

    const [current, setCurrent] = useState("home");
    const dispatch = useDispatch()
    const alert = useAlert()

    const {cartItems} =useSelector(state=>state.cart)

    const logoutHandler = () => {
        dispatch(logout())
        alert.success("Wylogowano")
    }

    useEffect(() => {
        console.log("ładuję ponownie")
    }, [user])

    const handleClick = (e) => {
        // console.log(e.key);
        setCurrent(e.key);
    };

    return (
        <Fragment>
            <div className="container-fluid d-lg-none">
                <div className="row text-center">
                    <div className="col-12 " >
                        <Link to="/">
                            <img
                                className="img-fluid"
                                style={{ maxWidth: '244px', margin: '22px', cursor: 'pointer' }}
                                src="https://res.cloudinary.com/mckrus/image/upload/v1612181215/dsstreet/logo_vslmgt.png"
                                alt="logo"
                            />
                        </Link>

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
                <span style={{ marginLeft: "-212px" }}>Przesyłka gratis</span>
                <div >
                    <span>14 dniowe prawo zwrotu</span>

                </div>

            </div>
            <hr />

            <div className="row text-center">
                <div className="col-12 " >

                    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal"
                        className=" d-flex justify-content-between align-items-center"
                    >

                        <Menu.Item key="home" >
                            <Link to="/">
                                <img className="img-fluid"
                                    style={{ maxWidth: '244px', margin: '22px', cursor: 'pointer' }}
                                    src="https://res.cloudinary.com/mckrus/image/upload/v1612181215/dsstreet/logo_vslmgt.png"
                                    alt="logo" />
                            </Link>
                        </Menu.Item>


                        <Menu.Item key="search" >
                            <div>
                                <Route render={({ history }) => <SearchBox history={history} />} />
                            </div>
                        </Menu.Item>


                        <SubMenu key="SubMenu" icon={

                            user ?
                                (<figure className="avatar avatar-nav">
                                    <img
                                        src={user.avatar && user.avatar.url}
                                        alt={user && user.name}
                                        className="rounded-circle"
                                        style={{ maxWidth: '40px' }}
                                    />
                                </figure>
                                )
                                :
                                <Link to="/login">
                                    <i className="far fa-heart  m-2"></i>
                                </Link>
                        }

                            title={user ? ("Witaj " + user.name) :

                                (
                                    <Link to="/login"><span>Zaloguj się</span></Link>
                                )


                            }>

                            {!user ?


                                <Menu.ItemGroup
                                    title="Item 1"
                                    style={{ width: 'auto', height: '444px', padding: "10px" }}
                                >
                                    <div>
                                        <LoginThumbnail />
                                    </div>

                                </Menu.ItemGroup>
                                :
                                <Menu.ItemGroup
                                    title="Item 1"
                                    style={{ width: 'auto', height: 'auto', padding: "10px" }}
                                >
                                    <Menu.Item key="setting:1">

                                        <div className="btn btn-danger"
                                            onClick={logoutHandler}
                                        >
                                            Wyloguj się
                                </div>

                                    </Menu.Item>
                                    <Menu.Item key="setting:1">Moje konto</Menu.Item>

                                </Menu.ItemGroup>
                            }

                        </SubMenu>


                        <Menu.Item key="favourite">
                            <div className="favourite d-flex flex-column text-center mx-3">
                                <i className="far fa-heart  m-2"></i>
                                <span>Ulubione</span>

                            </div>
                        </Menu.Item>

                        <Menu.Item key="cart">
                            <div className="cart d-flex flex-column text-center mx-3" >
                                <i className="fas fa-shopping-cart  m-2"></i>
                                <span>Koszyk</span>
                                <span>{cartItems.length}</span>

                            </div>
                        </Menu.Item>
                    </Menu >

                </div>
            </div>




        </Fragment >
    )
}

export default Header
