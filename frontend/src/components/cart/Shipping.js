import React, { useEffect, useState, Fragment } from 'react'
import { countries } from 'countries-list'

import { Input, Select, Checkbox, Menu } from 'antd'


import { Form, Button } from 'react-bootstrap'


import { Link } from 'react-router-dom'

import { saveShippingInfo } from '../../actions/cartActions'
import { useDispatch, useSelector } from 'react-redux'
import { HeartOutlined } from "@ant-design/icons"
import { useAlert } from 'react-alert'
import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData'
import CheckoutSteps from './CheckoutSteps'


const Shipping = ({ history }) => {

  const countriesList = Object.values(countries)

  const { shippingInfo } = useSelector(state => state.cart)
  const { user } = useSelector(state => state.auth)
  const [name, setName] = useState()

  const [email, setEmail] = useState(user.email ? user.email : '')
  const [surname, setSurname] = useState()
  const [ulica, setUlica] = useState()



  const [address, setAddress] = useState(shippingInfo.address ? shippingInfo.address : '')
  const [city, setCity] = useState(shippingInfo.city ? shippingInfo.city : '')
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo ? shippingInfo.phoneNo : '')
  const [country, setCountry] = useState(shippingInfo.country ? shippingInfo.country : '')
  const [postalCode, setPostalCode] = useState(shippingInfo.postalCode ? shippingInfo.postalCode : '')



  const [privateAddress, setPrivateAddress] = useState(false)
  const [companyAddress, setCompanyAddress] = useState(false)

  const [noYes, setNoYes] = useState(true)

  const [categoryIds, setCategoryIds] = useState([]);
  const [visible, setVisible] = useState(false)

  const [addRedColor, setAddRedColor] = useState('red')
  const [showAgremment, setShowAgremment] = useState(false)

  const [addressSaved, setAddressSaved] = useState(false);


  const [number, setNumber] = useState("")


  const dispatch = useDispatch()









  const submitHandler = (e) => {
    e.preventDefault()

    dispatch(saveShippingInfo({ address, city, phoneNo, country, name, surname }))
    history.push('/order/confirm')

  }

  const privateAddressHandler = () => {

    setPrivateAddress(!privateAddress)
    if (!privateAddress) {
      setCompanyAddress(false)
    }
  }

  const companyAddressHandler = () => {
    setCompanyAddress(!companyAddress)
    if (!companyAddress) setPrivateAddress(false)

  }

  const noyesHadler = () => {
    setNoYes(!noYes)
  }


  const categories = [
    {
      _id: 1,
      name: "Oświadczam, że zapoznałam/łem się z Regulaminem oraz Polityką prywatności i akceptuję ich postanowienia."
    },
    {
      _id: 2,
      name: "Wyrażam zgodę na przekazywanie przez sklep internetowy dstreet.pl, Newslettera na podany adres e-mail lub numer telefonu za pośrednictwem moich urządzeń telekomunikacyjnych, w szczególności takich jak laptop, telefon, smartfon zgodnie z art. 172 ust. 1 ustawy z dnia 16 lipca 2004 r. Prawo telekomunikacyjne;"
    },
    {
      _id: 3,
      name: "Wyrażam zgodę na otrzymywanie od sklep dstreet.pl, informacji handlowych zgodnie z art. 10 ustawy z dnia 18 lipca 2002 r.o świadczeniu usług drogą elektroniczną."
    }

  ]
  const categories2 = [
    {
      _id: 4,
      name: "Wyrażam zgodę na przetwarzanie moich danych osobowych, w celu otrzymywania na podany adres e-mail Newslettera sklepu internetowego dstreet.pl*"
    },
    {
      _id: 5,
      name: "Wyrażam zgodę na przetwarzanie moich danych osobowych, w celu otrzymywania na podany numer telefonu Newslettera SMS sklepu internetowego dstreet.pl**"
    }
  ]


  const showCategories = () =>
    categories.map((c) => (
      <div
        className="d-flex align-items-center"
        key={c._id}
        style={{ height: "90px", lineHeight: '25px', alignItems: 'center' }}
      >
        <Checkbox
          onChange={handleCheck}
          className="pb-2 pl-4 pr-4"
          value={c._id}
          name="category"
          checked={categoryIds.includes(c._id)}
        >


        </Checkbox>
        <div >
          {c.name}
        </div>

        <br />
      </div>
    ));
  const showCategories2 = () =>
    categories2.map((c) => (
      <div
        className="d-flex align-items-center"
        key={c._id}
        style={{ height: "50px", lineHeight: '25px', alignItems: 'center' }}
      >
        <Checkbox
          onChange={handleCheck}
          className="pb-2 pl-4 pr-4"
          value={c._id}
          name="category"
          checked={categoryIds.includes(c._id)}
          disabled={!visible}
        >


        </Checkbox>
        {visible ? (<div style={{ color: `${categoryIds.length === 4 ? "black" : addRedColor}` }}>
          {c.name}
        </div>) : (
            <div >
              {c.name}
            </div>
          )}

        <br />
      </div>
    ));

  const handleCheck = (e) => {
    // console.log(e.target.value);
    let inTheState = [...categoryIds];
    let justChecked = e.target.value;
    let foundInTheState = inTheState.indexOf(justChecked); // index or -1
    // indexOf method ?? if not found returns -1 else return index [1,2,3,4,5]
    console.log(foundInTheState)
    if (foundInTheState === -1) {
      inTheState.push(justChecked);
      inTheState.sort()
    } else {
      // if found pull out one item from index
      inTheState.splice(foundInTheState, 1);
    }
    console.log(inTheState)
    if (inTheState.includes(1) && inTheState.includes(2)) {
      setVisible(true)
      console.log("widoczna")
      console.log(inTheState)

    } else {
      setVisible(false)
      inTheState.splice(1)
      console.log("niewidoczna")
      console.log(inTheState)
    }



    if (inTheState.includes(3)) {
      setAddRedColor('black')
    } else {
      setAddRedColor('grey')
    }

    setCategoryIds(inTheState);

  };


  const checkAll = () => {
    if (categoryIds.length === 5) {
      setCategoryIds([])
      setVisible(false)

    } else {
      setCategoryIds([1, 2, 3, 4, 5])
      setVisible(true)
    }


  }

  const saveAddressToDb = (e) => {
    e.preventDefault();

    // const formData = new FormData();
    // formData.set('name', name);
    // formData.set('surname', surname);
    // formData.set('city', city);
    // formData.set('postalCode', postalCode);
    // formData.set('number', number);

    const data = {
      "name": name,
      "surname": surname,
      "city": city,
      "postalCode": postalCode,
      "address": address,
      "country": country,
      "phoneNo": phoneNo
    }
    // console.log(formData)

    dispatch(saveShippingInfo(data))

    setAddressSaved(true);
    history.push('/confirm')


  }



  const addressToDeliver = `adres: ${address}; miasto: ${city}; kod pocztowy: ${postalCode}; telefon kontaktowy: ${number}`

  return (
    <Fragment>
      <MetaData tittle="adress dostawy" />

      <CheckoutSteps login shipping />
      <Fragment>
        <div className="container-fluid d-flex justify-content-center">
          <div className="col-11  offset-1 mb-5" mt-5>
            <div className="d-flex justify-content-center align-items-center"
              style={{ background: "#F2F2F2", border: '1px solid grey', height: '60px' }}

            >
              <h5>DANE OSOBOWE</h5>

            </div>
          </div>
        </div>






        <div className="container-fluid mt-5">
          <div className="row d-flex justify-content-center">

            <div className="col-md-10 col-lg-5 ">
              <h5>Adres zamawiającego</h5>
              <Checkbox
                checked={privateAddress}
                onChange={privateAddressHandler}
              > Osoba prywatna</Checkbox>
              <Checkbox
                checked={companyAddress}
                onChange={companyAddressHandler}
              > Firma</Checkbox>
            </div>


            <div className="col-md-10 col-lg-5 ">
              <h5>Dostawa na inny adres</h5>
              <Checkbox
                checked={noYes}
                onChange={noyesHadler}

              > Tak</Checkbox>
              <Checkbox
                checked={!noYes}
                onChange={noyesHadler}

              > Nie</Checkbox>

            </div>
          </div>
        </div>


        <div className="container-fluid">
          <div className="row d-flex justify-content-center">

            <div className="col-md-10 col-lg-5">
              <Form onSubmit={saveAddressToDb}>
                <Form.Group controlId='name'>
                  <Form.Label>Imię</Form.Label>
                  <Form.Control
                    type='text'
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                    style={{ background: "#F2F2F2", height: '60px', padding: '10px' }}

                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId='surname'>
                  <Form.Label>Nazwisko:</Form.Label>
                  <Form.Control
                    type='text'
                    value={surname}
                    required
                    onChange={(e) => setSurname(e.target.value)}
                    style={{ background: "#F2F2F2", height: '50px', padding: '10px' }}

                  ></Form.Control>
                </Form.Group>


                <Form.Group controlId='address'>
                  <Form.Label>Ulica i numer:</Form.Label>
                  <Form.Control
                    type='text'
                    value={address}
                    required
                    onChange={(e) => setAddress(e.target.value)}
                    style={{ background: "#F2F2F2", height: '50px', padding: '10px' }}

                  ></Form.Control>
                </Form.Group>



                <Form.Label>Kod pocztowy i miasto</Form.Label>
                <Form.Group controlId='postalCode' className="d-column-flex">


                  <div className="d-flex justiy-space-between">
                    <Form.Control
                      type='text'
                      value={city}
                      required
                      onChange={(e) => setCity(e.target.value)}
                      style={{ background: "#F2F2F2", height: '60px', padding: '10px', marginRight: "20px" }}


                    ></Form.Control>
                    <Form.Control
                      type='text'
                      value={postalCode}
                      required
                      onChange={(e) => setPostalCode(e.target.value)}
                      style={{ background: "#F2F2F2", height: '60px', padding: '10px', marginLeft: '20px' }}
                    ></Form.Control>

                  </div>
                </Form.Group>

                <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                  <Form.Label>Kraj</Form.Label>
                  <Form.Control as="select" size="sm"
                    style={{ height: '40px', padding: '10px', fontSize: "16px" }}
                    onChange={e => setCountry(e.target.value)}
                    custom>
                    {countriesList.map(country => (
                      <option
                        style={{ fontSize: "16px" }}

                        key={country.name} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>





                {!user.name &&

                  <Form.Group controlId='number'>
                    <Form.Label>Adres email</Form.Label>
                    <Form.Control
                      type='number'
                      value={number}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ background: "#F2F2F2", height: '60px', padding: '10px' }}

                    ></Form.Control>

                  </Form.Group>

                }



                <Form.Group controlId='number'>
                  <Form.Label>Numer kontaktowy</Form.Label>
                  <Form.Control
                    type='number'
                    value={phoneNo}
                    required
                    onChange={(e) => setPhoneNo(e.target.value)}
                    style={{ background: "#F2F2F2", height: '60px', padding: '10px' }}

                  ></Form.Control>
                </Form.Group>

                <Button variant='primary'
                  onClick={() => saveAddressToDb(addressToDeliver)}
                >
                  ZAPISZ ADRES I PRZEJDŹ DO PŁATNOŚCI
        </Button>
              </Form>

            </div>





            <div className="col-md-10 col-lg-5">





              <Form onSubmit={saveAddressToDb}>
                <Form.Group controlId='name'>
                  <Form.Label>Imię</Form.Label>
                  <Form.Control
                    type='text'
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                    style={{ background: "#F2F2F2", height: '60px', padding: '10px' }}

                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId='name'>
                  <Form.Label>Nazwisko:</Form.Label>
                  <Form.Control
                    type='text'
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                    style={{ background: "#F2F2F2", height: '50px', padding: '10px' }}

                  ></Form.Control>
                </Form.Group>


                <Form.Group controlId='address'>
                  <Form.Label>Ulica i numer:</Form.Label>
                  <Form.Control
                    type='text'
                    value={address}
                    required
                    onChange={(e) => setAddress(e.target.value)}
                    style={{ background: "#F2F2F2", height: '50px', padding: '10px' }}

                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId='city'>
                  <Form.Label>Miasto</Form.Label>
                  <Form.Control
                    type='text'
                    value={ulica}
                    required
                    onChange={(e) => setCity(e.target.value)}
                    style={{ background: "#F2F2F2", height: '60px', padding: '10px' }}

                  ></Form.Control>
                </Form.Group>

                <Form.Label>Kod pocztowy i miasto</Form.Label>
                <Form.Group controlId='postalCode' className="d-column-flex">


                  <div className="d-flex justiy-space-between">
                    <Form.Control
                      type='text'
                      value={postalCode}
                      required
                      onChange={(e) => setPostalCode(e.target.value)}
                      style={{ background: "#F2F2F2", height: '60px', padding: '10px', marginRight: "20px" }}


                    ></Form.Control>
                    <Form.Control
                      type='text'
                      value={city}
                      required
                      onChange={(e) => setCity(e.target.value)}
                      style={{ background: "#F2F2F2", height: '60px', padding: '10px', marginLeft: '20px' }}
                    ></Form.Control>

                  </div>
                </Form.Group>

                <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                  <Form.Label>Kraj</Form.Label>
                  <Form.Control as="select" size="sm"
                    style={{ height: '40px', padding: '10px', fontSize: "16px" }}
                    onChange={e => setCountry(e.target.value)}
                    custom>
                    {countriesList.map(country => (
                      <option
                        style={{ fontSize: "16px" }}

                        key={country.name} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>



                {!user.name &&

                  <Form.Group controlId='number'>
                    <Form.Label>Adres email</Form.Label>
                    <Form.Control
                      type='number'
                      value={number}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ background: "#F2F2F2", height: '60px', padding: '10px' }}

                    ></Form.Control>

                  </Form.Group>

                }



                <Form.Group controlId='number'>
                  <Form.Label>Numer kontaktowy</Form.Label>
                  <Form.Control
                    type='number'
                    value={number}
                    required
                    onChange={(e) => setNumber(e.target.value)}
                    style={{ background: "#F2F2F2", height: '60px', padding: '10px' }}

                  ></Form.Control>
                </Form.Group>




              </Form>

            </div>
          </div>

        </div>





        <hr />
        <button type="button"
          className="btn  btn-outline-dark btn-lg  btn-outline-dark my-3"
          onClick={checkAll}
        >Zaznacz wszystko</button>

        <Menu
          className="col-8 offset-2"

        >
          <div >{showCategories()}</div>
          <div >{showCategories2()}</div>
        </Menu>

        <Button size="medium"

          style={{ background: "black", cursor: 'poiner', color: 'white' }}

          className="btn btn-dark btn-lg py-1 col-4 offset-4 m-5"
          onClick={saveAddressToDb}
        >Do Kasy</Button>












      </Fragment>




    </Fragment >
  )
}

export default Shipping
