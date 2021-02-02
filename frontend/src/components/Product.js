import React from 'react'
import { Card } from 'antd';
import {Link} from 'react-router-dom'

const {Meta}=Card

const Product = ({product}) => {
    return (
        <Link to={`/product/${product._id}`}>
        <Card
            key={product._id}
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" style={{ maxHeight: '222px', objectFit: "cover" }} src={product.images[0].url} />}
        >
            <Meta title={product.name} description="www.instagram.com" />
        </Card>
        </Link>
    )
}

export default Product
