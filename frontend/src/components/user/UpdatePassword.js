import React, { useState, useEffect, Fragment } from 'react'
import { useAlert } from 'react-alert'
import { Link } from 'react-router-dom'
import { Button } from "antd";
import { MailOutlined, GoogleOutlined } from "@ant-design/icons";


import { useDispatch, useSelector } from 'react-redux'
import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData'
import { updatePassword, loadUser, clearErrors } from '../../actions/userActions'

import { UPDATE_PROFILE_RESET } from '../../constants/userConstants'

const UpdatePassword = ({history}) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
   



    const alert = useAlert();
    const dispatch = useDispatch();

    const { user } = useSelector(state => state.auth);
    const { error, isUpdated, loading } = useSelector(state => state.user)


    useEffect(() => {
        if (user) {
            setName(user.name)
            setEmail(user.email)
         
        }

        if (isUpdated) {
            alert.success("Hało zaktualizowane.")
            dispatch(loadUser())

            history.push('/me')
        }

        dispatch({
            type: UPDATE_PROFILE_RESET
        })

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

    }, [dispatch, error, history, alert, isUpdated])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('oldPassword', oldPassword);
        formData.set('newPassword', newPassword);
     

        dispatch(updatePassword(formData))
    }

   


    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={'Aktualizacja hasła'} />

                    <div className="row wrapper d-flex justify-content-center mt-4">
                        <div className="col-10 col-lg-5 p-4">
                            <form className="shadow-lg p-4" onSubmit={submitHandler}>
                                <h1 className="mb-3">Aktualizuj Hasło</h1>
                                <div className="form-group">
                                    <label htmlFor="email_field">Bieżące hasło</label>
                                    <input
                                        type="password"
                                        id="password"
                                        className="form-control"
                                        value={oldPassword}
                                        onChange={(e) => setOldPassword(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password_field">Nowe hasło</label>
                                    <input
                                        type="password"
                                        id="newPassword"
                                        className="form-control"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
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
            )}
        </Fragment>
    )
}


export default UpdatePassword


