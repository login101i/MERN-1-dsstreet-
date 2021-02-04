import React, { useState, useEffect, Fragment } from 'react'
import { useAlert } from 'react-alert'
import { Link } from 'react-router-dom'
import { Button } from "antd";
import { MailOutlined, GoogleOutlined } from "@ant-design/icons";


import { useDispatch, useSelector } from 'react-redux'
import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData'
import { updateProfile, loadUser, clearErrors } from '../../actions/userActions'

import { UPDATE_PROFILE_RESET } from '../../constants/userConstants'


const UpdateProfile = ({ history }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [avatar, setAvatar] = useState('')
    const [avatarPreview, setAvatarPreview] = useState('/images/default_avatar.jpg')

    const alert = useAlert();
    const dispatch = useDispatch();




    const { user } = useSelector(state => state.auth);
    const { error, isUpdated, loading } = useSelector(state => state.user)



    useEffect(() => {
        if (user) {
            setName(user.name)
            setEmail(user.email)
            setAvatarPreview(user.avatar.url)
        }

        if (isUpdated) {
            alert.success("Użytkownik zaktualizowany.")
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
        formData.set('name', name);
        formData.set('email', email);
        formData.set('avatar', avatar);

        dispatch(updateProfile(formData))
    }

    const onChange = e => {
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatarPreview(reader.result)
                setAvatar(reader.result)
            }
        }

        reader.readAsDataURL(e.target.files[0])
    }


    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={'Aktualizacja profilu'} />

                    <div className="row wrapper d-flex justify-content-center mt-4">
                        <div className="col-10 col-lg-5 p-4">
                            <form className="shadow-lg p-4" onSubmit={submitHandler}>
                                <h1 className="mb-3">Aktualizuj Profil</h1>
                                <div className="form-group">
                                    <label htmlFor="email_field">Email</label>
                                    <input
                                        type="email"
                                        id="email_field"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password_field">Imię</label>
                                    <input
                                        type="name"
                                        id="name"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Aktualizuj Avatar</label>
                                    <div>
                                        <figure className="avatar item-rtl">
                                            <img
                                                src={avatarPreview}
                                                className="rounded-cirle"
                                                alt="image"
                                                style={{ width: "84px" }} />
                                        </figure>
                                    </div>
                                    <div className="custom-file">
                                        <input type="file"
                                            name="avatar"
                                            className="custom-file-input"
                                            id='customFile'
                                            accept="images/*"
                                            onChange={onChange}
                                        />
                                        <label className='custom-file-label' htmlFor='customFile'>
                                            Wybierz avatar
                                    </label>
                                    </div>

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


export default UpdateProfile
