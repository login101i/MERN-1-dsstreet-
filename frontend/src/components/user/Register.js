import React, { useState, useEffect, Fragment } from 'react'
import { useAlert } from 'react-alert'
import { Link } from 'react-router-dom'
import { Button } from "antd";
import { MailOutlined, GoogleOutlined } from "@ant-design/icons";


import { useDispatch, useSelector } from 'react-redux'
import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData'
import { register, clearErrors } from '../../actions/userActions'
import SubscriptionForm from '../../components/forms/SubscriprionForm'



const Login = ({ history, location }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [avatarPreview, setAvatarPreview] = useState('/images/default_avatar.jpg');

    const { isAuthenticated, user, error, loading } = useSelector(state => state.register)

    const dispatch = useDispatch()
    // const redirect = location.search ? location.search.split('=')[1] : '/'
    console.log(history)

    useEffect(() => {
     
            if (isAuthenticated) {
                history.push('/')
            }
      
            console.log("ponowne ładowanie")
        

        if (error) {
            console.log(error)
            alert.error(error)
            dispatch(clearErrors())
        }

    }, [dispatch, error, isAuthenticated, history])
    console.log("sprawdzam usera")
    console.log(isAuthenticated)



    const loginForm = () => (

        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="form-group">
                <input
                    type="name"
                    className="form-control"
                    value={name}
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Twóje imię"
                    autoFocus
                    style={{ borderRadius: '22px' }}

                />
            </div>
            <div className="form-group">
                <input
                    type="email"
                    className="form-control"
                    value={email}
                    name="email"
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
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Wpisz hasło"
                    style={{ borderRadius: '22px' }}

                />
            </div>
            <div className="form-group">
                <label>Avatar</label>
                <div>
                    <figure className="avatar item-rtl">
                        <img
                            src={avatarPreview}
                            className="rounded-cirle"
                            alt="image"
                            style={{ width: "44px" }} />
                    </figure>
                </div>
                <div className="custom-file">
                    <input type="file"
                        name="avatar"
                        className="custom-file-input"
                        id='customFile'
                        accept="iamges/*"
                        onChange={onChange}
                    />
                    <label className='custom-file-label' htmlFor='customFile'>
                        Wybierz avatar
                                    </label>
                </div>

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
                disabled={loading}
            >
               Zarejestruj się
      </Button>
        </form>
    );

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(register(name, email, password, avatar))
    }


    const onChange = e => {
        if (e.target.name === 'avatar') {

            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatarPreview(reader.result)
                    setAvatar(reader.result)
                }
            }

            reader.readAsDataURL(e.target.files[0])

        } 
    }

    console.log(name, email, password, avatar, avatarPreview)


    return (
        <Fragment>
            <MetaData title={"zarejestruj się"} />
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

                               
                                <h4 className="mt-2">Jesteś już zarejestrowany.</h4>
                            </div>


                        ) : (
                                <h4>Zarejestruj się</h4>
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
