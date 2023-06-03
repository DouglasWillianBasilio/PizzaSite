import React, {useState} from 'react'
import logo from "../assets/pizzaLogo.png"
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import style from '../styles/Navbar.css'


function Navbar() {

    const [openLinks, setOpenLinks] = useState(false)
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };

    return (
        <div className='navbar'>
            <div className='leftSide' id={openLinks ? "open" : "close"}>
                <img src={logo} />
                <div className='hiddenLinks'>
                    <Link to="/"> Home </Link>
                    <Link to="/menu"> Menu </Link>
                    <Link to="/sobre"> Sobre </Link>
                    <Link to="/contato"> Contato </Link>
                </div>
            </div>
            <div className='rightSide'>
                <Link to="/"> Home </Link>
                <Link to="/menu"> Menu </Link>
                <Link to="/sobre"> Sobre </Link>
                <Link to="/contato"> Contato </Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    )
}

export default Navbar
