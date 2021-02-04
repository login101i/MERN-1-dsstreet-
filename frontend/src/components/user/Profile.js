import React, { useEffect, Fragment } from 'react'

import MetaData from '../layout/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { Link } from 'react-router-dom'
import Loader from '../layout/Loader'

const Profile = () => {

    const { loading, user } = useSelector(state => state.auth)

    console.log(user.avatar.url)

    

    return (
        <Fragment>
            {loading ? <Loader /> :
                <Fragment>
                    <MetaData title={"Strona użytkownika"} />

                    <h2 className="mt-5 ml-5">My Profile</h2>
                    <div className="row justify-content-around mt-5 user-info">
                        <div className="col-12 col-md-3">
                            <figure className='avatar avatar-profile'>
                                <img className="rounded-circle img-fluid" src={user.avatar.url} alt={user.name} />
                            </figure>
                            <Link to="/me/update" id="edit_profile" className="btn btn-primary btn-block my-5">
                               Edytuj profil
                            </Link>
                        </div>

                        <div className="col-12 col-md-5">
                            <h4>Imię</h4>
                            <p>{user.name}</p>

                            <h4>Adres Email</h4>
                            <p>{user.email}</p>

                            <h4>Dołączono</h4>
                            <p>{String(user.createdAt).substring(0, 10)}</p>

                            {user.role !== 'admin' && (
                                <Link to="/orders/me" className="btn btn-danger btn-block mt-5">
                                   Moje zamówienia
                                </Link>
                            )}

                            <Link to="/password/update" className="btn btn-primary btn-block mt-3">
                              Zmień hasło
                            </Link>
                        </div>
                    </div>

                </Fragment>
            }

        </Fragment>
    )
}

export default Profile
