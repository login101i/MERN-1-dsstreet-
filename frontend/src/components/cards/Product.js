import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ product, col="4" }) => {
    return (
        <div className={`col-sm-12 col-md-6 col-lg-${col} my-3` }>
            <div className="card rounded">
                <img
                    className="card-img-top mx-auto"
                    src={product.images[0].url}
                    style={{maxWidth:'290px'}}
                />
            </div>
        </div>
    )
}

export default Product
