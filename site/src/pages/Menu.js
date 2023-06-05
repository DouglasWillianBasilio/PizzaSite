import React from 'react';
import { MenuList } from "../helpers/MenuList.js";
import MenuItem from '../components/MenuItem.js';
import styles from "../styles/Menu.css"

function Menu() {
    return (
        <div className='menu'>
            <h1 className='menuTitle'>Nosso Menu</h1>
            <div className='menuList'>
                {MenuList.map((menuItem, key) => {
                    return(
                    <MenuItem
                    key={key}
                        image={menuItem.image}
                        nome={menuItem.nome}
                        preco={menuItem.preco}
                    />
                    );
                })}
            </div>
        </div>
    )
}

export default Menu;
