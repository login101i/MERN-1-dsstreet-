import React, { useState } from 'react'
import { Menu, Row, Col, Typography, Space, Button } from 'antd';
import {Link} from 'react-router-dom'


import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { Text, Title } = Typography;

const { SubMenu } = Menu;

const MenuNavigation = () => {

    const [current, setCurrent] = useState("home");

    const handleClick = (e) => {
        // console.log(e.key);
        setCurrent(e.key);
    };

    const okryciaWierzchnie = ["Kurtki", "Płaszcze", "Kamizelki"]
    const bluzy = ["Rozpinane", "Przez głowę", "Bez kaptura", "Z kapturem", "Z nadrukiem", "Gładkie"]
    const swetry = ["Rozpinane", "Przez głowę"]
    const koszulki = ["T-hirty basic", "T-shirty z nadrukiem", "Tank top", "Longsleeve", "Polo"]

    return (
        <div className="container-fluid d-flex justify-content-center md-12 ">


            <Menu
                onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="home" >
                    <h6 className="pb-2">NOWOŚCI</h6>
                </Menu.Item>
                <Menu.Item key="men" >
                    <Link to='/menscollection'>
   <h6 className="pb-2">ODZIEŻ MĘSKA</h6>
                    </Link>
                 
                </Menu.Item>

                <Menu.Item key="shoes" >
                    <h6 className="pb-2">OBUWIE</h6>
                </Menu.Item>

                <SubMenu key="SubMenu" title={<h6 className="pb-2">KOSZULE</h6>}>

                    <Menu.ItemGroup style={{ width: '100vw' }}>


                        <Row gutter={[24, 12]} style={{ marginLeft: '22px' }}>
                            <Col span={4}  >
                                <Title level={5} className="mb-3" >
                                    Okrycia Wierzchnie
                                    </Title>
                                <Space size={[16, 32]} direction="vertical" >
                                    {okryciaWierzchnie.map((item, index) => (
                                        <Text key={index}>{item}</Text>
                                    ))}
                                </Space>
                            </Col>


                            <Col span={4}  >
                                <Title level={5} className="mb-3" >
                                    Bluzy
                                    </Title>
                                <Space size={[16, 32]} direction="vertical" >
                                    {bluzy.map((item, index) => (
                                        <Text key={index}>{item}</Text>
                                    ))}
                                </Space>
                            </Col>


                            <Col span={4}  >
                                <Title level={5} className="mb-3" >
                                    Bluzy
                                    </Title>
                                <Space size={[16, 32]} direction="vertical" >
                                    {swetry.map((item, index) => (
                                        <Text key={index}>{item}</Text>
                                    ))}
                                </Space>
                            </Col>

                            <Col span={4}  >
                                <Title level={5} className="mb-3" >
                                    Bluzy
                                    </Title>
                                <Space size={[16, 32]} direction="vertical" >
                                    {koszulki.map((item, index) => (
                                        <Text key={index}>{item}</Text>
                                    ))}
                                </Space>
                            </Col>

                        </Row>

                        <Row gutter={[24, 12]} style={{ marginLeft: '22px' }}>

                            <Col span={4}  >
                                <Title level={5} className="mb-3" >
                                    Bluzy
                                    </Title>
                                <Space size={[16, 32]} direction="vertical" >
                                    {koszulki.map((item, index) => (
                                        <Text key={index}>{item}</Text>
                                    ))}
                                </Space>
                            </Col>


                            <Col span={4}  >
                                <Title level={5} className="mb-3" >
                                    Okrycia Wierzchnie
                                    </Title>
                                <Space size={[16, 32]} direction="vertical" >
                                    {okryciaWierzchnie.map((item, index) => (
                                        <Text key={index}>{item}</Text>
                                    ))}
                                </Space>
                            </Col>


                            <Col span={4}  >
                                <Title level={5} className="mb-3" >
                                    Bluzy
                                    </Title>
                                <Space size={[16, 32]} direction="vertical" >
                                    {bluzy.map((item, index) => (
                                        <Text key={index}>{item}</Text>
                                    ))}
                                </Space>
                            </Col>


                            <Col span={4}  >
                                <Title level={5} className="mb-3" >
                                    Bluzy
                                    </Title>
                                <Space size={[16, 32]} direction="vertical" >
                                    {swetry.map((item, index) => (
                                        <Text key={index}>{item}</Text>
                                    ))}
                                </Space>
                            </Col>


                        </Row>

                    </Menu.ItemGroup>

                </SubMenu>

                <Menu.Item key="accessories">
                    <h6 className="pb-2">AKCESORIA</h6>
                </Menu.Item>

                <Menu.Item key="kontakt">
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                        <h6 className="pb-2">KONTAKT</h6>
                    </a>
                </Menu.Item>
                <Menu.Item key="endofcollection">
                    <h6 className="pb-2">KOŃCÓWKI KOLEKCJI</h6>
                </Menu.Item>
                <Menu.Item key="sale">
                    <h6 className="pb-2">SALE</h6>
                </Menu.Item>
                <Menu.Item key="bestseller">
                    <h6 className="pb-2">BESTSELLERY</h6>
                </Menu.Item>

            </Menu>
        </div>
    );
}



export default MenuNavigation
