import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
    const [keyword, setKeyword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword.trim()) {
            history.push(`/search/${keyword}`)
        } else {
            history.push('/')
        }
    }

    return (
        <form onSubmit={submitHandler}>

        <div
            className="form-outline p-2 d-flex align-self-center"

            style={{ border: "1px solid grey", borderRadius: "30px" }}
        >
            <input
                style={{ border: "none" }}
                type="search" id="form1" className="form-control shadow-none " placeholder="wyszukaj"
                aria-label="Search"
                onChange={(e)=>setKeyword(e.target.value)}
                
                 >


            </input>
            <i className="fas fa-search align-self-center pr-2"></i>



        </div>
        </form>
    )
}

export default SearchBox
