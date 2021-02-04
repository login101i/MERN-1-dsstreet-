import React, { useState, useEffect, Fragment } from 'react'
import Pagination from 'react-js-pagination'



import { Menu, Slider as Sliderek } from "antd";
import { Checkbox, Radio } from "antd";

import {
    DollarOutlined,
    DownSquareOutlined,
    StarOutlined,
} from "@ant-design/icons";
import Slider from '../components/Slider'
// import MenuPagination from '../components/MenuPagination'
import { getProducts } from '../actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert';
import Product from '../components/cards/Product'
import Loader from '../components/layout/Loader'



const { SubMenu, ItemGroup } = Menu;

const CollectionPage = ({ match }) => {
    const [price, setPrice] = useState([1, 1000])
    const [ok, setOk] = useState(false);

    const [currentPage, setCurrentPage] = useState(1)
    const [category, setCategory] = useState('')
    const [categoryIds, setCategoryIds] = useState('');
    const [rating, setRating] = useState(0);



    const categories = [
        'Elektronika',
        'Kamery',
        'Laptopy',
        'Akcesoria',
        'Słuchawki',
        'Żywność',
        "Książki",
        'Ubrania/Buty',
        'Strefa Piękna',
        'Sport',
        'Outdoor',
        'Dom i Ogród'
    ]

    function setCurrentPageNo(pageNumber) {
        setCurrentPage(pageNumber)
    }

    const keyword = match.params.keyword




    const { loading, error, products, resPerPage, productsCount, filteredProductsCount } = useSelector(state => state.products)
    console.log('To są produkty')
    console.log(products)
    console.log(filteredProductsCount)

    const dispatch = useDispatch()
    const alert = useAlert()



    useEffect(() => {
        if (error) {
            return alert.error(error)
        }

        dispatch(getProducts(keyword, currentPage, price, category, rating));


    }, [dispatch, alert, error, keyword, currentPage, price, category, rating])

    let count = productsCount
    if (keyword) {
        count = filteredProductsCount
    }




    const handleSlider = (value) => {


        // reset
        setPrice(value)
        setTimeout(() => {
            setOk(!ok);
        }, 1300);
    };

    const showCategories = () =>
        categories.map((c) => (
            <div key={c}
                style={{ cursor: 'pointer' }}
            >
                <Radio
                    onChange={hanleChangeCategory}
                    className="pb-2 pl-4 pr-4"
                    value={c}
                    name={c}
                    checked={c === category}

                >
                    {c.toString()}
                </Radio>
                <br />
            </div>
        ));
    // handle check for categories
    const hanleChangeCategory = (e) => {
        setCategory(e.target.value)
    }

    // const showRating = () => {
    //     <div className="pr-4 pl-4 pb-2">
    //         <span>Hello 2</span>
    //         <Star starClick={handleStarClick} numberOfStars={5} />
    //         <Star starClick={handleStarClick} numberOfStars={4} />
    //         <Star starClick={handleStarClick} numberOfStars={3} />
    //         <Star starClick={handleStarClick} numberOfStars={2} />
    //         <Star starClick={handleStarClick} numberOfStars={1} />
    //     </div>
    // }

    // const handleStarClick = (star) => {
    //     setRating(star)
    // }



    return (
        <Fragment>
            { loading ? <Loader /> :
                <Fragment>
                    <div className="container-fluid">
                        <div className="row text-center">

                            <Slider
                                CarrouselHeight={333}
                                lgWidth={6}
                                display="inline"
                            />


                            {resPerPage < count &&
                                <div className="col-12 d-flex justify-content-center">
                                    <Pagination
                                        activePage={currentPage}
                                        itemsCountPerPage={resPerPage}
                                        totalItemsCount={productsCount}
                                        onChange={setCurrentPageNo}
                                        nextPageText={'Następny'}
                                        prevPageText={'Poprzedni'}
                                        firstPageText={'Pierwszy'}
                                        lastPageText={'Ostatni'}
                                        itemClass="page-item"
                                        linkClass="page-link"
                                    />
                                </div>
                            }


                            <div className="col-md-3 pt-2">
                                <h4>Filtry</h4>
                                <hr />
                                <Menu
                                    defaultOpenKeys={["1"]}
                                    mode="inline"
                                >
                                    {/* price */}
                                    <SubMenu
                                        key="1"
                                        title={
                                            <span className="h6">
                                                Cena
                </span>
                                        }
                                    >
                                        <div>
                                            <Sliderek
                                                className="ml-4 mr-4"
                                                tipFormatter={(v) => `${v} zł`}
                                                range
                                                value={price}
                                                onChange={handleSlider}
                                                max="1000"
                                            />
                                        </div>
                                    </SubMenu>

                                    <hr />

                                    {/* category */}
                                    <SubMenu
                                        key="2"
                                        title={
                                            <span className="h6">
                                                Kategorie
                </span>
                                        }
                                    >
                                        {showCategories()}
                                    </SubMenu>
                                    {/* rating */}



                                </Menu>

                                <ul className="pl-0">
                                    {[5, 4, 3, 2, 1].map(star => (
                                        <li
                                            style={{
                                                cursor: 'pointer',
                                                listStyleType: 'none'
                                            }}
                                            key={star}
                                            onClick={() => setRating(star)}
                                        >

                                            <div className="rating-outer">
                                                <div className="rating-inner"
                                                    style={{
                                                        width: `${star * 20}%`
                                                    }}
                                                >
                                                </div>
                                            </div>


                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-6 col-md-9">

                                <div className="row">
                                    {products.map(product => (
                                        <Product
                                            key={product._id}
                                            product={product}
                                            col={4} />
                                    ))}
                                </div>



                            </div>
                        </div>
                    </div>
                </Fragment>
            }
        </Fragment>
    )
}

export default CollectionPage
