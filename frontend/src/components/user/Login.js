import React, { useState, useEffect, Fragment } from 'react'
import { useAlert } from 'react-alert'
import { Link } from 'react-router-dom'
import { Button } from "antd";
import { MailOutlined, GoogleOutlined } from "@ant-design/icons";


import { useDispatch, useSelector } from 'react-redux'
import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData'
import { login, clearErrors } from '../../actions/userActions'
import SubscriptionForm from '../../components/forms/SubscriprionForm'



const Login = ({ history, location }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { isAuthenticated, user, error, loading } = useSelector(state => state.auth)


    const dispatch = useDispatch()
    // const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (isAuthenticated) {
            history.push("/")
        }

        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }




    }, [dispatch, error, alert, isAuthenticated, history])


    console.log(loading)
    console.log(isAuthenticated)




    const loginForm = () => (

        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Twój email"
                    autoFocus
                    style={{ borderRadius: '22px' }}

                />
            </div>

            <div className="form-group">
                <input
                    type="password"
                    className="form-control "
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Wpisz hasło"
                    style={{ borderRadius: '22px' }}

                />
            </div>

            <br />
            <Link to="/password/forgot" className="float-right text-danger">
                PRZYPOMNIJ HASŁO
          </Link>
            <Button
                onClick={handleSubmit}
                type="primary"
                className="mb-3"
                block
                shape="round"
                icon={<MailOutlined />}
                size="large"
                disabled={!email || password.length < 6}
            >
                Zaloguj się
      </Button>
        </form>
    );

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(email, password))

    }

    return (
        <Fragment>
            <div className="container p-5 ">

                <div class="jumbotron jumbotron-fluid pt-0 pb-0">
                    <div class="container text-center d-flex justify-content-center align-items-center pt-0 pb-0">
                        <h3 class="display-6 pt-2">ZALOGUJ SIĘ</h3>

                    </div>
                </div>

                <div className="row d-flex">
                    <div className="col-md-5 offset-md-1 text-center">

                        <h4>REJESTRACJA</h4>

                        <div>

                            <button type="button"
                                className="btn  btn-outline-dark btn-md my-3 "
                                style={{ width: '300px' }}

                            >ZAŁÓŻ NOWE KONTO</button>

                            <span>Zalety posiadania konta</span>
                            <span className="float-left h6 text-secondary">

                                - oszczędzasz dzięki kodom rabatowym
                                - jesteś zawsze trendy dzięki specjalnym ofertom
                                - możesz liczyć na nasze pełne wsparcie
                                - Ulubione zapewniają Ci niezwykłe przeżycie z modą
                                - zyskujesz rabaty w programie lojalnościowym
                        </span>

                        </div>



                    </div>
                    <div className="col-md-5 offset-md-1">
                        {loading ? (
                            <div className="text-center">

                                <Loader />
                                <h4 className="mt-2">Logowanie...</h4>
                            </div>


                        ) : (
                                <h4>Zaloguj się</h4>
                            )}

                        {loginForm()}
                        <hr />

                    </div>
                </div>
            </div>
            <hr />
            <SubscriptionForm />
        </Fragment>
    );

};

export default Login
