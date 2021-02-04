import React, { Fragment, useState, useEffect } from 'react'

import MetaData from '../layout/MetaData'
import { MailOutlined, GoogleOutlined } from "@ant-design/icons";
import {Button } from 'antd'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { forgotPassword, clearErrors } from '../../actions/userActions'

const ForgotPassword = () => {

    const [email, setEmail] = useState('')

    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, loading, message } = useSelector(state => state.forgotPassword)

    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (message) {
            alert.success(message)
        }

    }, [dispatch, alert, error, message])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('email', email);

        dispatch(forgotPassword(formData))
    }

    return (
        <Fragment>
            <MetaData title={'Forgot Password'} />

            <div className="row wrapper">
                <div className="col-10 col-lg-5">
                    <form className="shadow-lg" onSubmit={submitHandler}>
                        <h1 className="mb-3">Wyslij email aby przypomnieć hasło.</h1>
                        <div className="form-group">
                            <label htmlFor="email_field">Podaj Email</label>
                            <input
                                type="email"
                                id="email_field"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <Button
                            onClick={submitHandler}
                            type="primary"
                            className="mb-3"
                            block
                            shape="round"
                            icon={<MailOutlined />}
                            size="small"
                            disabled={loading}
                        >
                            Aktualizuj
      </Button>

                    </form>
                </div>
            </div>

        </Fragment>
    )
}

export default ForgotPassword
