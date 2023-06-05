import React from 'react'
import styles from "../styles/Contato.css"
import PizzaLeft from "../assets/pizzaLeft.jpg"
function Contato() {
    return (
        <div className='contato'>
            <div className='leftSide' style={{ backgroundImage: `url(${PizzaLeft})` }}></div>

            <div className='rightSide'>
                <h1> ENTRE EM CONTATO</h1>

                <form id='contato-form' method='POST'>
                    <label htmlFor='nome'> Nome Completo </label>
                    <input nome="nome" placeholder='Coloque seu nome...' type='text' />

                    <label htmlFor='celular'> WhatsApp </label>
                    <input nome="celular" placeholder='Coloque seu número...' type='text' />

                    <label htmlFor='mensagem'> Sua mensagem </label>
                    <textarea rows="6" 
                    placeholder='Sua mensagem' 
                    name='mensagem'
                    required
                    >
                    </textarea>

                    <button type='submit'>ENVIAR</button>
                </form>
            </div>
        </div>
    )
}

export default Contato
