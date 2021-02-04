import React, { useEffect, useState, Fragment } from 'react'
// import Carousel from 'react-multi-carousel'
import { Carousel } from 'react-bootstrap'

import { Menu, Checkbox, Button, Input } from 'antd'
import products from '../data/products.json'
import ProductFromCollection from '../components/ProductFromCollection'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';




import { getProductDetails, clearErrors } from '../actions/productActions'
import {addItemToCart} from '../actions/cartActions'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import Loader from './layout/Loader'
import MetaData from './layout/MetaData'


const ProductDetails = ({ match }) => {

    const [quantity, setQuantity] = useState(1)

    console.log(match.params.id)
    const dispatch = useDispatch()
    const alert = useAlert()

    const { loading, error, product } = useSelector(state => state.productDetails)
    console.log(product)

    const { SubMenu, ItemGroup } = Menu;



    useEffect(() => {
        dispatch(getProductDetails(match.params.id))

        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
    }, [dispatch, alert, error, match.params.id])


    // const increaseQty = () => {
    //     const count = document.querySelector('.count')
    //     if (count.valueAsNumber >= product.stock) return

    //     const qty = count.valueAsNumber + 1
    //     setQuantity(qty)

    // }
    
const addToCart = ()=> {

    dispatch(addItemToCart(match.params.id, quantity))
    alert.success("Dodano do koszyka")

}

    const increaseQty = (e) => {
         let count = document.querySelector('.count')
        if (count.valueAsNumber >= product.stock) return

        const qty = count.valueAsNumber + 1
        setQuantity(qty)
    }

    const decreaseQty = () => {
        const count = document.querySelector('.count')
        if (count.valueAsNumber <= 1) return

        const qty = count.valueAsNumber - 1
        setQuantity(qty)
    }

    return (
        <Fragment>


            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={product.name} />
                    <div className="row d-flex justify-content-center mt-4">
                        <div className="col-md-6">
                            <div className="col text-center">
                                <Carousel

                                    pause="hover"
                                >
                                    {product.images && product.images.map(image => (
                                        <Carousel.Item key={image.public_id} >
                                            <img src={image.url}
                                                className="img-fluid" alt="" />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </div>
                            <hr />
                            <Menu
                                mode="inline"
                            >
                                <SubMenu
                                    key="1"
                                    title={
                                        <span className="h6">DANE O PRODUKCIE</span>
                                    }
                                >
                                    <ul style={{ background: 'white' }}>
                                        {product.cechy && product.cechy.map(c => (
                                            <div
                                                key={c._id}
                                                className="p-1 m-1 "
                                                style={{ cursor: "pointer" }}
                                            >
                                                <li className="p-1">{c.cecha.toString()}</li>
                                            </div>
                                        ))

                                        }
                                    </ul>


                                </SubMenu>
                            </Menu>

                            <hr />
                            <span className="h6">DARMOWA DOSTAWA OD 150,00 ZŁ</span>
                            <span className="h6">Brakuje Ci tylko <strong>150zł</strong></span>
                            <hr />
                            <Menu>


                                <SubMenu
                                    key="2"
                                    title={
                                        <span className="h6">14 DNI NA ZWROT/WYMIANĘ</span>
                                    }
                                >
                                    <div style={{ maringTop: "-10px" }} className="pr-5">
                                        <div>Tekst</div>
                                    </div>
                                </SubMenu>
                            </Menu>

                            <hr />
                            <span className="h6">ZAMÓWIENIA TELEFONICZNE: 42 278 44 44</span>
                            {/* shipping */}



                            <div className="col-12 col-lg-5">

                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <h6>{product.name}</h6>
                            <span id="no_of_reviews">({product.numOfReviews}) Ocen produktu</span>

                            <h6>{product.price} zł</h6>
                            <hr />
                            <div className="text-warning border-left-0 mb-4">
                                <strong>Zyskaj rabat kupując towary z kolekcji</strong>

                                <span> Wybierz przynajmniej 2 produkty aby otrzymać rabat!</span>
                            </div>
                            <span className="h4 pt-4">Produkty z kolekcji</span>


                            <ProductFromCollection product={product} />
                            <ProductFromCollection product={product} />
                            <div className="d-flex flex-column align-items-center">


                                <div className="stockCounter">

                                    <Button type="primary"
                                        onClick={decreaseQty}
                                        shape="round" icon={<MinusOutlined />} size="large" />


                                    <input type="number" className="form-control count d-inline " value={quantity} readOnly />

                                    <Button type="primary"
                                        onClick={increaseQty}
                                        shape="round"
                                        icon={<PlusOutlined />}
                                        size="large" />
                                </div>

                                <button
                                onClick={addToCart}
                                disabled={product.stock===0}
                                type="button"
                                    className="btn  btn-outline-dark btn-md my-3 "
                                    style={{ width: '300px' }}

                                // onClick={ }
                                >{product.stock > 0 ? 'DODAJ DO KOSZYKA' : "BRAK NA MAGAZYNIE"}</button>
                                <button type="button"
                                    className="btn  btn-outline-dark btn-md my-3"
                                    style={{ width: '300px' }}

                                // onClick={ }
                                >DODAJ DO ULUBIONYCH</button>

                            </div>



                        </div>

                    </div>

                </Fragment>


            )}
        </Fragment>

    )
}

export default ProductDetails

