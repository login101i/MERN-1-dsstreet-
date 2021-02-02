import React, { useState, useEffect } from 'react'
import { Radio, Row, Col, Image, BackTop } from 'antd'
import { Link, Redirect } from 'react-router-dom'

import SideBar from '../components/SideBar'
import Slider from '../components/Slider'
import MenuNavigation from '../components/MenuNavigation'
import MultiCarousel from '../components/Home/MultiCarousel'
import MultiCarouselNews from '../components/Home/MultiCarouselNews'
import MetaData from '../components/layout/MetaData'
import FadeInText from '../components/Home/FadeInText'
import SubscriptionForm from '../components/forms/SubscriprionForm'
import { useAlert } from 'react-alert'

import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productActions'



const Home = () => {
    const dispatch = useDispatch()
    const alert = useAlert()

    const { loading, products, error, productsCount } = useSelector(state => state.products)

    useEffect(() => {
        if (error) {
            return alert.error(error)
        }
        dispatch(getProducts())
        alert.success("Sukces w pobraniu")

    }, [dispatch, alert, error])

    const gotosite = () => {
        window.location.href = "https://google.com/contact";

    }

    const style = {
        height: 60,
        width: 60,
        lineHeight: '60px',
        borderRadius: 6,
        backgroundColor: '#666666',
        opacity: 0.7,
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
    };

    const goUpButton = () => (
        <>

            <BackTop
                visibilityHeight={2111}
            >
                <div style={style}>
                    <i className="fas fa-arrow-up"></i>

                </div>
            </BackTop>
        </>
    )


    const showGallery = () => (
        <>
            <MetaData title="Home Page" />
            <Row gutter={[8, 8]}>
                <Col span={4} >
                    <Image
                        className="hover2"
                        width={"100%"}
                        preview={false}
                        src="https://res.cloudinary.com/mckrus/image/upload/v1612202248/dsstreet/pol_il_Bluza-damska-EDITH-rozowa-BY0751-33129_pbbl3u.jpg"
                    />

                </Col>
                <Col span={4} >
                    <img src="https://res.cloudinary.com/mckrus/image/upload/v1612202248/dsstreet/pol_il_Bluza-damska-NESSY-brazowa-BY0716-33069_fqhcuh.jpg" alt="" className="img-fluid hover2" />
                </Col>
                <Col span={4} >
                    <img src="https://res.cloudinary.com/mckrus/image/upload/v1612202248/dsstreet/pol_il_Welurowy-komplet-damski-dresowy-LUNA-khaki-AY0413-32765_imkt0m.jpg" alt="" className="img-fluid hover2" />
                </Col>
                <Col span={4} >
                    <img src="https://res.cloudinary.com/mckrus/image/upload/v1612202248/dsstreet/pol_il_Bluza-damska-EDITH-rozowa-BY0751-33129_pbbl3u.jpg" alt="" className="img-fluid hover2" />
                </Col>
                <Col span={4} >
                    <img src="https://res.cloudinary.com/mckrus/image/upload/v1612202989/dsstreet/143821661_1063620594159346_2421080963454120280_n_zwuog6.jpg" alt="" className="img-fluid hover2" />
                </Col>
                <Col span={4} >
                    <img src="https://res.cloudinary.com/mckrus/image/upload/v1612202990/dsstreet/144972281_438585720828548_3819354390335548377_n_jfjao5.jpg" alt="" className="img-fluid hover2" />
                </Col>
            </Row>
            <Row gutter={[8, 8]}>
                <Col span={4} >
                    <Image
                        className=" hover2"
                        width={"100%"}
                        preview={false}
                        src="https://res.cloudinary.com/mckrus/image/upload/v1612202989/dsstreet/145985754_196503685495858_5051418038994799567_n_kfhbvx.jpg"
                    />

                </Col>
                <Col span={4} >
                    <img src="https://res.cloudinary.com/mckrus/image/upload/v1612202989/dsstreet/144426626_859198464654024_6161365081420986701_n_kkhwax.jpg" alt="" className="img-fluid hover2" />
                </Col>
                <Col span={4} >
                    <img src="https://res.cloudinary.com/mckrus/image/upload/v1612202989/dsstreet/144314094_886909948712055_8386648226173407694_n_xrygmi.jpg" alt="" className="img-fluid hover2" />
                </Col>
                <Col span={4} >
                    <img src="https://res.cloudinary.com/mckrus/image/upload/v1612202989/dsstreet/144820179_492415108408933_8545511421319732000_n_fkvywo.jpg" alt="" className="img-fluid hover2" />
                </Col>
                <Col span={4} >
                    <img src="https://res.cloudinary.com/mckrus/image/upload/v1612202989/dsstreet/144591832_439627387229352_5772851097913219638_n_gqijlk.jpg" alt="" className="img-fluid hover2" />
                </Col>
                <Col span={4} >
                    <img src="https://res.cloudinary.com/mckrus/image/upload/v1612202879/dsstreet/pol_il_Spodnie-damskie-jeansowe-CARY-niebieskie-UY0717-32864_ad7qiq.jpg" alt="" className="img-fluid hover2" />
                </Col>
            </Row>
        </>
    )


    return (
        <>
          
            <div className="row">
                <Slider />

                {/* <div className="col-md-4">
                    <SideBar />
                </div> */}

                <div className="images mt-3">

                    <Row gutter={[8, 8]}>
                        <Col span={12}>
                            <Image
                                className="hover"
                                width={"100%"}
                                preview={false}
                                src="https://res.cloudinary.com/mckrus/image/upload/v1612199154/dsstreet/1231-MYDX-BT2_aaq7dm.jpg"
                            />
                        </Col>
                        <Col span={12}>
                            <div onClick={gotosite}>

                                <Image
                                    className="hover"

                                    width={"100%"}
                                    preview={false}
                                    src="https://res.cloudinary.com/mckrus/image/upload/v1612199155/dsstreet/1231-TXUX-BT2_iqpyy9.jpg"
                                />
                            </div>


                        </Col>
                    </Row>
                    <Row gutter={[8, 8]}>
                        <Col span={12}>
                            <Image
                                className="hover"

                                width={"100%"}
                                preview={false}
                                src="https://res.cloudinary.com/mckrus/image/upload/v1612199153/dsstreet/1231-TYUY-BT2_vgmqu6.jpg"
                            />
                        </Col>
                        <Col span={12}>
                            <Image
                                className="hover"

                                width={"100%"}
                                preview={false}
                                src="https://res.cloudinary.com/mckrus/image/upload/v1612199153/dsstreet/0201-WSTXJ-BT2_vmdl2v.jpg"
                            />

                        </Col>
                    </Row>
                    <Row gutter={[8, 8]}>
                        <Row>
                            <Col span={24}>

                                <Image
                                    className="hover"

                                    width={"100%"}
                                    preview={false}

                                    src="https://res.cloudinary.com/mckrus/image/upload/v1612199154/dsstreet/1231-NY-BT2_dy5csh.jpg"
                                />


                            </Col>
                        </Row>

                    </Row>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row text-center pt-3">
                    <div className="col-12">
                        <h3>ZAINTPIRUJ SIĘ MODĄ Z #DSTREETPL</h3>

                    </div>
                </div>
            </div>
            <div className="container-fluid">
                {showGallery()}
            </div>
            <div className="container-fluid">
                <MultiCarousel loading={loading} />
            </div>
            <div className="container-fluid">
                <div className="row text-center pt-3">
                    <div className="col-12">
                        <h3>NOWOŚCI</h3>

                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <MultiCarouselNews />
            </div>
            <div className="row pt-5 pb-3">
                <div className="col-12">
                    <span><strong>Dstreet.pl - Sklep odzieżowy z modną i tanią odzieżą. - Kupuj tanie i modne ubrania online!
                        </strong>
                    </span>

                </div>
                <div className="col-12 mt-4">
                    <FadeInText />
                </div>

                <div className="col-12 mt-5">
                    <hr />
                    <h3 className="my-3">Newsletter</h3>
                    <h3 className="my-3">20 zł za zapis do newslettera</h3>
                    <SubscriptionForm />



                </div>
            </div>


            {goUpButton()}


        </>
    )
}

export default Home
