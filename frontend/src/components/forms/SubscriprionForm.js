import React, { useState } from 'react';
import { Form, Input, Button, Radio, Menu, Checkbox, Col, Row } from 'antd';
import {
    DownSquareOutlined,
    StarOutlined,
} from "@ant-design/icons";

const SubscriptionForm = () => {
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');
    const [showAssignment, setShowAssignment] = useState(false)
    const [categoryIds, setCategoryIds] = useState([]);
    const [visible, setVisible] = useState(false)
    const [addRedColor, setAddRedColor] = useState('red')
    const [showAgremment, setShowAgremment] = useState(false)


    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout);
    };
    const showAssignmentPuntos = () => {
        setShowAssignment(true)
    }

    const { SubMenu } = Menu;

    const categories = [
        {
            _id: 1,
            name: "Wyrażam zgodę na przekazywanie przez sklep internetowy dstreet.pl, Newslettera na podany adres e-mail lub numer telefonu za pośrednictwem moich urządzeń telekomunikacyjnych, w szczególności takich jak laptop, telefon, smartfon zgodnie z art. 172 ust. 1 ustawy z dnia 16 lipca 2004 r. Prawo telekomunikacyjne;"
        },
        {
            _id: 2,
            name: "Wyrażam zgodę na przekazywanie przez sklep internetowy dstreet.pl, Newslettera na podany adres e-mail lub numer telefonu za pośrednictwem moich urządzeń telekomunikacyjnych, w szczególności takich jak laptop, telefon, smartfon zgodnie z art. 172 ust. 1 ustawy z dnia 16 lipca 2004 r. Prawo telekomunikacyjne;"
        },

    ]
    const categories2 = [
        {
            _id: 3,
            name: "Wyrażam zgodę na przetwarzanie moich danych osobowych, w celu otrzymywania na podany adres e-mail Newslettera sklepu internetowego dstreet.pl*"
        },
        {
            _id: 4,
            name: "Wyrażam zgodę na przetwarzanie moich danych osobowych, w celu otrzymywania na podany numer telefonu Newslettera SMS sklepu internetowego dstreet.pl*"
        }
    ]


    const showCategories = () =>
        categories.map((c) => (
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
        if (categoryIds.length === 4) {
            setCategoryIds([])
            setVisible(false)

        } else {
            setCategoryIds([1, 2, 3, 4])
            setVisible(true)
        }


    }

    const showAggrementos = () => {
        setShowAgremment(true)
    }

    return (
        <>

            <Form

                layout="inline"
                colon="true"
                form={form}
                preserve="true"
                initialValues={{
                    layout: formLayout,
                }}
                onValuesChange={onFormLayoutChange}
                className="my-3"
            >

                <Form.Item >
                    <Input
                        style={{ color: "black", borderRadius: "20px" }}
                        placeholder="Adres e-mail"
                        onClick={showAggrementos}
                    />

                </Form.Item>
                <Form.Item >


                    <Input
                        style={{ color: "black", borderRadius: "20px" }}
                        placeholder="Twoje imię" />
                </Form.Item>
                <Form.Item >
                    <Button type="button"
                        onClick={showAssignmentPuntos}
                        style={{ background: "black", color: "white", borderRadius: "20px" }}>Zapisz się</Button>
                </Form.Item>
            </Form>

            {showAgremment && <div >
                <button type="button"
                    className="btn  btn-outline-dark btn-lg  btn-outline-dark my-3"
                    onClick={checkAll}
                >Zaznacz wszystko</button>

                <div style={{ marginLeft: '5px', marginBottom: '33px' }}>

                    <span >*Kupon rabatowy jest jednorazowego użytku i ważny przy zakupie za łączną kwotę min. 200zł.
                    Kupon rabatowy nie może być wykorzystany przy zakupie kart upominkowych oraz łączony z innymi rabatami.
*Kupon rabatowy jest jednorazowego użytku i ważny przy zakupie za łączną kwotę min. 200zł.</span>


                </div>


                <Menu

                >
                    <div >{showCategories()}</div>
                    <div >{showCategories2()}</div>
                </Menu>
                <div className="bg-light pl-4 py-2 mt-4">
                    <span style={{ color: 'grey' }} >
                        Informujemy, że Współadministratorami Państwa danych osobowych są D-TEX sp. z o.o. z siedzibą w Wieluniu (98-300) przy ul. Jana Długosza 5 oraz Grzegorz Drop prowadzący działalność gospodarczą pod firmą Grzegorz Drop F.H. „Milano” z siedzibą w Wieluniu (98-300), przy ul. Jana Długosza 5. Współadministratorzy przetwarzają dane osobowe zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych, RODO). Mają Państwo prawo do wglądu do swoich danych osobowych, w tym uzyskania ich kopii, prawo do sprostowania, przenoszenia, żądania usunięcia lub ograniczenia ich przetwarzania, a także prawo do wniesienia sprzeciwu wobec przetwarzania danych przez Współadministratorów i prawo do wniesienia skargi organu nadzorczego - Prezesa Urzędu Ochrony Danych Osobowych.
            </span>
                </div>
                <div className="bg-light pl-4 py-2 mt-3">
                    <span style={{ color: 'grey' }} >
                        Więcej na temat przetwarzania danych osobowych znajdą Państwo w klauzuli informacyjnej – Kliknij tutaj aby przejśc do strony
            </span>
                </div>

            </div>
            }

            <div className="container-fluid"></div>
            <div className="row text-center">
                <div className="col-12">
                    <hr />
                    <i className="fab fa-instagram fa-2x p-3"></i>
                    <i className="fab fa-facebook fa-2x p-3" ></i>
                    <i className="fab fa-blogger-b fa-2x p-3"></i>


                    <hr />
                </div>
            </div>

            <div className="row-12 text-center">
                <Row gutter={[16, 16]}>
                    <Col span={6}>
                        <h4>INFOMACJE</h4>
                        <div>O Dstreet</div>
                        <div>Blog</div>
                        <div>Regulamin sklepu</div>
                        <div>Pollityka prywatności</div>
                        <div>Program rabatowy</div>
                    </Col>
                    <Col span={6}>
                        <h4>OBSŁUGA KLIENTA</h4>

                        <div>FAQ</div>
                        <div>Zwroty i reklamacje</div>
                        <div>Jak odebrać zamówienie</div>
                        <div>Jak kupować</div>
                        <div>Zdjęcia i kolory</div>
                        <div>Inpiracje Dstreet</div>
                    </Col>
                    <Col span={6}>
                        <h4>DOSTAWA I PŁATNOŚĆ</h4>

                        <div>Metody płatności</div>
                        <div>Koszy i czas przesyłek</div>
                        <div>Śledzenie przesyłek</div>

                    </Col>
                    <Col span={6}>
                        <h4>MOJE KONTO</h4>

                        <div>Zarejestruj się</div>
                        <div>Moje zamówienia</div>
                        <div>Koszyk</div>
                        <div>Ulubione</div>
                        <div>Historia transakcji</div>
                    </Col>
                </Row>
            </div>


            <div className="container-fluid"></div>
            <div className="row text-center">
                <div className="col-12">
                    <hr />
                    <img style={{ height: "50px", marginRight: "22px" }}
                        src="https://res.cloudinary.com/mckrus/image/upload/v1612275070/dsstreet/appstore_vcmwx1.jpg" alt="" />
                    <img style={{ height: "50px", marginLeft: "22px" }}
                        src="https://res.cloudinary.com/mckrus/image/upload/v1612275070/dsstreet/Gplay_qrtzuc.jpg" alt="" />



                </div>
            </div>

        </>
    );
};

export default SubscriptionForm