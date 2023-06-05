import React from 'react'
import styles from "../styles/SobreNos.css"
import SobreNos from "../assets/multiplePizzas.jpeg";

function Sobre() {
    return (
        <div className='sobre'>
            <div className='sobreTop' style={{ backgroundImage: `url(${SobreNos})` }}></div>
            <div className='sobreBottom'>
                <h1>
                    SOBRE NÓS
                </h1>
                <p>Na nossa pizzaria, somos apaixonados por pizza e por oferecer aos nossos clientes uma experiência gastronômica excepcional. Com anos de tradição e um toque de inovação, estamos aqui para levar até você os sabores irresistíveis da autêntica pizza italiana.</p>
            </div>
        </div>
    )
}

export default Sobre
