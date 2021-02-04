import React, {useState} from 'react'
import Pagination from 'react-js-pagination'
import { useDispatch, useSelector } from 'react-redux'


const PaginationItem = ({ resPerPage, productsCount, currentPage, setCurrentPageNo}) => {


  

    return (
        <div className="row">
            <Pagination
                activePage={currentPage}
                itemsCountPerPage={resPerPage}
                totalItemsCount={productsCount}
                onChange={()=>setCurrentPageNo()}
                nextPageText={'Następny'}
                prevPageText={'Poprzedni'}
                firstPageText={'Pierwszy'}
                lastPageText={'Ostatni'}
                itemClass="page-item"
                linkClass="page-link"
            />
        </div>
    )
}

export default PaginationItem
