import React, {useState, Fragment} from 'react'
import Pagination from 'react-js-pagination'
import { useDispatch, useSelector } from 'react-redux'


const MenuPagination = ({ resPerPage, productsCount, setCurrentPageNo, currentPage}) => {

   
    return (
        <Fragment>
   <hr/>
        <div className="col-12 d-flex justify-content-center">
           Hello from MenuPagination
        </div>
    <hr/>
    </Fragment>
    )
}

export default MenuPagination
