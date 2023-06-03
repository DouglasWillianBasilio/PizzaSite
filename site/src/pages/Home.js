import React from 'react';
import styles from '../styles/Home.css';
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg"

function Home() {
    return (
        <div className='home'>
            <div className='headerContainer' 
            style={{ backgroundImage: `url(${BannerImage})` }}>
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
