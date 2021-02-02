import React, {Fragment} from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import mensCarouselPictures from '../../data/mensCarouselPictures'
import { Card } from 'antd';
import Product from '../Product'
import Loader from '../Loader'
import { useDispatch, useSelector } from 'react-redux'





const { Meta } = Card;

const MultiCarouselNews = () => {

    const { loading, products, error, productsCount } = useSelector(state => state.products)

    return (
        <Fragment>
          {loading? <Loader/> :
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}

                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
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
                        items: 4,
                        partialVisibilityGutter: 30
                    }
                }}
                sliderClass=""
                slidesToSlide={1}
            >
                {products.reverse().map((product) => (
                    <Product product={product} />
                ))}
            </Carousel>
            }
        </Fragment>
    )
}

export default MultiCarouselNews
