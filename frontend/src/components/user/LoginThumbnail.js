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



const LoginThumbnail = ( ) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { isAuthenticated, user, error, loading } = useSelector(state => state.auth)

    

    const dispatch = useDispatch()

   


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

          
            
            <Button
                onClick={handleSubmit}
                type="primary"
                className="mb-3 mt-3"
                block
                shape="round"
                icon={<MailOutlined />}
                size="large"
                disabled={!email || password.length < 6}
            >
                Zaloguj się
      </Button>
      <div className="row">
                <Link to="/password/forgot" 
                className="float-right text-danger mb-4">
                    PRZYPOMNIJ HASŁO
          </Link>
                <Link to="/register" 
                className="float-right text-danger mb-4">
                ZAREJESTRUJ SIĘ
          </Link>
      </div>
        </form>
    );

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(email, password))

    }

    return (
        <Fragment>
            <div>
    
                <div class="jumbotron jumbotron-fluid pt-0 pb-0">
                    <div class="container text-center d-flex justify-content-center align-items-center pt-0 pb-0">
                        <h3 class="display-6 pt-2">LOGOWANIE</h3>

                    </div>
                </div>

                {loginForm()}
                   
                    <div className="col-md-10 offset-md-1">
                        {loading &&(
                            <div className="text-center">
                                <Loader />
                                <h4 className="mt-2">Logowanie...</h4>
                            </div>


                        )}
                       
                    </div>
                  
                </div>
        
           
        </Fragment>
    );

};

export default LoginThumbnail
