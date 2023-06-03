import React from 'react'
import logo from "../assets/pizzaLogo.png"
import { Link } from 'react-router-dom';
import style from '../styles/Navbar.css'


function Navbar() {
    return (
        <div className='navbar'>
            <div className='leftSide'>
                <img src={logo} />
            </div>
            <div className='rightSide'>
                <Link to="/"> Home </Link>
                <Link to="/menu"> Menu </Link>
                <Link to="/sobre"> Sobre </Link>
                <Link to="/contato"> Contato </Link>
            </div>
        </div>
    )
}

export default Navbar
