import React, { useEffect, Fragment } from 'react'
// import Carousel from 'react-multi-carousel'
import { Carousel } from 'react-bootstrap'


import { getProductDetails, clearErrors } from '../actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import Loader from './Loader'
import MetaData from './layout/MetaData'


const ProductDetails = ({ match }) => {

    console.log(match.params.id)
    const dispatch = useDispatch()
    const alert = useAlert()

    const { loading, error, product } = useSelector(state => state.productDetails)
    console.log(product)


    useEffect(() => {
        dispatch(getProductDetails(match.params.id))

        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
    }, [dispatch, alert, error])


    return (
        <Fragment>


            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={product.name} />
                    <div className="row d-flex justify-content-center">
                        <div className="col">
                            <div className="col-12 col-lg-5 ">
                                <Carousel>
                                    {product.images && product.images.map(image => (
                                        <Carousel.Item key={image.public_id} >
                                            <img src={image.url} className="d-block w-50 img-fluid" alt="" />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </div>
                            <hr />
                            <h4 className="mt-5">Opis produktu</h4>
                            <ul>
                                {product.cechy && product.cechy.map(c => (
                                    <li>{c.cecha.toString()}</li>
                                ))}
                            </ul>


                            <div className="col-12 col-lg-5">

                            </div>
                        </div>
                    </div>

                </Fragment>
            )

            }
        </Fragment>
    )
}

export default ProductDetails

