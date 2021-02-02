import React, { useState } from 'react'

import { Menu, Radio, Checkbox } from 'antd';
import {
    DollarOutlined,
    DownSquareOutlined,
    StarOutlined,
    MailOutlined
} from '@ant-design/icons';

const { SubMenu } = Menu;

const SideBar = () => {
    const [tshirt, setTshirt] = useState()
    const [categoryIds, setCategoryIds] = useState([]);

    const [colors, setColors] = useState([
        "Black",
        "Brown",
        "Silver",
        "White",
        "Blue",
    ]);
    const [categories, setCategories] = useState([
        "Black",
        "Brown",
        "Silver",
        "White",
        "Blue",
    ]);


    let handleSlider
    let price


    // 8. show products based on color
    const showColors = () =>
        colors.map((c) =>

            <Radio
                key={c}
                value={c}
                name={c}
                // checked={c === color}
                // onChange={handleColor}
                className="pb-1 pl-4 pr-4"
            >
                {c}
            </Radio>

        );


    const handleClick = e => {
        console.log('click ', e);
    };


    // 2. koszule
    const showThirt = () => (
        <>
            <Checkbox
                className="pb-2 pl-4 pr-4"
                onChange={handleShippingchange}
                value="Długi rękaw"
                checked={tshirt === "Długi rękaw"}
            >
                Długi rękaw
      </Checkbox>

            <Checkbox
                className="pb-2 pl-4 pr-4"
                onChange={handleShippingchange}
                value="Krótki rękaw"
                checked={tshirt === "Krótki rękaw"}
            >
                Krótki rękaw
      </Checkbox>
        </>
    )

    const handleShippingchange = (e) => {
        setTshirt(e.target.value);

    }



    const showCategories = () =>
        categories.map((c) => (
            <div key={c._id}>
                <Checkbox
                    onChange={handleCheck}
                    className="pb-2 pl-4 pr-4"
                    value={c._id}
                    name="category"
                    checked={categoryIds.includes(c._id)}
                >
                    {c.name}
                </Checkbox>
                <br />
            </div>
        ));
    const handleCheck = (e) => {
        // reset

        // console.log(e.target.value);
        let inTheState = [...categoryIds];
        let justChecked = e.target.value;
        let foundInTheState = inTheState.indexOf(justChecked); // index or -1

        // indexOf method ?? if not found returns -1 else return index [1,2,3,4,5]
        if (foundInTheState === -1) {
            inTheState.push(justChecked);
        } else {
            // if found pull out one item from index
            inTheState.splice(foundInTheState, 1);
        }

        setCategoryIds(inTheState);

    };




    return (

        <>
            <h4 className="text-center">Filtry</h4>
            <hr />

            <Menu
                onClick={handleClick}

                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <SubMenu key="sub1" title={
                    <span className="h6">
                        <DownSquareOutlined /> ODZIEŻ MĘSKA
                </span>
                }>
                    
                        <Menu.Item key="1">Okrycia wierzchnie</Menu.Item>
                        <Menu.Item key="2">Bluzy</Menu.Item>
                        <Menu.Item key="3">Swetry</Menu.Item>
                  
                  
                </SubMenu>
                {/* shipping */}
                <SubMenu
                    key="7"
                    title={
                        <span className="h6">
                            <DownSquareOutlined /> KOSZULE
                </span>
                    }
                >
                    <div style={{ maringTop: "-10px" }} className="pr-5">
                        {showThirt()}
                    </div>
                </SubMenu>

                {/* category */}
                <SubMenu
                    key="2"
                    title={
                        <span className="h6">
                            <DownSquareOutlined /> Kategorie
                </span>
                    }
                >
                    <div style={{ maringTop: "-10px" }}>{showCategories()}</div>
                </SubMenu>


            </Menu>
        </>

    )
}

export default SideBar
