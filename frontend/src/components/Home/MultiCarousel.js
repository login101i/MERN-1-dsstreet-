import React, { Fragment } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import mensCarouselPictures from '../../data/mensCarouselPictures'
import { Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import Product from "../Product"
import Loader from '../layout/Loader'


const { Meta } = Card;





const MultiCarousel = () => {
    const { loading, products, error, productsCount } = useSelector(state => state.products)
    return (
        <Fragment>
{ loading ?  <Loader/> :
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container-with-dots"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 6,
                            partialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 2,
                            partialVisibilityGutter: 30
                        }
                    }}
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable>
                    {products.map((product) => (
                        <Product product={product} />
                    ))}
                </Carousel>
}

         
        </Fragment>
    )
}

export default MultiCarousel
