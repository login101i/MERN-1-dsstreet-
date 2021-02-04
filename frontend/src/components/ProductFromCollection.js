import React, { Fragment } from 'react'

import { Checkbox } from 'antd'
import ModalSizes from '../components/ModalSizes'


const ProductFromCollection = ({ product }) => {

    console.log("To jest produkt")
    console.log(product)


    const handleColorChange = (e) => {
        console.log("color changed", e.target.value);
    }

    return (
        <Fragment>



            <div className="container-fluid mt-3">

                <div className="d-flex">

                    <div className="col text-center">
                        <div className="d-flex justify-content-center align-items-center mb-3 ">
                            <Checkbox className="pr-4" />
                            <div className="d-flex flex-column align-items-center">
                                {product.images && product.images.map(item => (
                                    <img src={item.url}
                                        className="img-fluid mx-3"
                                        style={{ height: '150px' }}
                                        alt="" />
                                ))}
                            </div>
                        </div>
                        <span className="h6 ">Cena <strong>{product.price} zł</strong></span>
                    </div>



                    <div className="d-flex flex-column align-items-center">
                        <select
                            onChange={handleColorChange}
                            name="color"
                            className="btn btn-outlined p-2 border border-dark"
                            style={{ maxWidth: "150px", minWidth: '100px' }}
                        >
                            {product.cechy && product.cechy.map(c => (
                                <option value={c.cecha.toString()} key={c._id}>{c.cecha.toString()}</option>
                            ))}

                        </select>
                        <select
                            onChange={handleColorChange}
                            name="color"
                            className="btn btn-outlined p-2 border border-dark"
                            style={{ maxWidth: "150px", minWidth: '100px' }}
                        >
                            {product.cechy && product.cechy.map(c => (
                                <option value={c.cecha.toString()} key={c._id}>{c.cecha.toString()}</option>
                            ))}

                        </select>
                        <ModalSizes />


                    </div>

                </div>
                <hr />


            </div>

        </Fragment>
    )
}

export default ProductFromCollection
