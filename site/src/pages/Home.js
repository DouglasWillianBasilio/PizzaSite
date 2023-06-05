import React from 'react';
import styles from "../styles/Home.css"
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg"

function Home() {
    return (
        <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className='headerContainer'>
                <h1> Dougla'S Pizzaria </h1>
                <p> PIZZA PARA TODOS OS GOSTOS</p>
                <Link to="/menu">
                    <button> PEÇA AGORA </button>
                </Link>
            </div>
        </div>
    )
}

export default Home
